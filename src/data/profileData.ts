
// src/data/profileData.ts

/**
 * @file Fonte da verdade para todos os dados do portfólio de Guilherme dos Anjos Macedo.
 */

import { Briefcase, Rocket, Wrench, Monitor } from 'lucide-react';
import type { ProfileData, Project, BlogPost, AboutSectionData } from '../types/portfolio';

// --- SEÇÃO: PORTFÓLIO ---
const PORTFOLIO_DATA: Project[] = [
  {
    id: 1,
    category: 'FULL-STACK',
    title: 'CurriculoPro - SaaS de Currículos',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/CurriculoPro/refs/heads/main/Preview.gif',
    details: {
      project: 'CurriculoPro é uma aplicação web full-stack (micro-SaaS) que permite aos utilizadores criar, gerir, partilhar e analisar currículos de forma profissional.',
      language: 'TypeScript, Vue, Node.js, Express, JWT, Tailwind, Prisma, PostgreSQL',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/CurriculoPro',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/CurriculoPro/refs/heads/main/Preview.gif'
    }
  },
  {
    id: 2,
    category: 'FULL-STACK',
    title: 'Clean APP',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/clean-app/refs/heads/main/preview/dash.gif',
    details: {
      project: 'Sistema de Gestão Empresarial (ERP/PDV)',
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
      project: 'Ferramenta de Automação e CLI para Git',
      language: 'Bash, FZF',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/git-automation-tool',
      modalImageSrc: 'https://github.com/Guilherme-dev15/git-automation-tool/raw/main/demo.gif'
    }
  },
  {
    id: 4,
    category: 'FRONT-END', // Ajustei a categoria para ficar mais precisa que "API"
    title: 'Rick & Morty SPA',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif',
    details: {
      project: 'Single Page Application com consumo de API REST',
      language: 'Angular 20, TypeScript, SCSS3, Angular Material',
      client: 'Projeto Pessoal',
      previewUrl: 'https://rickmorty-4vlcxnozg-guilherme-dev15s-projects.vercel.app/profile',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif'
    }
  },
  {
    id: 5,
    category: 'FULL-STACK',
    title: 'Pokémon Pokedex',
    imageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif',
    details: {
      project: 'Aplicação Web Interativa consumindo a PokeAPI',
      language: 'React, Vite, Styled Components',
      client: 'Projeto Pessoal',
      previewUrl: 'https://guilherme-dev15.github.io/project-pokedex-react/',
      modalImageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif'
    }
  },
  {
    id: 6,
    category: 'FRONT-END', // Ajustado de "API" para "FRONT-END"
    title: 'GitHub API',
    imageSrc: 'https://github.com/Guilherme-dev15/desafio-git-api-fetch/raw/main/preview/Github-API.gif',
    details: {
      project: 'Buscador de perfis consumindo a API pública do GitHub',
      language: 'HTML, CSS, JavaScript',
      client: 'Projeto Pessoal',
      previewUrl: 'https://guilherme-dev15.github.io/desafio-git-api-fetch/',
      modalImageSrc: 'https://github.com/Guilherme-dev15/desafio-git-api-fetch/raw/main/preview/Github-API.gif'
    }
  }
];

// --- SEÇÃO: BLOG ---
const BLOG_DATA: BlogPost[] = [
  { title: 'Como Criei Minha Primeira API REST com Node.js e Express', imageSrc: 'https://placehold.co/400x250/373737/d4af37?text=API+com+Node.js', snippet: 'Um guia passo a passo sobre a arquitetura, autenticação e desafios encontrados durante o desenvolvimento da MovieFlix API...' },
  { title: 'De Suporte de TI para Desenvolvedor: Minha Jornada de Transição', imageSrc: 'https://placehold.co/400x250/373737/d4af37?text=Carreira', snippet: 'Compartilhando as lições aprendidas, os desafios superados e as habilidades que transferi da infraestrutura para o desenvolvimento...' },
  { title: 'Por Que Escolhi Nest.js para Meu Novo Projeto Full Stack', imageSrc: 'https://placehold.co/400x250/373737/d4af37?text=Nest.js', snippet: 'Analisando os benefícios do Nest.js, como a arquitetura modular, injeção de dependência e o uso de TypeScript...' },
];

// --- SEÇÃO: SOBRE MIM ---
const ABOUT_ME_DATA: AboutSectionData = {
  personal: [
    { key: 'First Name', value: 'Guilherme' },
    { key: 'Last Name', value: 'Macedo' }, // Alinhado com o título principal
    { key: 'Role', value: 'Full Stack Developer' }, // Substitui a Idade
    { key: 'Specialty', value: 'JavaScript & TypeScript' }, // Substitui a Nacionalidade
    { key: 'Freelance', value: 'Available', highlight: true },
    { key: 'Address', value: 'São Paulo - SP, Brazil' },
    { key: 'Email', value: 'guilherme.macedo1598@gmail.com' },
    { key: 'LinkedIn', value: 'https://www.linkedin.com/in/guilherme-a-anjos/' },
    { key: 'GitHub', value: 'https://github.com/Guilherme-dev15' },
    { key: 'Languages', value: 'Portuguese (Native), English (Technical)' },
  ],
  stats: [
    { count: '5+', label: 'ANOS DE BACKGROUND TÉCNICO', icon: Briefcase }, // Reposicionado para não parecer apenas suporte
    { count: '20+', label: 'PROJETOS NO GITHUB', icon: Rocket },
    { count: '15+', label: 'TECNOLOGIAS & FERRAMENTAS', icon: Wrench },
    { count: '3+', label: 'SISTEMAS FULL STACK', icon: Monitor }, // Substitui os "Cursos" pelas suas entregas reais (CurriculoPro, Limpeza Fácil, FinanceApp)
  ],
  skills: [
    { name: 'JavaScript / TypeScript', percent: 85 }, // Agrupei para dar peso
    { name: 'React.js / Vue 3', percent: 80 }, // Inseri o Vue do seu SaaS
    { name: 'Node.js / NestJS', percent: 80 }, // Inseri o NestJS do CV
    { name: 'SQL & PostgreSQL', percent: 75 },
    { name: 'DevOps & Infra', percent: 80 }, // Renomeado para soar mais moderno que "Infraestrutura/Deploy"
    { name: 'HTML5 & Tailwind', percent: 85 }, // Atualizado de CSS3 para Tailwind
    { name: 'Docker & Git', percent: 75 }, // Skills técnicas puras vendem mais que "Metodologias Ágeis"
  ],
  timeline: [
    // --- EXPERIÊNCIAS ---
    {
      type: 'experience',
      year: '2025 - ATUAL',
      title: 'DESENVOLVEDOR FULL STACK',
      institution: 'Autônomo / Projetos Freelance',
      description: 'Desenvolvimento end-to-end de aplicações web escaláveis. Criação de interfaces dinâmicas (React/Vue/TS) e construção de APIs RESTful modulares (Node.js/NestJS), com modelagem de bancos de dados relacionais (PostgreSQL).'
    },
    {
      type: 'experience',
      year: '2023 - ATUAL',
      title: 'ASSISTENTE DE INFRAESTRUTURA DE TI',
      institution: 'Pashal Locadora de Equipamentos',
      description: 'Responsável técnico pela implantação do sistema ITSM (GLPI) do zero e administração de servidores. Forte atuação em automação corporativa com scripts em PowerShell para deploy em massa, além de monitoramento proativo (Zabbix/Grafana) e governança de Active Directory, mantendo SLAs de resolução acima de 75%.'
    },
    {
      type: 'experience',
      year: '2021 - 2022',
      title: 'ANALISTA DE SUPORTE TÉCNICO',
      institution: 'Brint Comércio e Indústria',
      description: 'Atuação como Suporte Técnico especializado em sistemas logísticos e corporativos (WMS, WCS e CRM). Experiência no diagnóstico de falhas em aplicações e validação de regras de negócio, com diferencial na execução de consultas em bancos de dados relacionais (Oracle e PostgreSQL) para análise de logs e rastreamento de incidentes em ambiente de produção.'

    },

    // --- FORMAÇÃO ACADÊMICA ---
    {
      type: 'education',
      year: 'CURSANDO',
      title: 'PÓS-GRADUAÇÃO EM ENGENHARIA DE SOFTWARE',
      institution: 'Anhanguera',
      description: 'Especialização avançada focada em arquitetura de sistemas, metodologias ágeis, qualidade de código e engenharia de requisitos.'
    },
    {
      type: 'education',
      year: '2019',
      title: 'TECNÓLOGO EM ANÁLISE E DESENV. DE SISTEMAS',
      institution: 'Universidade Cidade de São Paulo - UNICID',
      description: 'Formação superior com base sólida em desenvolvimento de sistemas web, modelagem de banco de dados e lógica de programação.'
    },
  ],
};

// --- ESTRUTURA DE DADOS PRINCIPAL ---
const PROFILE_DATA: ProfileData = {
  name: 'GUILHERME MACEDO',
  title: 'FULL STACK DEVELOPER',
  shortDescription: "Desenvolvedor Full Stack. Construo aplicações web de ponta a ponta, desde a estruturação de bancos de dados e APIs RESTful até interfaces responsivas e escaláveis.",
  about: ABOUT_ME_DATA,
  portfolio: PORTFOLIO_DATA,
  blogPosts: BLOG_DATA,
};

export default PROFILE_DATA;