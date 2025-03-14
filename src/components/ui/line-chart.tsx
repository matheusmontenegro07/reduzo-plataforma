"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface LineChartProps {
  data: {
    label: string;
    value: number;
  }[];
  height?: number;
  width?: number;
  className?: string;
  lineColor?: string;
  showLabels?: boolean;
  showValues?: boolean;
}

export function LineChart({ 
  data, 
  height = 150, 
  width = 300,
  className,
  lineColor = "var(--primary)",
  showLabels = true,
  showValues = true
}: LineChartProps) {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map(item => item.value));
  const padding = 20;
  const chartWidth = width - (padding * 2);
  const chartHeight = height - (padding * 2);
  
  // Calcular pontos para desenhar a linha
  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * chartWidth + padding;
    const y = chartHeight - ((item.value / maxValue) * chartHeight) + padding;
    return { x, y, ...item };
  });

  // Gerar caminho SVG da linha
  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  // Gerar caminho para área preenchida abaixo da linha
  const areaPath = `
    ${pathData} 
    L ${points[points.length - 1].x} ${chartHeight + padding} 
    L ${points[0].x} ${chartHeight + padding} 
    Z
  `;

  return (
    <div className={cn("relative w-full", className)} style={{ height: `${height}px` }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        {/* Eixos */}
        <line 
          x1={padding} 
          y1={padding} 
          x2={padding} 
          y2={chartHeight + padding} 
          stroke="#e2e8f0" 
          strokeWidth="1" 
        />
        <line 
          x1={padding} 
          y1={chartHeight + padding} 
          x2={chartWidth + padding} 
          y2={chartHeight + padding} 
          stroke="#e2e8f0" 
          strokeWidth="1" 
        />
        
        {/* Linhas de grade horizontais */}
        {[0.25, 0.5, 0.75].map((ratio, i) => {
          const y = chartHeight - ((maxValue * ratio) / maxValue * chartHeight) + padding;
          return (
            <React.Fragment key={i}>
              <line 
                x1={padding} 
                y1={y} 
                x2={chartWidth + padding} 
                y2={y} 
                stroke="#e2e8f0" 
                strokeWidth="1" 
                strokeDasharray="4,4" 
              />
              {showValues && (
                <text 
                  x={padding - 5} 
                  y={y} 
                  textAnchor="end" 
                  alignmentBaseline="middle" 
                  fontSize="10" 
                  fill="#64748b"
                >
                  {Math.round(maxValue * ratio)}
                </text>
              )}
            </React.Fragment>
          );
        })}
        
        {/* Área preenchida abaixo da linha */}
        <path 
          d={areaPath} 
          fill={lineColor} 
          fillOpacity="0.1" 
        />
        
        {/* Linha principal */}
        <path 
          d={pathData} 
          fill="none" 
          stroke={lineColor} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Pontos */}
        {points.map((point, i) => (
          <circle 
            key={i} 
            cx={point.x} 
            cy={point.y} 
            r="3" 
            fill="#fff" 
            stroke={lineColor} 
            strokeWidth="2" 
          />
        ))}
        
        {/* Rótulos do eixo X */}
        {showLabels && points.map((point, i) => (
          <text 
            key={i}
            x={point.x} 
            y={chartHeight + padding + 15} 
            textAnchor="middle" 
            fontSize="10" 
            fill="#64748b"
          >
            {point.label}
          </text>
        ))}
      </svg>
    </div>
  );
} 