// src/components/SkillCircle.tsx

/**
 * @file Componente para exibir uma habilidade em um anel de progresso circular.
 * Ele é otimizado com React.memo e inclui atributos de acessibilidade.
 */

import React from 'react';
import type { Skill } from '../types/portfolio'; // CORREÇÃO: Importa o tipo 'Skill' renomeado.

// --- CONSTANTES DE CONFIGURAÇÃO ---
// Centralizar essas constantes facilita a manutenção e o ajuste do visual.
const SIZE = 160; // Tamanho do SVG em pixels (largura e altura)
const STROKE_WIDTH = 8; // Espessura da linha do círculo
const RADIUS = (SIZE - STROKE_WIDTH) / 2; // Raio calculado para caber no SVG
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // Comprimento da circunferência

// --- PROPS ---
// Usar 'extends' é uma forma limpa de basear as props em um tipo existente.
type SkillCircleProps = Skill

// --- COMPONENTE ---
const SkillCircle: React.FC<SkillCircleProps> = React.memo(({ name, percent }) => {
  // O cálculo do preenchimento do círculo.
  const strokeDashoffset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      // Atributos de acessibilidade para leitores de tela
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${name} skill level`}
    >
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${SIZE} ${SIZE}`}>
          {/* Círculo de Fundo */}
          <circle
            className="text-gray-700"
            strokeWidth={STROKE_WIDTH}
            stroke="currentColor"
            fill="transparent"
            r={RADIUS}
            cx={SIZE / 2}
            cy={SIZE / 2}
          />
          {/* Círculo de Progresso */}
          <circle
            className="text-custom-gold transition-all duration-1000 ease-out"
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={RADIUS}
            cx={SIZE / 2}
            cy={SIZE / 2}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
          {`${percent}%`}
        </span>
      </div>
      <p className="text-sm font-medium text-gray-300 uppercase mt-3 tracking-wider">{name}</p>
    </div>
  );
});

export default SkillCircle;