import React from 'react';
import { Download } from 'lucide-react';
import type { ProfileData } from '../types/portfolio';

import Modal from '../components/Modal';
import StatsBox from '../components/StatsBox';
import SkillCircle from '../components/Skillcircle';
import TimelineItem from '../components/TimelineItem';

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProfileData;
}

const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose, data }) => {
  const { personal, stats, skills, timeline } = data.about;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna da Esquerda: Informações Pessoais */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">PERSONAL INFOS</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300">
            {personal.map((info) => (
              <div key={info.key} className="flex flex-col">
                <span className="font-light text-gray-400">{info.key}:</span>
                <span
                  className={`font-medium ${
                    info.value === 'Available' ? 'text-green-400' : 'text-white'
                  }`}
                >
                  {info.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button className="group relative inline-flex items-center justify-center py-3 px-6 text-sm font-bold text-white bg-transparent border-2 border-custom-gold rounded-full uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-dark-bg">
              <span className="absolute inset-0 bg-custom-gold transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              <span className="relative z-10 flex items-center">
                DOWNLOAD CV
                <span className="ml-3 w-8 h-8 flex items-center justify-center bg-custom-gold rounded-full">
                  <Download size={16} />
                </span>
              </span>
            </button>
          </div>
        </div>
        {/* Coluna da Direita: Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <StatsBox key={index} {...stat} />
          ))}
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Minhas Habilidades */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 text-center">MY SKILLS</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCircle key={index} {...skill} />
          ))}
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Experiência e Educação */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 text-center">EXPERIENCE & EDUCATION</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div>
            {timeline
              .filter((item) => item.type === 'experience')
              .map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
          </div>
          <div>
            {timeline
              .filter((item) => item.type === 'education')
              .map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AboutMeModal;
