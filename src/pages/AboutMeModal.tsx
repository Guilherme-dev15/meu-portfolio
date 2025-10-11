// src/pages/AboutMeModal.tsx

import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import type { ProfileData, AboutSectionData, PersonalInfo, Statistic, Skill, TimelineItem as TimelineItemType } from '../types/portfolio';

// Componentes de UI
import Modal from '../components/Modal';
import StatsBox from '../components/StatsBox';
import SkillCircle from '../components/Skillcircle';
import TimelineItem from '../components/TimelineItem';

// --- PROPS ---
interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProfileData;
}

// --- SUBCOMPONENTES (AGORA EXPORTADOS PARA REUTILIZAÇÃO) ---

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-wider">{children}</h3>
);

export const InfoItem: React.FC<{ info: PersonalInfo }> = ({ info }) => {
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
    <div className="flex flex-col text-left">
      <span className="text-gray-400 font-light">{key}:</span>
      <div className="font-semibold text-white break-words hover:text-custom-gold transition-colors">
        {content}
      </div>
    </div>
  );
};

export const PersonalInfos: React.FC<{ personal: PersonalInfo[] }> = React.memo(({ personal }) => (
  <div>
    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-left">Personal Infos</h3>
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      {personal.map((info) => (
        <div key={info.key} className={info.key === 'Languages' ? 'col-span-2' : ''}>
          <InfoItem info={info} />
        </div>
      ))}
    </div>
    <div className="mt-10 flex justify-start">
      <a href="/Guilherme dos Anjos Macedo 2025.pdf" download className="group relative inline-flex items-center justify-center py-3 px-8 text-sm font-bold text-white bg-transparent border-2 border-custom-gold rounded-full uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-dark-bg">
        <span className="absolute inset-0 bg-custom-gold transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
        <span className="relative z-10 flex items-center">
          DOWNLOAD CV
          <span className="ml-3 w-8 h-8 flex items-center justify-center bg-custom-gold rounded-full text-dark-bg">
            <Download size={16} />
          </span>
        </span>
      </a>
    </div>
  </div>
));

export const Statistics: React.FC<{ stats: Statistic[] }> = React.memo(({ stats }) => (
  <div className="grid grid-cols-2 gap-6">
    {stats.map((stat) => (
      <StatsBox key={stat.label} {...stat} />
    ))}
  </div>
));

export const Skills: React.FC<{ skills: Skill[] }> = React.memo(({ skills }) => (
  <div>
    <SectionTitle>My Skills</SectionTitle>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <SkillCircle key={skill.name} {...skill} />
      ))}
    </div>
  </div>
));

export const ExperienceAndEducation: React.FC<{ timeline: TimelineItemType[] }> = React.memo(({ timeline }) => {
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

// --- COMPONENTE PRINCIPAL (MODAL) ---
const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose, data }) => {
  const { personal, stats, skills, timeline }: AboutSectionData = data.about;
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Me">
      <div className="pr-4">
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
    </Modal>
  );
};

export default AboutMeModal;