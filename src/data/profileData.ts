import { Briefcase, Rocket, Wrench, Monitor } from 'lucide-react';
import type { ProfileData, Project, AboutSectionData } from '../types/portfolio';

const PORTFOLIO_DATA: Project[] = [
  {
    id: 1,
    category: 'FULL-STACK',
    title: 'Clean APP — ERP e PDV',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/clean-app/refs/heads/main/preview/dash.gif',
    details: {
      project: 'ERP/PDV desenvolvido para uma operação real, com vendas, estoque, clientes, fornecedores, fluxo de caixa e relatórios.',
      language: 'React, TypeScript, Firebase Authentication e Firestore',
      client: 'Projeto independente',
      previewUrl: 'https://github.com/Guilherme-dev15/clean-app',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/clean-app/refs/heads/main/preview/orcamento.gif',
    },
  },
  {
    id: 2,
    category: 'FULL-STACK',
    title: 'Hive ERP — ERP e catálogo online',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/HivePratas/main/preview.gif',
    details: {
      project: 'Produto em desenvolvimento para gestão de lojas de pratas, semijoias e acessórios.',
      language: 'Aplicação web, catálogo online e painel administrativo',
      client: 'Projeto independente',
      previewUrl: 'https://github.com/Guilherme-dev15',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/HivePratas/main/preview.gif',
    },
  },
  {
    id: 3,
    category: 'FULL-STACK',
    title: 'CurriculoPro — Plataforma SaaS',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/CurriculoPro/refs/heads/main/Preview.gif',
    details: {
      project: 'Plataforma para criação, gerenciamento, compartilhamento e análise de currículos profissionais.',
      language: 'Vue 3, TypeScript, Pinia, Node.js, Express, Prisma e JWT',
      client: 'Projeto independente',
      previewUrl: 'https://github.com/Guilherme-dev15/CurriculoPro',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/CurriculoPro/refs/heads/main/Preview.gif',
    },
  },
  {
    id: 4,
    category: 'BACK-END',
    title: 'Git Automation CLI — gitmenu',
    imageSrc: 'https://github.com/Guilherme-dev15/git-automation-tool/raw/main/demo.gif',
    details: {
      project: 'Ferramenta de linha de comando para automação de fluxos Git.',
      language: 'Bash e FZF',
      client: 'Projeto independente',
      previewUrl: 'https://github.com/Guilherme-dev15/git-automation-tool',
      modalImageSrc: 'https://github.com/Guilherme-dev15/git-automation-tool/raw/main/demo.gif',
    },
  },
  {
    id: 5,
    category: 'FRONT-END',
    title: 'Rick & Morty SPA',
    imageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif',
    details: {
      project: 'Single Page Application para exploração de personagens utilizando API REST.',
      language: 'Angular, TypeScript e Angular Material',
      client: 'Projeto independente',
      previewUrl: 'https://rickmorty-4vlcxnozg-guilherme-dev15s-projects.vercel.app/profile',
      modalImageSrc: 'https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif',
    },
  },
  {
    id: 6,
    category: 'FRONT-END',
    title: 'Pokémon Pokedex',
    imageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif',
    details: {
      project: 'Enciclopédia interativa consumindo a PokeAPI.',
      language: 'React, Vite e Styled Components',
      client: 'Projeto independente',
      previewUrl: 'https://guilherme-dev15.github.io/project-pokedex-react/',
      modalImageSrc: 'https://github.com/Guilherme-dev15/project-pokedex-react/raw/main/src/assets/Pokedex-react.gif',
    },
  },
];

const ABOUT_ME_DATA: AboutSectionData = {
  personal: [
    { key: 'Nome', value: 'Guilherme dos Anjos Macedo' },
    { key: 'Cargo', value: 'Desenvolvedor Full Stack' },
    { key: 'Especialidade', value: 'React, TypeScript e Node.js' },
    { key: 'Disponibilidade', value: 'Aberto a oportunidades', highlight: true },
    { key: 'Localização', value: 'São Paulo, SP, Brasil' },
    { key: 'E-mail', value: 'guilherme.macedo1598@gmail.com' },
    { key: 'Idiomas', value: 'Português (nativo), Inglês (técnico)' },
  ],
  stats: [
    { count: '5+', label: 'ANOS EM TECNOLOGIA', icon: Briefcase },
    { count: '3', label: 'PROJETOS PRINCIPAIS', icon: Rocket },
    { count: '15+', label: 'TECNOLOGIAS & FERRAMENTAS', icon: Wrench },
    { count: '2', label: 'ERPs EM DESENVOLVIMENTO', icon: Monitor },
  ],
  skills: [
    { name: 'React / Vue 3 / TypeScript', percent: 80 },
    { name: 'Node.js / NestJS / Express', percent: 80 },
    { name: 'SQL / PostgreSQL / MongoDB', percent: 80 },
    { name: 'Docker / Linux / Git', percent: 75 },
    { name: 'Firebase / Firestore', percent: 75 },
    { name: 'GLPI / Zabbix / Grafana', percent: 85 },
  ],
  timeline: [
    {
      type: 'experience',
      year: 'JUL 2023 – ATUAL',
      title: 'ASSISTENTE DE INFRAESTRUTURA DE TI',
      institution: 'Pashal Locadora de Equipamentos',
      description: 'Atuação em ambiente corporativo com aproximadamente 300 usuários. Implantação e sustentação do GLPI, criação de dashboard operacional no Grafana e suporte à infraestrutura, aos sistemas e aos recursos tecnológicos.',
    },
    {
      type: 'experience',
      year: 'DEZ 2021 – NOV 2022',
      title: 'ANALISTA DE SUPORTE TÉCNICO',
      institution: 'Brint Comércio e Indústria, atualmente TGW Comércio e Serviços',
      description: 'Suporte a sistemas corporativos de logística e automação industrial, análise de logs e investigação de inconsistências com consultas SQL em PostgreSQL e Oracle. Atuação com sistemas WMS e WCS.',
    },
    {
      type: 'experience',
      year: 'SET 2019 – DEZ 2021',
      title: 'AUXILIAR DE CARTÓRIO / SUPORTE DE TI',
      institution: '14º Cartório da Lapa',
      description: 'Atendimento de suporte técnico N1, configuração de equipamentos e softwares e suporte a certificados digitais.',
    },
    {
      type: 'education',
      year: 'EM ANDAMENTO',
      title: 'PÓS-GRADUAÇÃO EM ENGENHARIA DE SOFTWARE',
      institution: 'Anhanguera',
      description: 'Formação voltada a arquitetura, desenvolvimento e evolução de sistemas de software.',
    },
    {
      type: 'education',
      year: 'CONCLUÍDO EM 2019',
      title: 'TECNÓLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
      institution: 'Universidade Cidade de São Paulo — UNICID',
      description: 'Formação em desenvolvimento de sistemas, programação e bancos de dados.',
    },
  ],
};

const PROFILE_DATA: ProfileData = {
  name: 'Guilherme dos Anjos Macedo',
  title: 'Desenvolvedor Full Stack · React, TypeScript e Node.js',
  shortDescription: 'Desenvolvedor Full Stack com mais de cinco anos de experiência em Infraestrutura e Suporte de TI. Construo aplicações web e sistemas de gestão, unindo desenvolvimento de produtos à experiência prática em implantação, monitoramento e sustentação em produção.',
  about: ABOUT_ME_DATA,
  portfolio: PORTFOLIO_DATA,
  blogPosts: [],
};

export default PROFILE_DATA;
