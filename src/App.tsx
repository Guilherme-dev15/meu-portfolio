// src/App.tsx

import React, { useState, useCallback, useEffect, useMemo } from 'react';
import './App.css';

import PROFILE_DATA from './data/profileData';

import HomeSection from './pages/Home';
import AboutMeSection from './pages/AboutMeSection'; // IMPORTANDO A NOVA SEÇÃO
import PortfolioSection from './pages/PortfolioSection';
import BlogSection from './pages/Blog';
import ContactSection from './pages/Contact';
import AboutMeModal from './pages/AboutMeModal'; // Este é o modal de resumo
import Sidebar from './layouts/Sidebar';

// ATUALIZADO: 'about' agora é uma seção principal
type SectionId = 'home' | 'about' | 'portfolio' | 'blog' | 'contact';
type ActiveSection = SectionId;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

  const sectionRefs = useMemo(() => ({
    home: React.createRef<HTMLElement>(),
    about: React.createRef<HTMLElement>(), // ADICIONADO REF PARA A NOVA SEÇÃO
    portfolio: React.createRef<HTMLElement>(),
    blog: React.createRef<HTMLElement>(),
    contact: React.createRef<HTMLElement>(),
  }), []);

  const openAboutMeModal = useCallback(() => setIsAboutMeModalOpen(true), []);
  const closeAboutMeModal = useCallback(() => setIsAboutMeModalOpen(false), []);

  const handleNavClick = (sectionId: ActiveSection) => {
    // A lógica agora é simples: apenas rola para a seção correspondente.
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

        {/* ADICIONADO: A nova seção de tela cheia "About Me" */}
        <section id="about" ref={sectionRefs.about}>
          <AboutMeSection data={PROFILE_DATA.about} />
        </section>

        <section id="portfolio" ref={sectionRefs.portfolio}>
          <PortfolioSection data={PROFILE_DATA.portfolio} />
        </section>
        <section id="blog" ref={sectionRefs.blog}>
          <BlogSection data={PROFILE_DATA.blogPosts} />
        </section>
        <section id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </section>
      </main>

      {/* O modal de resumo, que continua sendo controlado pelo seu próprio estado */}
      <AboutMeModal isOpen={isAboutMeModalOpen} onClose={closeAboutMeModal} data={PROFILE_DATA} />
    </div>
  );
};

export default App;