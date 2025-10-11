// src/data/profileData.ts

/**
 * @file Fonte da verdade para todos os dados do portfólio de Guilherme dos Anjos Macedo.
 * Estruturado para corresponder às interfaces em `src/types/portfolio.ts`.
 */

import { Briefcase, Rocket, Users, Target } from 'lucide-react';
import type { ProfileData, Project, BlogPost, AboutSectionData } from '../types/portfolio';

// --- SEÇÃO: PORTFÓLIO (Atualizado com seus projetos e categorias corretas) ---
const PORTFOLIO_DATA: Project[] = [
  {
    id: 1,
    category: 'API', // CORREÇÃO: Categoria válida
    title: 'MovieFlix API',
    imageSrc: 'https://placehold.co/400x300/252525/d4af37?text=MovieFlix+API',
    details: {
      project: 'API REST para catálogo de filmes',
      language: 'Node.js, Express, PostgreSQL',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/GuilhermeAnjosT/MovieFlix-API',
      modalImageSrc: 'https://placehold.co/600x400/252525/d4af37?text=MovieFlix+API',
    },
  },
  {
    id: 2,
    category: 'FULL-STACK', // CORREÇÃO: Categoria válida
    title: 'Finance App',
    imageSrc: 'https://placehold.co/400x300/252525/d4af37?text=Finance+App',
    details: {
      project: 'Controle de finanças pessoais',
      language: 'TypeScript, Nest.js, MongoDB',
      client: 'Projeto Pessoal (em desenvolvimento)',
      previewUrl: 'https://github.com/GuilhermeAnjosT/Finance-App',
      modalImageSrc: 'https://placehold.co/600x400/252525/d4af37?text=Finance+App',
    },
  },
  {
    id: 3,
    category: 'FULL-STACK', // CORREÇÃO: Categoria válida
    title: 'Costs Project',
    imageSrc: 'https://placehold.co/400x300/252525/d4af37?text=Costs',
    details: {
      project: 'Gerenciamento de custos de projetos',
      language: 'React.js, Node.js',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/GuilhermeAnjosT/Costs-Project',
      modalImageSrc: 'https://placehold.co/600x400/252525/d4af37?text=Costs+Project',
    },
  },
  {
    id: 4,
    category: 'FRONT-END', // CORREÇÃO: Categoria válida
    title: 'Pokémon Pokedex',
    imageSrc: 'https://placehold.co/400x300/252525/d4af37?text=Pokedex',
    details: {
      project: 'Pokedex com busca e filtros',
      language: 'React.js, JavaScript, API REST',
      client: 'Projeto Pessoal',
      previewUrl: 'https://github.com/GuilhermeAnjosT/Pokemon-Pokedex',
      modalImageSrc: 'https://placehold.co/600x400/252525/d4af37?text=Pokedex',
    },
  },
];

// --- SEÇÃO: BLOG (Corrigido para usar 'imageSrc') ---
const BLOG_DATA: BlogPost[] = [
  {
    title: 'Como Criei Minha Primeira API REST com Node.js e Express',
    imageSrc: 'https://placehold.co/400x250/373737/d4af37?text=API+com+Node.js', // CORREÇÃO
    snippet: 'Um guia passo a passo sobre a arquitetura, autenticação e desafios encontrados durante o desenvolvimento da MovieFlix API...',
  },
  {
    title: 'Por Que Escolhi Nest.js para Meu Novo Projeto Full Stack',
    imageSrc: 'https://placehold.co/400x250/373737/d4af37?text=Nest.js', // CORREÇÃO
    snippet: 'Analisando os benefícios do Nest.js, como a arquitetura modular, injeção de dependência e o uso de TypeScript...',
  },
  {
    title: 'De Suporte de TI para Desenvolvedor: Minha Jornada de Transição',
    imageSrc: 'https://placehold.co/400x250/373737/d4af37?text=Carreira', // CORREÇÃO
    snippet: 'Compartilhando as lições aprendidas, os desafios superados e as habilidades que transferi da infraestrutura para o desenvolvimento...',
  },
];

// --- SEÇÃO: SOBRE MIM (Seus dados reais, já corrigidos) ---
const ABOUT_ME_DATA: AboutSectionData = {
  personal: [
    { key: 'First Name', value: 'Guilherme' },
    { key: 'Last Name', value: 'dos Anjos Macedo' },
    { key: 'Age', value: '27 Years' },
    { key: 'Nationality', value: 'Brazilian' },
    { key: 'Freelance', value: 'Available', highlight: true },
    { key: 'Address', value: 'São Paulo - SP, Brazil' },
    { key: 'Phone', value: '+55 11 97839-9326' },
    { key: 'Email', value: 'guilherme.macedo1598@gmail.com' },
    { key: 'LinkedIn', value: 'guilhermeanjosdev' },
    { key: 'Languages', value: 'Portuguese (Native), English (Technical)' },
  ],
  stats: [
    { count: '5+', label: 'ANOS DE EXPERIÊNCIA EM TI', icon: Briefcase },
    { count: '20+', label: 'PROJETOS COMPLETOS', icon: Rocket },
    { count: '10+', label: 'CLIENTES SATISFEITOS', icon: Users },
    { count: 'R$1M', label: 'META DE FATURAMENTO', icon: Target },
  ],
  skills: [
    { name: 'JavaScript (ES6+)', percent: 85 },
    { name: 'TypeScript', percent: 70 },
    { name: 'React.js', percent: 75 },
    { name: 'Node.js', percent: 78 },
    { name: 'SQL/PostgreSQL', percent: 75 },
    { name: 'Infraestrutura/Deploy', percent: 80 },
    { name: 'HTML5 & CSS3', percent: 90 },
    { name: 'Metodologias Ágeis', percent: 80 },
  ],
  timeline: [
    { type: 'experience', year: '2023 - ATUAL', title: 'ASSISTENTE DE INFRAESTRUTURA DE TI', institution: 'Pashal Locadora de Equipamentos', description: 'Suporte a ambientes críticos, administração de AD e Office 365, e atendimento técnico especializado via Zendesk.' },
    { type: 'experience', year: '2021 - 2022', title: 'ANALISTA DE SUPORTE TÉCNICO', institution: 'Brint Comércio e Indústria', description: 'Suporte a sistemas WMS/WCS com bancos de dados Oracle e PostgreSQL, e gestão de acessos em Azure AD.' },
    { type: 'education', year: '2019', title: 'TECNÓLOGO EM ANÁLISE E DESENV. DE SISTEMAS', institution: 'Universidade Cidade de São Paulo - UNICID', description: 'Formação superior focada em desenvolvimento de sistemas, banco de dados e arquitetura de software.' },
  ],
};

// --- ESTRUTURA DE DADOS PRINCIPAL ---
const PROFILE_DATA: ProfileData = {
  name: 'GUILHERME MACEDO',
  title: 'FULL STACK DEVELOPER',
  shortDescription: "Desenvolvedor Full Stack com 5+ anos de experiência em TI. Em transição de carreira da infraestrutura, trago uma visão sistêmica e forte capacidade de resolução de problemas para criar soluções web modernas com React, Node.js e TypeScript.",
  about: ABOUT_ME_DATA,
  portfolio: PORTFOLIO_DATA,
  blogPosts: BLOG_DATA,
};

export default PROFILE_DATA;