
import React from 'react';
import type { StatItem } from '../types/portfolio';

// Note: A interface StatItem já tem a definição de 'icon' como React.FC<React.SVGProps<SVGSVGElement>>
// Vamos usar essa interface diretamente.

const StatsBox: React.FC<StatItem> = ({ count, label, icon: Icon }) => (
  <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg flex flex-col justify-center items-center text-center">
    {/* Ícone é renderizado aqui. Passamos tamanho e classes */}
    <Icon className="text-yellow-500 mb-2" size={32} />
    <p className="text-4xl font-extrabold text-yellow-500 mb-1">{count}</p>
    <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">{label}</p>
  </div>
);

export default StatsBox;
