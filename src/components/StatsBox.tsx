/**
 * @file Componente para exibir uma única estatística em um card.
 * Ideal para seções "Sobre Mim" para destacar números como anos de experiência.
 * Otimizado com React.memo para evitar re-renderizações desnecessárias.
 */

import React from 'react';
import type { Statistic } from '../types/portfolio'; // CORREÇÃO: Importa o tipo 'Statistic' renomeado.

/**
 * Exibe um card com um ícone, um número e um rótulo.
 * @param {Statistic} props - As propriedades do componente, incluindo count, label e icon.
 * @returns {React.ReactElement} O componente StatsBox renderizado.
 */
const StatsBox: React.FC<Statistic> = React.memo(({ count, label, icon: Icon }) => (
  <div className="bg-dark-card border border-gray-700 p-6 rounded-lg flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-custom-gold/10 hover:-translate-y-1">
    <Icon className="text-custom-gold mb-2" size={32} />
    <p className="text-4xl font-extrabold text-custom-gold mb-1">{count}</p>
    <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">{label}</p>
  </div>
));

export default StatsBox;