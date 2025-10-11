// src/pages/AboutMeSection.tsx

import React from 'react';
import type { AboutSectionData } from '../types/portfolio';

// Reutilizando os subcomponentes que vamos exportar do AboutMeModal
import { 
  PersonalInfos, 
  Statistics, 
  Skills, 
  ExperienceAndEducation 
} from './AboutMeModal';

// --- PROPS ---
interface AboutMeSectionProps {
  data: AboutSectionData;
}

/** Título principal para a seção de página inteira */
const Title: React.FC<{ main: string; background: string }> = ({ main, background }) => (
    <h2 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-16 pt-8 relative">
      <span className="text-gray-500/10 tracking-widest text-[5rem] md:text-[8rem] absolute -top-10 left-1/2 transform -translate-x-1/2 z-0 whitespace-nowrap pointer-events-none">
        {background.toUpperCase()}
      </span>
      <span className="relative z-10">
        <span className="text-custom-gold">{main.toUpperCase().split(' ')[0]}</span>
        {' ' + main.toUpperCase().split(' ').slice(1).join(' ')}
      </span>
    </h2>
);

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ data }) => {
  const { personal, stats, skills, timeline } = data;

  return (
    <section className="min-h-screen py-16 bg-dark-bg">
        <div className="container mx-auto px-4">
            <Title main="About Me" background="Resume" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7">
                    <PersonalInfos personal={personal} />
                </div>
                <div className="lg:col-span-5 pt-12 lg:pt-0">
                    <Statistics stats={stats} />
                </div>
            </div>

            <hr className="border-gray-700 my-16" />
            <Skills skills={skills} />
            <hr className="border-gray-700 my-16" />
            <ExperienceAndEducation timeline={timeline} />
        </div>
    </section>
  );
};

export default AboutMeSection;