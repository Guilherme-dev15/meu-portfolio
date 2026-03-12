 
// src/App.tsx

import React, { useState, useCallback, useEffect, useMemo } from 'react';
import './App.css';

import PROFILE_DATA from './data/profileData';

// Importando todos os componentes
import HomeSection from './pages/Home';
import AboutMeSection from './pages/AboutMeSection'; // Importando a nova seção
import PortfolioSection from './pages/PortfolioSection';
import ContactSection from './pages/Contact';
import AboutMeModal from './pages/AboutMeModal'; // O modal que já tínhamos
import Sidebar from './layouts/Sidebar';

// Tipos para controle de estado e navegação
type SectionId = 'home' | 'about' | 'portfolio' | 'contact';
type ActiveSection = SectionId;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

  // Adicionando a ref para a nova seção 'about'
  const sectionRefs = useMemo(() => ({
    home: React.createRef<HTMLElement>(),
    about: React.createRef<HTMLElement>(),
    portfolio: React.createRef<HTMLElement>(),
    contact: React.createRef<HTMLElement>(),
  }), []);

  // Funções para controlar apenas o modal
  const openAboutMeModal = useCallback(() => setIsAboutMeModalOpen(true), []);
  const closeAboutMeModal = useCallback(() => setIsAboutMeModalOpen(false), []);

  // A navegação da sidebar agora rola para as seções, incluindo a nova 'about'
  const handleNavClick = (sectionId: ActiveSection) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as ActiveSection);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const refs = Object.values(sectionRefs);
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans relative">
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      <main>
        <section id="home" ref={sectionRefs.home}>
          <HomeSection data={PROFILE_DATA} onOpenAboutMe={openAboutMeModal} />
        </section>

        {/* A nova seção "About Me" de página inteira está aqui */}
        <section id="about" ref={sectionRefs.about}>
          <AboutMeSection data={PROFILE_DATA.about} />
        </section>

        <section id="portfolio" ref={sectionRefs.portfolio}>
          <PortfolioSection data={PROFILE_DATA.portfolio} />
        </section>
        {
          /**
          <section id="blog" ref={sectionRefs.blog}>
            <BlogSection data={PROFILE_DATA.blogPosts} />
          </section>
           */
        }
        <section id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </section>
      </main>

      {/* O modal continua aqui, mas é acionado apenas pelo botão "MORE ABOUT ME" */}
      <AboutMeModal isOpen={isAboutMeModalOpen} onClose={closeAboutMeModal} data={PROFILE_DATA} />
    </div>
  );
};

export default App;