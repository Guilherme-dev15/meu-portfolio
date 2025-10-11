// Arquivo: src/components/TimelineItem.tsx

import React from 'react';
import type { TimelineItem as ITimelineItem } from '../types/portfolio'
import { Check } from 'lucide-react'; // Adicionando Check Icon, como no TimelineItem anterior

const TimelineItem: React.FC<ITimelineItem> = ({ year, title, institution, description }) => (
    <div className="relative pb-8 pl-8 sm:pl-16 last:pb-0">
        <div className="bg-gray-800 p-4 rounded-lg shadow-xl">
            {/* Tag de Ano e Instituição */}
            <div className="flex flex-wrap items-center space-x-3 mb-2">
                <span className="inline-block text-xs font-semibold px-3 py-1 bg-yellow-600 text-gray-900 rounded-full">
                    {year}
                </span>
                <span className="text-sm font-medium text-gray-400 italic"> | {institution}</span>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Círculo de Ícone */}
        <div className="absolute top-0 left-0 sm:left-4 transform -translate-x-1/2 p-1 bg-yellow-500 rounded-full z-10">
            <Check size={16} className="text-gray-900" />
        </div>

        {/* Linha Vertical (Conexão) */}
        <div className="absolute left-[3px] sm:left-[11px] top-0 bottom-0 w-0.5 bg-gray-700"></div>
    </div>
);

export default TimelineItem;
