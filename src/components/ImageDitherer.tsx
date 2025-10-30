import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { RetroWindow } from "./RetroWindow";
import { RetroButton } from "./RetroButton";
import { VerticalRetroSlider } from "./VerticalRetroSlider";
import Trash from "../imports/Trash";

interface ImageDithererProps {}

export function ImageDitherer({}: ImageDithererProps) {
  const [originalImage, setOriginalImage] =
    useState<HTMLImageElement | null>(null);
  const [pendingObjectUrl, setPendingObjectUrl] = useState<
    string | null
  >(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [threshold, setThreshold] = useState(128);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const originalCanvasRef = useRef<HTMLCanvasElement>(null);
  const ditheredCanvasRef = useRef<HTMLCanvasElement>(null);
  const originalImageDataRef = useRef<ImageData | null>(null);
  const processingRef = useRef<boolean>(false);

  // Helper function to setup retina canvas
  const setupRetinaCanvas = useCallback(
    (
      canvas: HTMLCanvasElement,
      width: number,
      height: number,
    ) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      const devicePixelRatio = window.devicePixelRatio || 1;

      // Set the actual canvas size in memory (scaled up for retina)
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;

      // Set the display size (CSS pixels)
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      // Scale the canvas context to ensure correct drawing operations
      ctx.scale(devicePixelRatio, devicePixelRatio);

      return ctx;
    },
    [],
  );

  const atkinsonDither = useCallback(
    (
      imageData: ImageData,
      thresholdValue: number,
    ): Promise<ImageData> => {
      return new Promise((resolve) => {
        const { data, width, height } = imageData;
        const output = new Uint8ClampedArray(data);

        const totalPixels = width * height;
        let processedPixels = 0;
        let currentY = 0;
        const chunkSize = Math.max(1, Math.floor(height / 50)); // Smaller chunks for better responsiveness

        const processChunk = () => {
          if (!processingRef.current) {
            resolve(new ImageData(output, width, height));
            return;
          }

          const endY = Math.min(currentY + chunkSize, height);

          for (let y = currentY; y < endY; y++) {
            for (let x = 0; x < width; x++) {
              const idx = (y * width + x) * 4;

              // Convert to grayscale
              const gray = Math.round(
                0.299 * output[idx] +
                  0.587 * output[idx + 1] +
                  0.114 * output[idx + 2],
              );

              // Apply threshold
              const newValue = gray > thresholdValue ? 255 : 0;
              const error = gray - newValue;

              // Set the new pixel value
              output[idx] = newValue; // R
              output[idx + 1] = newValue; // G
              output[idx + 2] = newValue; // B
              output[idx + 3] = 255; // A

              // Distribute error using Atkinson dithering matrix
              const errorFraction = error / 8;

              const distributeError = (
                dx: number,
                dy: number,
              ) => {
                const nx = x + dx;
                const ny = y + dy;
                if (
                  nx >= 0 &&
                  nx < width &&
                  ny >= 0 &&
                  ny < height
                ) {
                  const nIdx = (ny * width + nx) * 4;
                  const newR = output[nIdx] + errorFraction;
                  const newG = output[nIdx + 1] + errorFraction;
                  const newB = output[nIdx + 2] + errorFraction;

                  output[nIdx] = Math.max(
                    0,
                    Math.min(255, newR),
                  );
                  output[nIdx + 1] = Math.max(
                    0,
                    Math.min(255, newG),
                  );
                  output[nIdx + 2] = Math.max(
                    0,
                    Math.min(255, newB),
                  );
                }
              };

              // Atkinson dithering pattern
              distributeError(1, 0); // Right
              distributeError(2, 0); // Right + 1
              distributeError(-1, 1); // Below left
              distributeError(0, 1); // Below
              distributeError(1, 1); // Below right
              distributeError(0, 2); // Below + 1

              processedPixels++;
            }
          }

          currentY = endY;
          const newProgress = Math.round(
            (processedPixels / totalPixels) * 100,
          );
          setProgress(newProgress);

          if (currentY < height) {
            setTimeout(processChunk, 0); // Use setTimeout instead of requestAnimationFrame for better control
          } else {
            const resultImageData = new ImageData(
              output,
              width,
              height,
            );
            resolve(resultImageData);
          }
        };

        setTimeout(processChunk, 0);
      });
    },
    [],
  );

  const applyDithering = useCallback(
    async (thresholdValue: number) => {
      if (
        !originalImageDataRef.current ||
        processingRef.current
      )
        return;

      const ditheredCanvas = ditheredCanvasRef.current;
      const ditheredCtx = ditheredCanvas?.getContext("2d");

      if (!ditheredCanvas || !ditheredCtx) return;

      processingRef.current = true;
      setIsProcessing(true);
      setProgress(0);

      try {
        const dithered = await atkinsonDither(
          originalImageDataRef.current!,
          thresholdValue,
        );
        if (processingRef.current) {
          // Clear the canvas first
          ditheredCtx.clearRect(
            0,
            0,
            ditheredCanvas.width,
            ditheredCanvas.height,
          );

          // Create a temporary canvas to put the image data
          const tempCanvas = document.createElement("canvas");
          const tempCtx = tempCanvas.getContext("2d");
          if (tempCtx) {
            tempCanvas.width = dithered.width;
            tempCanvas.height = dithered.height;
            tempCtx.putImageData(dithered, 0, 0);

            // Draw the temporary canvas to the main canvas (this will be scaled by the retina scaling)
            const displayWidth =
              parseInt(ditheredCanvas.style.width) ||
              ditheredCanvas.width;
            const displayHeight =
              parseInt(ditheredCanvas.style.height) ||
              ditheredCanvas.height;
            ditheredCtx.drawImage(
              tempCanvas,
              0,
              0,
              displayWidth,
              displayHeight,
            );
          }
        }
      } catch (error) {
        console.error("Error during dithering:", error);
      } finally {
        processingRef.current = false;
        setIsProcessing(false);
        setProgress(0);
      }
    },
    [atkinsonDither],
  );

  const processImage = useCallback(
    (img: HTMLImageElement, objectUrl: string) => {
      const originalCanvas = originalCanvasRef.current;
      const ditheredCanvas = ditheredCanvasRef.current;

      if (!originalCanvas || !ditheredCanvas) return;

      // Set canvas size to match image (limit size for performance)
      const maxSize = 384;
      const scale = Math.min(
        maxSize / img.width,
        maxSize / img.height,
        1,
      );
      const scaledWidth = Math.floor(img.width * scale);
      const scaledHeight = Math.floor(img.height * scale);

      // Setup retina canvases
      const originalCtx = setupRetinaCanvas(
        originalCanvas,
        scaledWidth,
        scaledHeight,
      );
      const ditheredCtx = setupRetinaCanvas(
        ditheredCanvas,
        scaledWidth,
        scaledHeight,
      );

      if (!originalCtx || !ditheredCtx) return;

      try {
        // Draw original image
        originalCtx.clearRect(0, 0, scaledWidth, scaledHeight);
        originalCtx.drawImage(
          img,
          0,
          0,
          scaledWidth,
          scaledHeight,
        );

        // Get image data from the original canvas for processing
        // We need to get the image data at the actual canvas resolution
        const devicePixelRatio = window.devicePixelRatio || 1;
        const imageData = originalCtx.getImageData(
          0,
          0,
          scaledWidth * devicePixelRatio,
          scaledHeight * devicePixelRatio,
        );
        originalImageDataRef.current = imageData;

        // Apply initial dithering
        applyDithering(threshold);

        // Clean up object URL
        URL.revokeObjectURL(objectUrl);
        setPendingObjectUrl(null);
      } catch (error) {
        console.error("Error processing image:", error);
        URL.revokeObjectURL(objectUrl);
        setPendingObjectUrl(null);
      }
    },
    [threshold, applyDithering, setupRetinaCanvas],
  );

  // Process image when canvases are available
  useEffect(() => {
    if (
      originalImage &&
      pendingObjectUrl &&
      originalCanvasRef.current &&
      ditheredCanvasRef.current
    ) {
      processImage(originalImage, pendingObjectUrl);
    }
  }, [originalImage, pendingObjectUrl, processImage]);

  // Apply dithering when threshold changes
  useEffect(() => {
    if (originalImageDataRef.current) {
      // Cancel any ongoing processing
      processingRef.current = false;
      // Start new processing after a short delay
      const timer = setTimeout(() => {
        applyDithering(threshold);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [threshold, applyDithering]);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }

      const objectUrl = URL.createObjectURL(file);
      const img = new Image();

      img.onload = () => {
        setOriginalImage(img);
        setPendingObjectUrl(objectUrl);
      };

      img.onerror = () => {
        console.error("Error loading image");
        alert(
          "Error loading image. Please try a different file.",
        );
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    },
    [],
  );

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    // Cancel any ongoing processing
    processingRef.current = false;

    // Clear canvases
    const originalCanvas = originalCanvasRef.current;
    const ditheredCanvas = ditheredCanvasRef.current;

    if (originalCanvas) {
      const ctx = originalCanvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(
          0,
          0,
          originalCanvas.width,
          originalCanvas.height,
        );
      }
    }

    if (ditheredCanvas) {
      const ctx = ditheredCanvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(
          0,
          0,
          ditheredCanvas.width,
          ditheredCanvas.height,
        );
      }
    }

    // Reset state
    setOriginalImage(null);
    setPendingObjectUrl(null);
    setIsProcessing(false);
    setProgress(0);
    setThreshold(128);
    originalImageDataRef.current = null;

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const downloadDithered = () => {
    const canvas = ditheredCanvasRef.current;
    if (!canvas) return;

    try {
      const link = document.createElement("a");
      link.download = "atkinson-dithered.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Error downloading image. Please try again.");
    }
  };

  const handleThresholdChange = (value: number) => {
    setThreshold(value);
  };

  return (
    <div className="wrapper" style={{ padding: "10px" }}>
      {/* Main Window */}
      <RetroWindow
        title="Atkinson dither"
        className="block"
        style={{
          left: "10px",
          top: "30px",
          width: originalImage ? "auto" : "520px",
        }}
      >
        {/* Main Content Area with Slider and Image */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "flex-start",
            minHeight: originalImage ? "auto" : "300px",
          }}
        >
          {/* Left Side: Threshold Slider */}
          <div
            className="slider-well"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "60px",
            }}
          >
            <div
              style={{
                marginBottom: "10px",
                fontSize: "11px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <strong>255</strong>
            </div>

            <VerticalRetroSlider
              value={threshold}
              min={0}
              max={255}
              onChange={handleThresholdChange}
              disabled={!originalImage}
              height={200}
            />

            <div
              style={{
                marginTop: "10px",
                fontSize: "12px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <strong>0</strong>
            </div>

            <div
              style={{
                marginTop: "5px",
                fontSize: "12px",
                textAlign: "center",
                width: "100%",
              }}
            >
              {threshold}
            </div>
          </div>

          {/* Right Side: Image Well */}
          <div style={{ flex: 1 }}>
            <div
              className="imagewell"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: originalImage ? "300px" : "300px",
                height: "100%",
                width: "100%",
              }}
            >
              {originalImage ? (
                <canvas
                  ref={ditheredCanvasRef}
                  style={{
                    width: "100%",
                    height: "auto",
                    imageRendering: "crisp-edges",
                  }}
                />
              ) : (
                <RetroButton
                  onClick={handleUploadClick}
                  disabled={isProcessing}
                >
                  Choose Image...
                </RetroButton>
              )}

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
              />

              {/* Hidden original canvas for processing */}
              <canvas
                ref={originalCanvasRef}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div
          className="bottom-controls"
          style={{
            marginTop: "8px",
            border: "4px double #000",
            padding: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side: Processing message and progress */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {isProcessing && (
              <>
                <div style={{ fontSize: "16px" }}>
                  Processing...
                </div>
                <div
                  className="progressbar"
                  style={{ margin: 0, width: "120px" }}
                >
                  <div
                    className="progresslevel"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div style={{ fontSize: "10px" }}>
                  {progress}%
                </div>
              </>
            )}
          </div>

          {/* Right side: Buttons */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {originalImage && (
              <RetroButton
                onClick={handleReset}
                disabled={isProcessing}
              >
                Trash
              </RetroButton>
            )}

            <RetroButton
              className={"btn-default"}
              onClick={downloadDithered}
              disabled={isProcessing || !originalImage}
            >
              Save
            </RetroButton>
          </div>
        </div>
      </RetroWindow>
    </div>
  );
}