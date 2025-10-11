// Dados do Perfil e Home
export const PROFILE_DATA = {
    name: "STEVE MILNER",
    title: "WEB DESIGNER",
    shortDescription: "Eu sou um web designer e desenvolvedor front-end tunisiano focado em criar software limpo e amigável, apaixonado por construir soluções excelentes que melhoram a vida daqueles ao meu redor.",
};

// Dados da seção Sobre Mim (Usados no AboutMeModal)
export const ABOUT_ME_DATA = {
    personal: [
        { key: "Primeiro Nome", value: "Steve" },
        { key: "Último Nome", value: "Milner" },
        { key: "Idade", value: "27 Anos" },
        { key: "Nacionalidade", value: "Tunisiana" },
        { key: "Freelancer", value: "Disponível", highlight: true }, // Adicionei highlight para o estilo amarelo
        { key: "Endereço", value: "Tunis" },
        { key: "Telefone", value: "+21621184010" },
        { key: "Email", value: "you@mail.com" },
        { key: "Skype", value: "steve.milner" },
        { key: "Idiomas", value: "Francês, Inglês" },
    ],
    stats: [
        { count: "12+", label: "ANOS DE EXPERIÊNCIA" },
        { count: "97+", label: "PROJETOS CONCLUÍDOS" },
        { count: "81+", label: "CLIENTES FELIZES" },
        { count: "53+", label: "PRÊMIOS GANHOS" },
    ],
    skills: [
        { name: "HTML", percentage: 25 },
        { name: "JAVASCRIPT", percentage: 89 },
        { name: "CSS", percentage: 70 },
        { name: "PHP", percentage: 66 },
        { name: "WORDPRESS", percentage: 95 },
        { name: "JQUERY", percentage: 50 },
        { name: "ANGULAR", percentage: 65 },
        { name: "REACT", percentage: 45 },
    ],
    timeline: [
        // Experiência
        { type: 'experience', year: '2018 - PRESENTE', title: 'WEB DEVELOPER', institution: 'ENVATO', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { type: 'experience', year: '2013 - 2018', title: 'UI/UX DESIGNER', institution: 'THEMEFOREST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { type: 'experience', year: '2005 - 2013', title: 'CONSULTOR', institution: 'VIDEOHIVE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        // Educação
        { type: 'education', year: '2015', title: 'ENGENHARIA', institution: 'OXFORD UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { type: 'education', year: '2012', title: 'MESTRADO', institution: 'KIEV UNIVERSITY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { type: 'education', year: '2009', title: 'BACHARELADO', institution: 'TUNIS HIGH SCHOOL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ]
};

// Dados do Portfólio (Usados no PortfolioSection)
export const PORTFOLIO_DATA = [
    // Usei placehold.co para simular as imagens das suas capturas
    {
        id: 1,
        category: 'MOCKUP',
        title: 'Mockup Project',
        imageSrc: 'https://placehold.co/400x300/252525/d4af37?text=Mockup+1',
        projectDetails: {
            project: 'Website',
            language: 'HTML, CSS, Javascript',
            client: 'Themeforest',
            previewUrl: 'https://www.pexels.com',
            modalImageSrc: 'https://placehold.co/600x400/252525/d4af37?text=MOCKUP+PROJECT+DETAIL',
        },
    },
    {
        id: 2,
        category: 'LOGO',
        title: 'Minimalist Logo',
        imageSrc: 'https://placehold.co/400x300/252525/d4af37?text=Logo+2',
        projectDetails: {
            project: 'Branding',
            language: 'Adobe Illustrator',
            client: 'StartUp XYZ',
            previewUrl: 'https://www.google.com',
            modalImageSrc: 'https://placehold.co/600x400/252525/d4af37?text=LOGO+DETAIL',
        },
    },
    // Adicione mais itens conforme necessário...
];

// Dados do Blog (Usados no BlogSection)
export const BLOG_DATA = [
    {
        title: "Como Controlar Seu Público Criando uma Lista de E-mail",
        image: "https://placehold.co/400x250/373737/d4af37?text=E-mail+Marketing",
        snippet: "Tomfoolery crikey bits e bobs brilliant bamboozled down the pub amongst brolly hanky panky. Cack b ut",
    },
    {
        title: "Top 10 Kits de Ferramentas para Deep Learning em 2022",
        image: "https://placehold.co/400x250/373737/d4af37?text=Deep+Learning",
        snippet: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
    },
    {
        title: "Tudo O Que Você Precisa Saber Sobre Acessibilidade Web",
        image: "https://placehold.co/400x250/373737/d4af37?text=Acessibilidade",
        snippet: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma",
    },
];
