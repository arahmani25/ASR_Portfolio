import React from 'react';

interface MacSliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export function MacSlider({ 
  value, 
  min, 
  max, 
  step = 1, 
  onChange, 
  disabled = false,
  className = ""
}: MacSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`relative ${className}`}>
      {/* Track */}
      <div className="w-full h-4 border-2 border-black bg-white relative">
        {/* Fill */}
        <div 
          className="h-full bg-black border-r border-black"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Thumb */}
        <div 
          className="absolute top-0 w-4 h-4 bg-white border-2 border-black transform -translate-x-1/2 cursor-pointer hover:bg-gray-100"
          style={{ left: `${percentage}%` }}
        />
      </div>
      
      {/* Hidden input for accessibility */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
}