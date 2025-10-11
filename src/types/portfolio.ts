/**
 * @file Contém todas as definições de tipos e interfaces para a aplicação do portfólio.
 * Este arquivo serve como a única fonte da verdade para a estrutura de dados.
 */

import type { LucideIcon } from 'lucide-react';

// ===============================================
// 1. TIPOS DE DOMÍNIO (POR SEÇÃO)
// ===============================================

// --- Seção: Sobre Mim ---

/** Representa uma entrada de informação pessoal, como "Nome" ou "Idade". */
export interface PersonalInfo {
  key: string;
  value: string;
  /** Se `true`, o valor deve receber um destaque visual na UI. */
  highlight?: boolean;
}

/** Representa uma estatística quantitativa, como "Anos de Experiência". */
export interface Statistic {
  count: string;
  label: string;
  icon: LucideIcon;
}

/** Representa uma habilidade técnica ou ferramenta com seu nível de proficiência. */
export interface Skill {
  name: string;
  percent: number;
}

/** Representa um item na linha do tempo, seja de experiência ou educação. */
export interface TimelineItem {
  type: 'experience' | 'education';
  year: string;
  title: string;
  institution: string; // Ex: Empresa ou Universidade
  description: string;
}

// --- Seção: Portfólio ---

/** Categorias possíveis para um projeto do portfólio. */
export type ProjectCategory = 'LOGO' | 'VIDEO' | 'GRAPHIC DESIGN' | 'MOCKUP';

/** Detalhes específicos de um projeto, exibidos no modal. */
export interface ProjectDetails {
  project: string;
  language: string;
  client: string;
  previewUrl: string;
  modalImageSrc: string;
}

/** Representa um único projeto no portfólio. */
export interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  imageSrc: string;
  details: ProjectDetails;
}

// --- Seção: Blog ---

/** Representa uma única postagem no blog. */
export interface BlogPost {
  image: string | undefined;
  title: string;
  imageSrc: string;
  snippet: string;
  /** URL amigável para a postagem completa (opcional). */
  slug?: string;
}

// ===============================================
// 2. TIPOS DE AGREGAÇÃO PRINCIPAL
// ===============================================

/** Agrupa todos os dados relacionados à seção "Sobre Mim". */
export interface AboutSectionData {
  personal: PersonalInfo[];
  stats: Statistic[];
  skills: Skill[];
  timeline: TimelineItem[];
}

/**
 * Interface principal que define a estrutura completa de todos os dados
 * necessários para renderizar o portfólio.
 */
export interface ProfileData {
  name: string;
  title: string;
  shortDescription: string;
  about: AboutSectionData;
  portfolio: Project[];
  blogPosts: BlogPost[];
}