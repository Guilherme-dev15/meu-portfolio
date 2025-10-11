// Arquivo: src/data/profileData.ts

import { Briefcase, Zap, Smile, Trophy } from 'lucide-react';
import type { ProfileData } from '../types/portfolio';

// DADOS DO PORTFÓLIO
export const PORTFOLIO_DATA: ProfileData['portfolio'] = [
  {
    id: 1,
    category: 'MOCKUP',
    title: 'Mockup Project',
    imageSrc: '/images/portfolio/origami-star.jpg', // Substitua pelo caminho real
    projectDetails: {
      project: 'Website',
      language: 'HTML, CSS, Javascript',
      client: 'Themeforest',
      previewUrl: 'https://www.pexels.com',
      modalImageSrc: '/images/portfolio/pink-flower-origami.jpg', // Imagem do modal
    },
  },
  {
    id: 2,
    category: 'GRAPHIC DESIGN',
    title: 'Maneki-neko',
    imageSrc: '/images/portfolio/maneki-neko.jpg',
    projectDetails: {
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
    projectDetails: {
      project: 'Product Renders',
      language: 'Blender, Photoshop',
      client: 'Hardware Inc.',
      previewUrl: 'https://www.google.com',
      modalImageSrc: '/images/portfolio/tools-large.jpg',
    },
  },
];

// DADOS DO BLOG
export const BLOG_DATA: ProfileData['blogPosts'] = [
  {
    title: 'How to Own Your Audience by Creating an Email List',
    image: '/images/blog/email.jpg',
    snippet: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b...',
  },
  {
    title: 'Top 10 Toolkits for Deep Learning in 2022',
    image: '/images/blog/deeplearning.jpg',
    snippet: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
  },
  {
    title: 'Everything You Need to Know About Web Accessibility',
    image: '/images/blog/accessibility.jpg',
    snippet: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma...',
  },
];

// DADOS SOBRE MIM
export const ABOUT_ME_DATA: ProfileData['about'] = {
  personal: [
    { key: 'First Name', value: 'Steve' },
    { key: 'Last Name', value: 'Milner' },
    { key: 'Age', value: '27 Years' },
    { key: 'Nationality', value: 'Tunisian' },
    { key: 'Freelance', value: 'Available' },
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
    { type: 'experience', year: '2005 - 2013', title: 'CONSULTANT', institution: 'VIDEOHIVE', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.' },
    { type: 'education', year: '2015', title: 'ENGINEERING DEGREE', institution: 'OXFORD UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.' },
    { type: 'education', year: '2012', title: 'MASTER DEGREE', institution: 'KIEV UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { type: 'education', year: '2009', title: 'BACHELOR DEGREE', institution: 'TUNIS HIGH SCHOOL', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.' },
  ],
};

// DADOS PRINCIPAIS DO PERFIL
const PROFILE_DATA: ProfileData = {
  name: 'STEVE MILNER',
  title: 'WEB DESIGNER',
  shortDescription: "I'm a Tunisian based web designer & front-end developer focused on crafting clean & user friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
  about: ABOUT_ME_DATA,
  portfolio: PORTFOLIO_DATA,
  blogPosts: BLOG_DATA,
};

export default PROFILE_DATA;