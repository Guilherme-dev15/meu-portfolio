// src/pages/PortfolioSection.tsx

/**
 * @file Renderiza a seção "My Portfolio", incluindo filtros, grade de projetos e modal de detalhes.
 * A lógica foi dividida em subcomponentes para maior clareza e reutilização.
 */

import React, { useState, useMemo } from 'react';
import { Folder, Code, User, ExternalLink } from 'lucide-react';
import type { Project } from '../types/portfolio'; // CORREÇÃO: Importa 'Project' e 'ProjectCategory'
import Modal from '../components/Modal';

// --- PROPS ---

interface PortfolioSectionProps {
  data: Project[];
}

interface TitleProps {
  main: string;
  background: string;
}

// --- SUBCOMPONENTES (em um projeto maior, poderiam ser arquivos separados) ---

/** Título estilizado para a seção. */
const Title: React.FC<TitleProps> = React.memo(({ main, background }) => (
  <h2 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-16 pt-8 relative">
    <span className="text-gray-500/10 tracking-widest text-[5rem] md:text-[8rem] absolute -top-10 left-1/2 transform -translate-x-1/2 z-0 whitespace-nowrap pointer-events-none">
      {background.toUpperCase()}
    </span>
    <span className="relative z-10">
      <span className="text-custom-gold">{main.toUpperCase().split(' ')[0]}</span>
      {' ' + main.toUpperCase().split(' ').slice(1).join(' ')}
    </span>
  </h2>
));

/** Filtros de categoria para o portfólio. */
const PortfolioFilter: React.FC<{
  options: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}> = React.memo(({ options, activeFilter, onFilterChange }) => (
  <div className="flex justify-center flex-wrap gap-4 mb-10">
    {options.map((filter) => (
      <button
        key={filter}
        onClick={() => onFilterChange(filter)}
        className={`text-sm tracking-widest font-medium transition-colors duration-300 px-1 ${
          activeFilter === filter
            ? 'text-custom-gold border-b-2 border-custom-gold'
            : 'text-gray-400 hover:text-custom-gold'
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
));

/** Card individual para cada projeto na grade. */
const PortfolioCard: React.FC<{ item: Project; onClick: () => void }> = React.memo(({ item, onClick }) => (
  <div
    className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
    onClick={onClick}
    aria-label={`Ver detalhes do projeto ${item.title}`}
  >
    <img
      src={item.imageSrc}
      alt={`Imagem de capa do projeto ${item.title}`}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
      <div className="text-center">
        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
      </div>
    </div>
  </div>
));

/** Conteúdo detalhado do projeto para ser exibido dentro do Modal. */
const PortfolioModalContent: React.FC<{ item: Project }> = ({ item }) => (
  <>
    <h3 className="text-center text-3xl font-bold text-white mb-6 tracking-wider">
      {item.title.toUpperCase()}
    </h3>
    <div className="flex flex-col md:flex-row mb-6 text-white text-sm">
      <div className="md:w-1/2 space-y-3">
        <p className="flex items-center">
          <Folder size={16} className="text-custom-gold mr-3" />
          Project: <span className="font-light ml-2">{item.details.project}</span>
        </p>
        <p className="flex items-center">
          <Code size={16} className="text-custom-gold mr-3" />
          Language: <span className="font-light ml-2">{item.details.language}</span>
        </p>
      </div>
      <div className="md:w-1/2 space-y-3 mt-3 md:mt-0">
        <p className="flex items-center">
          <User size={16} className="text-custom-gold mr-3" />
          Client: <span className="font-light ml-2">{item.details.client}</span>
        </p>
        <p className="flex items-center">
          <ExternalLink size={16} className="text-custom-gold mr-3" />
          Preview:
          <a href={item.details.previewUrl} target="_blank" rel="noopener noreferrer" className="text-custom-gold hover:underline ml-2 font-light">
            {item.details.previewUrl.replace(/^https?:\/\/(www\.)?/, '')}
          </a>
        </p>
      </div>
    </div>
    <div className="overflow-hidden rounded-lg">
      <img src={item.details.modalImageSrc} alt={item.title} className="w-full h-auto object-cover" />
    </div>
  </>
);

// --- COMPONENTE PRINCIPAL ---

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);

  // useMemo otimiza o cálculo das opções de filtro para que não seja refeito a cada renderização.
  const filterOptions = useMemo(() => ['ALL', ...Array.from(new Set(data.map((item) => item.category)))], [data]);
  
  const filteredItems = useMemo(() => {
    if (activeFilter === 'ALL') return data;
    return data.filter((item) => item.category === activeFilter);
  }, [activeFilter, data]);

  return (
    <section id="portfolio" className="min-h-screen py-16 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <Title main="My Portfolio" background="Works" />

        <PortfolioFilter
          options={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && <PortfolioModalContent item={selectedItem} />}
      </Modal>
    </section>
  );
};

export default PortfolioSection;