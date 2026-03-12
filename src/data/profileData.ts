// src/data/profileData.ts

/**
 * @file Fonte da verdade completa para o portfólio de Guilherme dos Anjos Macedo.
 */

import { Briefcase, Rocket, Wrench, Monitor } from 'lucide-react';
import type { ProfileData, Project, AboutSectionData } from '../types/portfolio';

// --- SEÇÃO: PORTFÓLIO (Todos os 6 projetos restaurados) ---
const PORTFOLIO_DATA: Project[] = [
  {
    id: 1,
    category: 'FULL-STACK',
    title: 'CurriculoPro - SaaS de Currículos',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/CurriculoPro/refs/heads/main/Preview.gif',
    details: {
      project: 'SaaS para criação e gestão de currículos profissionais com autenticação JWT e PostgreSQL.',
      language: 'TypeScript, Vue 3, Node.js, Prisma, PostgreSQL',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/CurriculoPro',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/CurriculoPro/refs/heads/main/Preview.gif'
    }
  },
  {
    id: 2,
    category: 'FULL-STACK',
    title: 'Clean APP - ERP/PDV',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/clean-app/refs/heads/main/preview/dash.gif',
    details: {
      project: 'Sistema de Gestão Empresarial com PDV, integração Firebase e rotas privadas.',
      language: 'React, TypeScript, Firebase (Firestore, Auth)',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/clean-app',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/clean-app/refs/heads/main/preview/orcamento.gif'
    }
  },
  {
    id: 3,
    category: 'BACK-END',
    title: 'Git Automation CLI – gitmenu',
    imageSrc: 'https://github.com/Guilherme-dev15/git-automation-tool/raw/main/demo.gif',
    details: {
      project: 'Ferramenta de linha de comando para automação de fluxos Git.',
      language: 'Bash, FZF',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/git-automation-tool',
      modalImageSrc: 'https://github.com/Guilherme-dev15/git-automation-tool/raw/main/demo.gif'
    }
  },
  {
    id: 4,
    category: 'FRONT-END',
    title: 'Rick & Morty SPA',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif',
    details: {
      project: 'Single Page Application para exploração de personagens utilizando API REST.',
      language: 'Angular, TypeScript, Angular Material',
      client: 'Projeto Pessoal',
      previewUrl: 'https://rickmorty-4vlcxnozg-guilherme-dev15s-projects.vercel.app/profile',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif'
    }
  },
  {
    id: 5,
    category: 'FRONT-END',
    title: 'Pokémon Pokedex',
    imageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif',
    details: {
      project: 'Enciclopédia interativa consumindo a PokeAPI.',
      language: 'React, Vite, Styled Components',
      client: 'Projeto Pessoal',
      previewUrl: 'https://guilherme-dev15.github.io/project-pokedex-react/',
      modalImageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif'
    }
  },
  {
    id: 6,
    category: 'FRONT-END',
    title: 'GitHub API Explorer',
    imageSrc: 'https://github.com/Guilherme-dev15/desafio-git-api-fetch/raw/main/preview/Github-API.gif',
    details: {
      project: 'Buscador de perfis e repositórios utilizando a API pública do GitHub.',
      language: 'HTML5, CSS3, JavaScript',
      client: 'Projeto Pessoal',
      previewUrl: 'https://guilherme-dev15.github.io/desafio-git-api-fetch/',
      modalImageSrc: 'https://github.com/Guilherme-dev15/desafio-git-api-fetch/raw/main/preview/Github-API.gif'
    }
  }
];

// --- SEÇÃO: SOBRE MIM ---
const ABOUT_ME_DATA: AboutSectionData = {
  personal: [
    { key: 'Nome', value: 'Guilherme Macedo' },
    { key: 'Cargo', value: 'Desenvolvedor Full Stack' },
    { key: 'Especialidade', value: 'JavaScript, TypeScript & Node.js' },
    { key: 'Freelance', value: 'Disponível', highlight: true },
    { key: 'Localização', value: 'São Paulo - SP, Brasil' },
    { key: 'E-mail', value: 'guilherme.macedo1598@gmail.com' },
    { key: 'Idiomas', value: 'Português (Nativo), Inglês (Técnico)' },
  ],
  stats: [
    { count: '5+', label: 'ANOS DE BACKGROUND TÉCNICO', icon: Briefcase },
    { count: '20+', label: 'PROJETOS NO GITHUB', icon: Rocket },
    { count: '15+', label: 'TECNOLOGIAS & FERRAMENTAS', icon: Wrench },
    { count: '3+', label: 'SISTEMAS FULL STACK', icon: Monitor },
  ],
  skills: [
    { name: 'Node.js / NestJS / PHP', percent: 85 },
    { name: 'React.js / Vue 3 / TS', percent: 80 },
    { name: 'SQL (PostgreSQL / Oracle)', percent: 80 },
    { name: 'Docker / Linux / Git', percent: 85 },
    { name: 'Monitoramento (Zabbix)', percent: 90 },
    { name: 'Infra (AD / GLPI / Redes)', percent: 85 },
  ],
  timeline: [
    {
      type: 'experience',
      year: 'JAN 2024 - ATUAL',
      title: 'DESENVOLVEDOR FULL STACK',
      institution: 'Autônomo / Projetos Independentes',
      description: 'Desenvolvimento de aplicações ponta a ponta (SaaS/ERPs). Foco em arquiteturas escaláveis com Node.js, React e modelagem de dados relacionais.'
    },
    {
      type: 'experience',
      year: 'JUL 2023 - ATUAL',
      title: 'ASSISTENTE DE INFRAESTRUTURA DE TI',
      institution: 'Pashal Locadora de Equipamentos',
      description: 'Liderou a implantação do GLPI do zero[cite: 18]. Responsável pela administração de ambientes críticos (Zabbix, Grafana, AD) e resolução de incidentes N1/N2[cite: 20].'
    },
    {
      type: 'experience',
      year: 'FEV 2021 - JUL 2022',
      title: 'ANALISTA DE SUPORTE TÉCNICO',
      institution: 'Brint Comércio e Indústria',
      description: 'Suporte N1/N2 em hardware, redes e software[cite: 21]. Manutenção de telas e lógica nos sistemas WMS/WCS [cite: 22] e manipulação de dados via SQL (Oracle/PostgreSQL)[cite: 23].'
    },
    {
      type: 'education',
      year: 'CURSANDO',
      title: 'PÓS-GRADUAÇÃO EM ENGENHARIA DE SOFTWARE',
      institution: 'Anhanguera',
      description: 'Foco em arquitetura de sistemas e metodologias ágeis[cite: 25].'
    },
    {
      type: 'education',
      year: '2019',
      title: 'TECNÓLOGO EM ANÁLISE E DESENV. DE SISTEMAS',
      institution: 'UNICID',
      description: 'Base sólida em desenvolvimento e modelagem de banco de dados[cite: 25].'
    },
  ],
};

const PROFILE_DATA: ProfileData = {
  name: 'GUILHERME MACEDO',
  title: 'FULL STACK DEVELOPER | INFRAESTRUTURA',
  shortDescription: "Desenvolvedor Full Stack com forte visão de infraestrutura. Construo aplicações web completas, do banco de dados ao monitoramento proativo.",
  about: ABOUT_ME_DATA,
  portfolio: PORTFOLIO_DATA,
  blogPosts: [], 
};

export default PROFILE_DATA;