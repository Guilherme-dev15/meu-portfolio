
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
    category: 'API',
    title: 'GitHub API',
    imageSrc: 'https://github.com/Guilherme-dev15/desafio-git-api-fetch/raw/main/preview/Github-API.gif',
    details: {
      project: 'API REST para catálogo de filmes',
      language: 'HTML, CSS, JavaScript',
      client: 'Projeto Pessoal',
      previewUrl: 'https://guilherme-dev15.github.io/desafio-git-api-fetch/',
      modalImageSrc: 'https://github.com/Guilherme-dev15/desafio-git-api-fetch/raw/main/preview/Github-API.gif'
    }
  },
  {
    id: 2,
    category: 'FULL-STACK',
    title: 'Clean APP',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/clean-app/refs/heads/main/preview/dash.gif',
    details: {
      project: 'Sistema de Gestão Empresarial (ERP/PDV)',
      language: 'TypeScript, TypeScript, Firebase (Firestore, Auth)',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/clean-app',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/clean-app/refs/heads/main/preview/orcamento.gif'
    }
  },
  {
    id: 3,
    category: 'FULL-STACK',
    title: ' CurriculoPro - SaaS de Currículos',
    imageSrc: 'https://private-user-images.githubusercontent.com/49658386/507954151-84cfd0cf-f706-4e04-8e54-f406b5eb7715.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzMyMzk5MjQsIm5iZiI6MTc3MzIzOTYyNCwicGF0aCI6Ii80OTY1ODM4Ni81MDc5NTQxNTEtODRjZmQwY2YtZjcwNi00ZTA0LThlNTQtZjQwNmI1ZWI3NzE1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzExVDE0MzM0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjNGYwZGYwNTFmMGU2ZmFiOTdkNTNhNjg5ZDJjNGJkMTRjNWIwMGNlMGM4NjE1NWE4OWRhMTNhZTI0OGE3NGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.SmCN3gvTligT0hQ4SCOlvBXaf_bg-6TDW4jxuA2UsQE',
    details: {
      project: 'CurriculoPro é uma aplicação web full-stack (micro-SaaS) que permite aos utilizadores criar, gerir, partilhar e analisar currículos de forma profissional.',
      language: 'TypeScript, Vue, Node.js, Express, JWT, Tailwind, Prisma, PostgreSQL',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/CurriculoPro',
      modalImageSrc: 'https://private-user-images.githubusercontent.com/49658386/507954151-84cfd0cf-f706-4e04-8e54-f406b5eb7715.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzMyMzk5MjQsIm5iZiI6MTc3MzIzOTYyNCwicGF0aCI6Ii80OTY1ODM4Ni81MDc5NTQxNTEtODRjZmQwY2YtZjcwNi00ZTA0LThlNTQtZjQwNmI1ZWI3NzE1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzExVDE0MzM0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjNGYwZGYwNTFmMGU2ZmFiOTdkNTNhNjg5ZDJjNGJkMTRjNWIwMGNlMGM4NjE1NWE4OWRhMTNhZTI0OGE3NGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.SmCN3gvTligT0hQ4SCOlvBXaf_bg-6TDW4jxuA2UsQE'
    }
  },
  {
    id: 4,
    category: 'API',
    title: 'Rick & Morty SPA',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif',
    details: {
      project: 'Rick & Morty SPA',
      language: 'Angular 20, TypeScript, SCSS3, Angular Material',
      client: 'Projeto Pessoal',
      previewUrl: 'https://rickmorty-4vlcxnozg-guilherme-dev15s-projects.vercel.app/profile',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif'
    }
  },
  {
    id: 5,
    category: 'BACK-END',
    title: 'Git Automation CLI – gitmenu',
    imageSrc: 'https://github.com/Guilherme-dev15/git-automation-tool/raw/main/demo.gif',
    details: {
      project: 'Git Automation CLI – gitmenu',
      language: 'Bash, FZF',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/Guilherme-dev15/git-automation-tool',
      modalImageSrc: 'https://github.com/Guilherme-dev15/git-automation-tool/raw/main/demo.gif'
    }
  },
    {
    id: 6,
    category: 'FULL-STACK',
    title: 'Pokémon Pokedex',
    imageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif',
    details: {
      project: 'Pokémon Pokedex',
      language: 'React, Vite, Styled Components',
      client: 'Projeto Pessoal',
      previewUrl: 'https://guilherme-dev15.github.io/project-pokedex-react/',
      modalImageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif'
    }
  },
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
    { key: 'Phone', value: '+55 11 97839-9326' },
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
      description: 'Foco em automação corporativa (PowerShell) e DevOps. Fui o responsável técnico pela implantação do sistema ITSM (GLPI) do zero, além de atuar no monitoramento proativo com Zabbix/Grafana.'
    },
    {
      type: 'experience',
      year: '2021 - 2022',
      title: 'ANALISTA DE SUPORTE TÉCNICO',
      institution: 'Brint Comércio e Indústria',
      description: 'Troubleshooting avançado em sistemas de logística (WMS/WCS). Diferencial na realização de consultas e validações em bancos de dados relacionais (Oracle e PostgreSQL) para diagnóstico de falhas em aplicações.'
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