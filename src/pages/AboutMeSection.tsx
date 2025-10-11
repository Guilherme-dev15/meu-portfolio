 
// src/pages/AboutMeSection.tsx

import React from 'react';
import type { AboutSectionData, PersonalInfo, Statistic, Skill, TimelineItem as TimelineItemType } from '../types/portfolio';

// Reutilizando os componentes que já temos
import StatsBox from '../components/StatsBox';
import SkillCircle from '../components/Skillcircle';
import TimelineItem from '../components/TimelineItem';
import { ExternalLink } from 'lucide-react';

// --- SUBCOMPONENTES (copiados de AboutMeModal para manter este arquivo independente) ---

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-wider">{children}</h3>
);

const InfoItem: React.FC<{ info: PersonalInfo }> = ({ info }) => {
  let content: React.ReactNode;
  const { key, value, highlight } = info;

  switch (key) {
    case 'Phone':
      { const phoneLink = `https://wa.me/${value.replace(/\D/g, '')}`;
      content = <a href={phoneLink} target="_blank" rel="noopener noreferrer">{value}</a>;
      break; }
    case 'Email':
      content = <a href={`mailto:${value}`}>{value}</a>;
      break;
    case 'LinkedIn':
    case 'GitHub':
      { const displayName = value.split('/').filter(Boolean).pop() || value;
      content = <a href={value} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">{displayName} <ExternalLink size={14} /></a>;
      break; }
    default:
      content = <span className={highlight ? 'text-green-400' : 'text-white'}>{value}</span>;
      break;
  }

  return (
    <div>
      <span className="text-gray-400 font-light block">{key}:</span>
      <div className="font-semibold text-white break-words hover:text-custom-gold transition-colors">
        {content}
      </div>
    </div>
  );
};
const PersonalInfos: React.FC<{ personal: PersonalInfo[] }> = React.memo(({ personal }) => (
  <div>
    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Personal Infos</h3>
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      {personal.map((info) => (
        <InfoItem key={info.key} info={info} />
      ))}
    </div>
    {/* O botão de Download CV não entra aqui, pois ele está no modal */}
  </div>
));


const Statistics: React.FC<{ stats: Statistic[] }> = React.memo(({ stats }) => (
  <div className="grid grid-cols-2 gap-6">
    {stats.map((stat) => (
      <StatsBox key={stat.label} {...stat} />
    ))}
  </div>
));

const Skills: React.FC<{ skills: Skill[] }> = React.memo(({ skills }) => (
    <div>
      <SectionTitle>My Skills</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCircle key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  ));

const ExperienceAndEducation: React.FC<{ timeline: TimelineItemType[] }> = React.memo(({ timeline }) => {
    const experiences = timeline.filter((item) => item.type === 'experience');
    const educations = timeline.filter((item) => item.type === 'education');
  
    return (
      <div>
        <SectionTitle>Experience & Education</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
          <div>{experiences.map((item) => <TimelineItem key={`exp-${item.title}-${item.institution}`} {...item} />)}</div>
          <div>{educations.map((item) => <TimelineItem key={`edu-${item.title}-${item.institution}`} {...item} />)}</div>
        </div>
      </div>
    );
  });


// --- COMPONENTE PRINCIPAL ---

interface AboutMeSectionProps {
    data: AboutSectionData;
}

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
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                    <PersonalInfos personal={personal} />
                </div>
                <div className="lg:col-span-1">
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