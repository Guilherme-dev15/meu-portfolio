// src/data/profileData.ts

/**
 * @file Contém todos os dados estáticos da aplicação.
 * Este arquivo serve como a única fonte da verdade para a estrutura de dados,
 * garantindo consistência e facilitando a manutenção.
 */

import { Briefcase, Zap, Smile, Trophy } from 'lucide-react';
import type { ProfileData, Project, BlogPost, AboutSectionData } from '../types/portfolio';

// --- SEÇÃO: PORTFÓLIO ---
const PORTFOLIO_DATA: Project[] = [
  {
    id: 1,
    category: 'MOCKUP',
    title: 'Origami Star',
    imageSrc: 'https://placehold.co/400x300',
    details: {
      project: 'Website',
      language: 'HTML, CSS, Javascript',
      client: 'Themeforest',
      previewUrl: 'https://example.com',
      modalImageSrc: 'https://placehold.co/600x400',
    },
  },
  {
    id: 2,
    category: 'GRAPHIC DESIGN',
    title: 'Maneki-neko Cat',
    imageSrc: 'https://placehold.co/400x300/',
    details: {
      project: 'Graphic Design',
      language: 'Adobe Illustrator',
      client: 'Envato',
      previewUrl: 'https://example.com',
      modalImageSrc: 'https://placehold.co/600x400',
    },
  },
  {
    id: 3,
    category: 'MOCKUP',
    title: 'Hardware Tools',
    imageSrc: 'https://placehold.co/400x300/',
    details: {
      project: 'Product Renders',
      language: 'Blender, Photoshop',
      client: 'Hardware Inc.',
      previewUrl: 'https://example.com',
      modalImageSrc: 'https://placehold.co/600x400/',
    },
  },
  {
    id: 4,
    category: 'LOGO',
    title: 'Fortune Cookies',
    imageSrc: 'https://placehold.co/400x300/',
    details: {
      project: 'Branding',
      language: 'Adobe Illustrator',
      client: 'Food Co.',
      previewUrl: 'https://example.com',
      modalImageSrc: 'https://placehold.co/600x400/',
    },
  },
  {
    id: 5,
    category: 'VIDEO',
    title: 'Butterfly Effect',
    imageSrc: 'https://placehold.co/400x300/',
    details: {
      project: 'Short Film',
      language: 'Adobe Premiere Pro',
      client: 'Indie Film Fest',
      previewUrl: 'https://example.com',
      modalImageSrc: 'https://placehold.co/600x400/',
    },
  },
  {
    id: 6,
    category: 'GRAPHIC DESIGN',
    title: 'Pink Flower',
    imageSrc: 'https://placehold.co/400x300/',
    details: {
      project: 'Illustration',
      language: 'Procreate',
      client: 'Art Magazine',
      previewUrl: 'https://example.com',
      modalImageSrc: 'https://placehold.co/600x400/',
    },
  },
];

// --- SEÇÃO: BLOG ---
const BLOG_DATA: BlogPost[] = [
  {
      title: 'How to Own Your Audience by Creating an Email List',
      imageSrc: 'https://placehold.co/400x250/',
      snippet: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b...',
      image: undefined
  },
  {
      title: 'Top 10 Toolkits for Deep Learning in 2022',
      imageSrc: 'https://placehold.co/400x250/',
      snippet: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
      image: undefined
  },
  {
      title: 'Everything You Need to Know About Web Accessibility',
      imageSrc: 'https://placehold.co/400x250/',
      snippet: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma...',
      image: undefined
  },
];

// --- SEÇÃO: SOBRE MIM ---
const ABOUT_ME_DATA: AboutSectionData = {
  personal: [
    { key: 'Primeiro Nome', value: 'Steve' },
    { key: 'Último Nome', value: 'Milner' },
    { key: 'Idade', value: '27 Anos' },
    { key: 'Nacionalidade', value: 'Tunisiana' },
    { key: 'Freelance', value: 'Disponível', highlight: true },
    { key: 'Endereço', value: 'Tunis' },
    { key: 'Telefone', value: '+21621184010' },
    { key: 'Email', value: 'you@mail.com' },
    { key: 'Skype', value: 'steve.milner' },
    { key: 'Idiomas', value: 'Francês, Inglês' },
  ],
  stats: [
    { count: '12+', label: 'ANOS DE EXPERIÊNCIA', icon: Briefcase },
    { count: '97+', label: 'PROJETOS CONCLUÍDOS', icon: Zap },
    { count: '81+', label: 'CLIENTES FELIZES', icon: Smile },
    { count: '53+', label: 'PRÊMIOS GANHOS', icon: Trophy },
  ],
  skills: [
    { name: 'HTML', percent: 25 },
    { name: 'JAVASCRIPT', percent: 89 },
    { name: 'CSS', percent: 70 },
    { name: 'PHP', percent: 66 },
    { name: 'WORDPRESS', percent: 95 },
    { name: 'JQUERY', percent: 50 },
    { name: 'ANGULAR', percent: 65 },
    { name: 'REACT', percent: 45 },
  ],
  timeline: [
    { type: 'experience', year: '2018 - PRESENTE', title: 'WEB DEVELOPER', institution: 'ENVATO', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.' },
    { type: 'experience', year: '2013 - 2018', title: 'UI/UX DESIGNER', institution: 'THEMEFOREST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { type: 'education', year: '2015', title: 'ENGENHARIA', institution: 'OXFORD UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.' },
    { type: 'education', year: '2012', title: 'MESTRADO', institution: 'KIEV UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ],
};

// --- ESTRUTURA DE DADOS PRINCIPAL ---
const PROFILE_DATA: ProfileData = {
  name: 'STEVE MILNER',
  title: 'WEB DESIGNER',
  shortDescription: "I'm a Tunisian based web designer & front-end developer focused on crafting clean & user friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
  about: ABOUT_ME_DATA,
  portfolio: PORTFOLIO_DATA,
  blogPosts: BLOG_DATA,
};

export default PROFILE_DATA;