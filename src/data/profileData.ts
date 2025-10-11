// src/data/profileData.ts

/**
 * @file Contém todos os dados estáticos da aplicação.
 * Este arquivo serve como a única fonte de dados, garantindo consistência e
 * facilitando a manutenção. Os dados são estruturados para corresponder
 * às interfaces definidas em `src/types/portfolio.ts`.
 */

import { Briefcase, Zap, Smile, Trophy } from 'lucide-react';
import type { ProfileData, Project, BlogPost, AboutSectionData } from '../types/portfolio';

// --- SEÇÃO: PORTFÓLIO ---
const PORTFOLIO_DATA: Project[] = [
  {
    id: 1,
    category: 'MOCKUP',
    title: 'Mockup Project',
    imageSrc: '/images/portfolio/origami-star.jpg',
    details: { // Renomeado de 'projectDetails' para 'details'
      project: 'Website',
      language: 'HTML, CSS, Javascript',
      client: 'Themeforest',
      previewUrl: 'https://www.pexels.com',
      modalImageSrc: '/images/portfolio/pink-flower-origami.jpg',
    },
  },
  {
    id: 2,
    category: 'GRAPHIC DESIGN',
    title: 'Maneki-neko',
    imageSrc: '/images/portfolio/maneki-neko.jpg',
    details: { // Renomeado de 'projectDetails' para 'details'
      project: 'Graphic Design',
      language: 'Adobe Illustrator',
      client: 'Envato',
      previewUrl: 'https://www.google.com',
      modalImageSrc: '/images/portfolio/maneki-neko-large.jpg',
    },
  },
   {
    id: 3,
    category: 'MOCKUP',
    title: 'Tools & Hardware',
    imageSrc: '/images/portfolio/tools.jpg',
    details: { // Renomeado de 'projectDetails' para 'details'
      project: 'Product Renders',
      language: 'Blender, Photoshop',
      client: 'Hardware Inc.',
      previewUrl: 'https://www.google.com',
      modalImageSrc: '/images/portfolio/tools-large.jpg',
    },
  },
];

// --- SEÇÃO: BLOG ---
const BLOG_DATA: BlogPost[] = [
  {
    title: 'How to Own Your Audience by Creating an Email List',
    imageSrc: '/images/blog/email.jpg', // Renomeado de 'image' para 'imageSrc'
    snippet: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b...',
    image: undefined
  },
  {
    title: 'Top 10 Toolkits for Deep Learning in 2022',
    imageSrc: '/images/blog/deeplearning.jpg', // Renomeado de 'image' para 'imageSrc'
    snippet: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
    image: undefined
  },
  {
    title: 'Everything You Need to Know About Web Accessibility',
    imageSrc: '/images/blog/accessibility.jpg', // Renomeado de 'image' para 'imageSrc'
    snippet: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma...',
    image: undefined
  },
];

// --- SEÇÃO: SOBRE MIM ---
const ABOUT_ME_DATA: AboutSectionData = {
  personal: [
    { key: 'First Name', value: 'Steve' },
    { key: 'Last Name', value: 'Milner' },
    { key: 'Age', value: '27 Years' },
    { key: 'Nationality', value: 'Tunisian' },
    // A lógica de destaque agora é orientada por dados, não por UI.
    { key: 'Freelance', value: 'Available', highlight: true },
    { key: 'Address', value: 'Tunis' },
    { key: 'Phone', value: '+21621184010' },
    { key: 'Email', value: 'you@mail.com' },
    { key: 'Skype', value: 'steve.milner' },
    { key: 'Languages', value: 'French, English' },
  ],
  stats: [
    { count: '12+', label: 'YEARS OF EXPERIENCE', icon: Briefcase },
    { count: '97+', label: 'COMPLETED PROJECTS', icon: Zap },
    { count: '81+', label: 'HAPPY CUSTOMERS', icon: Smile },
    { count: '53+', label: 'AWARDS WON', icon: Trophy },
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
    { type: 'experience', year: '2018 - PRESENT', title: 'WEB DEVELOPER', institution: 'ENVATO', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.' },
    { type: 'experience', year: '2013 - 2018', title: 'UI/UX DESIGNER', institution: 'THEMEFOREST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { type: 'experience', year: '2005 - 2013', title: 'CONSULTANT', institution: 'VIDEOHIVE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.' },
    { type: 'education', year: '2015', title: 'ENGINEERING DEGREE', institution: 'OXFORD UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.' },
    { type: 'education', year: '2012', title: 'MASTER DEGREE', institution: 'KIEV UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { type: 'education', year: '2009', title: 'BACHELOR DEGREE', institution: 'TUNIS HIGH SCHOOL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.' },
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