// src/components/TimelineItem.tsx

/**
 * @file Componente para exibir um único item em uma linha do tempo vertical.
 * Usado para listar experiências de trabalho e educação.
 */

import React from 'react';
// CORREÇÃO: Renomeado o alias de importação para evitar confusão com o nome do componente.
import type { TimelineItem as TimelineItemType } from '../types/portfolio';
import { Briefcase, GraduationCap } from 'lucide-react';

// --- PROPS ---
type TimelineItemProps = TimelineItemType

// --- SUBCOMPONENTES ---

/** Ícone que fica na linha do tempo, variando entre experiência e educação. */
const TimelineIcon: React.FC<{ type: TimelineItemType['type'] }> = React.memo(({ type }) => {
  // Escolhe o ícone com base no tipo de item da timeline.
  const Icon = type === 'experience' ? Briefcase : GraduationCap;

  return (
    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-custom-gold ring-8 ring-dark-card">
      <Icon className="h-5 w-5 text-white" />
    </div>
  );
});

/** Linha vertical que conecta os itens da timeline. */
const TimelineLine: React.FC = () => (
  <div className="absolute left-4 top-2 -ml-px mt-6 h-full w-0.5 bg-gray-700"></div>
);

// --- COMPONENTE PRINCIPAL ---
const TimelineItem: React.FC<TimelineItemProps> = React.memo(
  ({ type, year, title, institution, description }) => (
    <div className="relative pl-16 pb-8">
      {/* A linha deve vir antes do ícone no JSX para ficar por baixo no eixo Z */}
      <TimelineLine />
      <TimelineIcon type={type} />
      
      <div className="flex flex-col gap-1">
        <span className="inline-block text-xs font-semibold px-3 py-1 bg-dark-card text-gray-400 rounded-full w-fit">
          {year}
        </span>
        <h4 className="text-lg font-bold text-white">
          {title}
          <span className="ml-2 font-medium text-gray-400">| {institution}</span>
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
);

export default TimelineItem;