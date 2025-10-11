// Arquivo: src/pages/Home.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ProfileData } from '../types/portfolio';

interface HomeProps {
  onOpenAboutMe: () => void;
  data: Pick<ProfileData, 'name' | 'title' | 'shortDescription'>;
}

const HomeSection: React.FC<HomeProps> = ({ onOpenAboutMe, data }) => (
  <section id="home" className="flex items-center justify-center h-screen p-4 bg-dark-bg">
    <div className="max-w-6xl mx-auto flex items-center">
      {/* Imagem de Perfil */}
      <div className="hidden lg:block w-1/3 relative mr-12">
        <div className="w-80 h-[30rem] bg-dark-card rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/images/profile.jpg" // Coloque sua foto em public/images/profile.jpg
            alt="Foto de Perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Texto de Introdução */}
      <div className="text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          <span className="text-custom-gold">—</span> I'M <span className="text-custom-gold">{data.name.toUpperCase()}.</span>
          <br />
          {data.title.toUpperCase()}
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
          {data.shortDescription}
        </p>
        <button
          onClick={onOpenAboutMe}
          className="group relative inline-flex items-center justify-center py-3 px-8 text-sm font-bold text-white bg-transparent border-2 border-custom-gold rounded-full uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-dark-bg"
        >
          <span className="absolute inset-0 bg-custom-gold transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="relative z-10 flex items-center">
            MORE ABOUT ME
            <span className="ml-3 w-8 h-8 flex items-center justify-center bg-custom-gold rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-dark-bg">
              <ArrowRight size={16} />
            </span>
          </span>
        </button>
      </div>
    </div>
  </section>
);

export default HomeSection;