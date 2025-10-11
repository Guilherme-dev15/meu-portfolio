// src/pages/AboutMeModal.tsx

/**
 * @file Componente do modal "Sobre Mim".
 * Orquestra a exibição de informações pessoais, estatísticas, habilidades e
 * a linha do tempo de carreira, dividindo cada seção em subcomponentes.
 */

import React from 'react';
import { Download } from 'lucide-react';
import type { ProfileData, PersonalInfo, Statistic, Skill, TimelineItem as TimelineItemType } from '../types/portfolio';

// Componentes de UI importados
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

interface SectionTitleProps {
  children: React.ReactNode;
}

// --- SUBCOMPONENTES ---
// Foram criados para dividir a lógica e a UI em partes menores e mais legíveis.
// Em um projeto maior, cada um poderia ser movido para seu próprio arquivo.

/** Título padronizado para as seções do modal. */
const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h3 className="text-2xl font-bold text-white mb-6 text-center">{children}</h3>
);

/** Renderiza a seção de informações pessoais e o botão de CV. */
const PersonalInfos: React.FC<{ personal: PersonalInfo[] }> = React.memo(({ personal }) => (
  <div>
    <h3 className="text-xl font-bold text-white mb-4">PERSONAL INFOS</h3>
    <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300">
      {personal.map((info) => (
        <div key={info.key} className="flex flex-col">
          <span className="font-light text-gray-400">{info.key}:</span>
          <span className={`font-medium ${info.highlight ? 'text-green-400' : 'text-white'}`}>
            {info.value}
          </span>
        </div>
      ))}
    </div>
    <div className="mt-8">
      <a
        href="/path/to/your/cv.pdf" // Lembre-se de adicionar o caminho para o seu CV
        download
        className="group relative inline-flex items-center justify-center py-3 px-6 text-sm font-bold text-white bg-transparent border-2 border-custom-gold rounded-full uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-dark-bg"
      >
        <span className="absolute inset-0 bg-custom-gold transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
        <span className="relative z-10 flex items-center">
          DOWNLOAD CV
          <span className="ml-3 w-8 h-8 flex items-center justify-center bg-custom-gold rounded-full">
            <Download size={16} />
          </span>
        </span>
      </a>
    </div>
  </div>
));

/** Renderiza a grade de estatísticas. */
const Statistics: React.FC<{ stats: Statistic[] }> = React.memo(({ stats }) => (
  <div className="grid grid-cols-2 gap-4">
    {stats.map((stat) => (
      <StatsBox key={stat.label} {...stat} />
    ))}
  </div>
));

/** Renderiza a grade de habilidades. */
const Skills: React.FC<{ skills: Skill[] }> = React.memo(({ skills }) => (
  <div>
    <SectionTitle>MY SKILLS</SectionTitle>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <SkillCircle key={skill.name} {...skill} />
      ))}
    </div>
  </div>
));

/** Renderiza as colunas de Experiência e Educação. */
const ExperienceAndEducation: React.FC<{ timeline: TimelineItemType[] }> = React.memo(({ timeline }) => {
  const experiences = timeline.filter((item) => item.type === 'experience');
  const educations = timeline.filter((item) => item.type === 'education');

  return (
    <div>
      <SectionTitle>EXPERIENCE & EDUCATION</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <div>
          {experiences.map((item) => (
            <TimelineItem key={`${item.title}-${item.institution}`} {...item} />
          ))}
        </div>
        <div>
          {educations.map((item) => (
            <TimelineItem key={`${item.title}-${item.institution}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
});

// --- COMPONENTE PRINCIPAL ---
const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose, data }) => {
  const { personal, stats, skills, timeline } = data.about;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <PersonalInfos personal={personal} />
        <Statistics stats={stats} />
      </div>

      <hr className="border-gray-700 my-10" />

      <Skills skills={skills} />

      <hr className="border-gray-700 my-10" />

      <ExperienceAndEducation timeline={timeline} />
    </Modal>
  );
};

export default AboutMeModal;