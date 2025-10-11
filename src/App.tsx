/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

import PROFILE_DATA from './data/profileData';

import HomeSection from './pages/Home';
import PortfolioSection from './pages/PortfolioSection';
import BlogSection from './pages/Blog';
import ContactSection from './pages/Contact';
import AboutMeModal from './pages/AboutMeModal';
import Sidebar from './layouts/Sidebar';

type SectionId = 'home' | 'portfolio' | 'blog' | 'contact';

const App: React.FC = () => {
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  // Mantém null possível no tipo da ref para evitar erro
  const sectionRefs: Record<SectionId, React.RefObject<HTMLElement | null>> = {
    home: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const openAboutMeModal = useCallback(() => setIsAboutMeModalOpen(true), []);
  const closeAboutMeModal = useCallback(() => setIsAboutMeModalOpen(false), []);

  const handleNavClick = (sectionId: SectionId | 'about') => {
    if (sectionId === 'about') {
      openAboutMeModal();
    } else {
      sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans relative">
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      <main>
        <section id="home" ref={sectionRefs.home}>
          <HomeSection data={PROFILE_DATA} onOpenAboutMe={openAboutMeModal} />
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

      <AboutMeModal isOpen={isAboutMeModalOpen} onClose={closeAboutMeModal} data={PROFILE_DATA} />
    </div>
  );
};

export default App;
