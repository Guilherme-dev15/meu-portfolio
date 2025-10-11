// Arquivo: src/components/SkillCircle.tsx

import React from 'react';
import type { SkillItem } from '../types/portfolio';

const SkillCircle: React.FC<SkillItem> = ({ name, percent }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  // Cálculo do offset para preencher o círculo
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full transform -rotate-90">
          {/* Círculo de Fundo */}
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          {/* Círculo de Progresso */}
          <circle
            className="text-yellow-500 transition-all duration-1000 ease-in-out"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
          {percent}%
        </span>
      </div>
      <p className="text-sm font-medium text-gray-300 uppercase mt-3">{name}</p>
    </div>
  );
};

export default SkillCircle;
