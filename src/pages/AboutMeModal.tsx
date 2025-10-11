// src/pages/AboutMeModal.tsx

import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import type { ProfileData, PersonalInfo, Statistic } from '../types/portfolio';
import Modal from '../components/Modal';
import StatsBox from '../components/StatsBox';

// --- PROPS ---
interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProfileData;
}

// --- SUBCOMPONENTES ---

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
      <div className="mt-10">
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

const Statistics: React.FC<{ stats: Statistic[] }> = React.memo(({ stats }) => (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat) => (
        <StatsBox key={stat.label} {...stat} />
      ))}
    </div>
  ));

// --- COMPONENTE PRINCIPAL ---
const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose, data }) => {
  const { personal, stats } = data.about;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Me">
      {/* Layout de duas colunas apenas com as informações pessoais e estatísticas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <PersonalInfos personal={personal} />
        <Statistics stats={stats} />
      </div>
    </Modal>
  );
};

export default AboutMeModal;