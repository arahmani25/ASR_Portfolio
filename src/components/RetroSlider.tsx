import React, { useRef, useCallback, useEffect, useState } from 'react';

interface RetroSliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export function RetroSlider({ 
  value, 
  min, 
  max, 
  step = 1, 
  onChange, 
  disabled = false,
  className = ""
}: RetroSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const percentage = ((value - min) / (max - min)) * 100;

  const calculateValue = useCallback((clientX: number) => {
    if (!sliderRef.current) return value;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const newPercentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    const newValue = Math.round(((newPercentage / 100) * (max - min) + min) / step) * step;
    
    return Math.max(min, Math.min(max, newValue));
  }, [min, max, step, value]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isDragging) return;
    
    const newValue = calculateValue(e.clientX);
    onChange(newValue);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    e.preventDefault();
    setIsDragging(true);
    
    const newValue = calculateValue(e.clientX);
    onChange(newValue);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || disabled) return;
    
    e.preventDefault();
    const newValue = calculateValue(e.clientX);
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
      className={`mac-slider ${className}`} 
      ref={sliderRef} 
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
      <div 
        className="mac-slider-fill" 
        style={{ width: `${percentage}%` }}
      />
      <div 
        className="mac-slider-thumb"
        style={{ 
          left: `${percentage}%`,
          cursor: disabled ? 'default' : (isDragging ? 'grabbing' : 'grab')
        }}
      />
    </div>
  );
}