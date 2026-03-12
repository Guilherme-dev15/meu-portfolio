// Arquivo: src/pages/Home.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ProfileData } from '../types/portfolio';
import { TypeAnimation } from 'react-type-animation';

interface HomeProps {
  onOpenAboutMe: () => void;
  data: Pick<ProfileData, 'name' | 'title' | 'shortDescription'>;
}

// Criamos o código exato aqui fora. A indentação que você vê aqui 
// é exatamente a que vai aparecer na tela.
const codeSnippet = `const dev = {
  name: 'Guilherme Macedo',
  role: 'Full Stack Developer',
  stack: ['React', 'Vue 3', 'Node.js'],
  db: ['PostgreSQL', 'MongoDB'],
  tools: ['Docker', 'Git', 'Firebase'],

  execute() {
    console.log('Deploying to Prod... 🚀');
    return true;
  }
};

dev.execute();`;

const HomeSection: React.FC<HomeProps> = ({ onOpenAboutMe, data }) => (
  <section id="home" className="flex items-center justify-center h-screen p-4 bg-dark-bg">
    <div className="max-w-6xl mx-auto flex items-center w-full">
      
      {/* Janela Criativa do VS Code - Simulando Código */}
      <div className="hidden lg:block w-1/3 relative mr-12 font-mono text-sm">
        {/* Sombra 2D Dourada para um visual inovador e premium */}
        <div className="absolute inset-0 bg-[#FFD700] rounded-xl translate-x-4 translate-y-4 shadow-2xl opacity-20 blur-sm"></div>

        {/* Container Principal da Janela do Editor */}
        <div className="relative w-full max-w-[25rem] h-[20rem] bg-[#111111] border border-[#FFD700]/30 rounded-xl overflow-hidden shadow-3xl flex flex-col">

          {/* Barra de Título do Editor (Mac-style) */}
          <div className="w-full h-8 bg-[#1A1A1A] border-b border-[#FFD700]/30 flex items-center px-4 justify-between shrink-0">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-[#FF5F56] rounded-full border border-[#FFD700]/20"></div>
              <div className="w-3 h-3 bg-[#FFBD2E] rounded-full border border-[#FFD700]/20"></div>
              <div className="w-3 h-3 bg-[#27C93F] rounded-full border border-[#FFD700]/20"></div>
            </div>
            <span className="text-white/60 text-xs">guilherme.tsx</span>
            <div className="w-12"></div> {/* Espaçador */}
          </div>

          {/* Corpo do Editor com Código Animado */}
          <div className="flex-grow p-6 text-white leading-relaxed tracking-wide overflow-hidden relative">
            <TypeAnimation
              sequence={[
                1000,         // Espera 1 segundo
                codeSnippet,  // Digita o código inteiro perfeitamente indentado
                4000,         // Fica na tela por 4 segundos
                '',           // Apaga tudo para recomeçar
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '0.95em', display: 'block', margin: 0, fontFamily: 'monospace' }}
              repeat={Infinity}
              className="[&>span:first-of-type]:text-[#FFD700] [&>span:nth-of-type(2)]:text-[#569CD6] [&>span:nth-of-type(3)]:text-white/60"
            />
            {/* Opcional: Efeito de Blur Dourado no fundo do editor */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFD700] rounded-full opacity-10 blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Texto de Introdução */}
      <div className="text-center lg:text-left flex-1">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
          <span className="text-custom-gold">—</span> I'M <span className="text-custom-gold">{data.name.toUpperCase()}.</span>
          <br />
          {data.title.toUpperCase()}
        </h3>
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