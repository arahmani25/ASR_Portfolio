import React, { useRef, useCallback, useEffect, useState } from 'react';

interface VerticalRetroSliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
  height?: number;
}

export function VerticalRetroSlider({ 
  value, 
  min, 
  max, 
  step = 1, 
  onChange, 
  disabled = false,
  className = "",
  height = 200
}: VerticalRetroSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // For vertical slider, we need to invert the percentage (top = max, bottom = min)
  const percentage = ((value - min) / (max - min)) * 100;

  const calculateValue = useCallback((clientY: number) => {
    if (!sliderRef.current) return value;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clickY = clientY - rect.top;
    // Invert Y coordinate so top is max value, bottom is min value
    const newPercentage = Math.max(0, Math.min(100, ((rect.height - clickY) / rect.height) * 100));
    const newValue = Math.round(((newPercentage / 100) * (max - min) + min) / step) * step;
    
    return Math.max(min, Math.min(max, newValue));
  }, [min, max, step, value]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isDragging) return;
    
    const newValue = calculateValue(e.clientY);
    onChange(newValue);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    e.preventDefault();
    setIsDragging(true);
    
    const newValue = calculateValue(e.clientY);
    onChange(newValue);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || disabled) return;
    
    e.preventDefault();
    const newValue = calculateValue(e.clientY);
    onChange(newValue);
  }, [isDragging, disabled, calculateValue, onChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse event listeners when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div 
      className={`mac-slider-vertical ${className}`} 
      ref={sliderRef} 
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      style={{ 
        cursor: disabled ? 'default' : 'pointer',
        height: `${height}px`
      }}
    >
      <div 
        className="mac-slider-fill-vertical" 
        style={{ 
          height: `${percentage}%`,
          bottom: 0
        }}
      />
      <div 
        className="mac-slider-thumb-vertical"
        style={{ 
          bottom: `${percentage}%`,
          cursor: disabled ? 'default' : (isDragging ? 'grabbing' : 'grab')
        }}
      />
    </div>
  );
}