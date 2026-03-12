import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h2 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-16 pt-8 relative">
    <span className="text-gray-400 opacity-10 mr-1 tracking-widest text-[5rem] md:text-[8rem] absolute -top-10 left-1/2 transform -translate-x-1/2 z-0 whitespace-nowrap pointer-events-none">
      TOUCH
    </span>
    <span className="relative z-10">{title.toUpperCase()}</span>
  </h2>
);

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen p-4 md:p-10 bg-[#121212] flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <Title title="Get in Touch" />
        
        <div className="bg-[#1a1a1a] border border-yellow-500/20 rounded-2xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Efeito de brilho minimalista no topo do card */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Vamos construir algo incrível juntos?</h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Estou aberto a novas oportunidades e desafios técnicos. 
            Seja para uma vaga de Desenvolvedor Full Stack ou para tirar um projeto inovador do papel, minha caixa de entrada está sempre aberta.
          </p>

          <div className="flex flex-col items-center justify-center">
            {/* Botão Principal de E-mail */}
            <a
              href="mailto:guilherme.macedo1598@gmail.com"
              className="group relative inline-flex items-center justify-center py-4 px-10 text-base font-bold text-gray-900 bg-yellow-500 rounded-full uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
            >
              <Mail className="mr-3" size={22} />
              ME ENVIE UM E-MAIL
            </a>
          </div>

          {/* Redes Sociais e Links Extras */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Ou me encontre nas redes</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/guilherme-a-anjos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Guilherme-dev15"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;