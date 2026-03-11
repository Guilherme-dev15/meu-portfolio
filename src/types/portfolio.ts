// src/types/portfolio.ts

/**
 * @file Contém todas as definições de tipos e interfaces para a aplicação do portfólio.
 * Este arquivo serve como a única fonte da verdade para a estrutura de dados.
 */

import type { LucideIcon } from 'lucide-react';

// --- Seção: Sobre Mim ---

export interface PersonalInfo {
  key: string;
  value: string;
  highlight?: boolean;
}

export interface Statistic {
  count: string;
  label: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  percent: number;
}

export interface TimelineItem {
  type: 'experience' | 'education';
  year: string;
  title: string;
  institution: string;
  description: string;
}

// --- Seção: Portfólio ---

// ATUALIZADO: Categorias que refletem seus projetos reais.
export type ProjectCategory = 'API' | 'FULL-STACK' | 'FRONT-END' | 'BACK-END' | 'MOBILE' | 'OUTROS';

export interface ProjectDetails {
  project: string;
  language: string;
  client: string;
  previewUrl: string; // URL do GitHub ou do deploy
  modalImageSrc: string;
}

export interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  imageSrc: string;
  details: ProjectDetails;
}

// --- Seção: Blog ---

export interface BlogPost {
  title: string;
  imageSrc: string;
  snippet: string;
  slug?: string;
}

// --- Tipos de Agregação ---

export interface AboutSectionData {
  personal: PersonalInfo[];
  stats: Statistic[];
  skills: Skill[];
  timeline: TimelineItem[];
}

export interface ProfileData {
  name: string;
  title: string;
  shortDescription: string;
  about: AboutSectionData;
  portfolio: Project[];
  blogPosts: BlogPost[];
}