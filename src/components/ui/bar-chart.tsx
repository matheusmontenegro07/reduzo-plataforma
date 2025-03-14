"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface BarChartProps {
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  height?: number;
  className?: string;
  showValues?: boolean;
  maxValue?: number;
}

export function BarChart({ 
  data, 
  height = 200, 
  className,
  showValues = true,
  maxValue
}: BarChartProps) {
  const highestValue = maxValue || Math.max(...data.map(item => item.value));
  
  return (
    <div className={cn("w-full space-y-2", className)}>
      <div 
        className="flex items-end justify-between gap-2 pt-6" 
        style={{ height: `${height}px` }}
      >
        {data.map((item, index) => {
          const percentage = (item.value / highestValue) * 100;
          return (
            <div 
              key={index} 
              className="group relative flex flex-1 flex-col items-center"
            >
              {showValues && (
                <span className="absolute -top-6 text-xs text-muted-foreground">
                  {item.value}
                </span>
              )}
              <div 
                className="relative w-full rounded-t-md transition-all group-hover:opacity-80"
                style={{ 
                  height: `${percentage}%`,
                  backgroundColor: item.color || 'var(--primary)',
                  minWidth: '12px',
                  maxWidth: '80px'
                }}
              >
                <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 