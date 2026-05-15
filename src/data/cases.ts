export interface Case {
  name: string
  icon: string
  segment: string
  description: string
  screenshot: string
  screenshot2?: string
  tags: string[]
  link?: string
}

export const cases: Case[] = [
  {
    name: 'Diag',
    icon: '/images/img-cases-diag-icon.webp',
    segment: 'Healthtech',
    description:
      'Prescrições médicas simplificadas. Plataforma completa de gestão de saúde com geração de prontuários e receitas médicas, chat com IA para suporte diagnóstico, e conteúdos médicos atualizados para facilitar o dia-a-dia dos médicos.',
    screenshot: '/images/img-cases-diag-screenshot-1.webp',
    screenshot2: '/images/img-cases-diag-screenshot-2.webp',
    tags: ['IDENTIDADE VISUAL', 'WIREFRAME', 'INFRAESTRUTURA', 'IOS', 'ANDROID', 'WEB', 'LANDING PAGE', 'BACKOFFICE', 'IA'],
    link: '/cases/diag',
  },
  {
    name: 'Psiapp',
    icon: '/images/img-cases-psiapp-icon.webp',
    segment: 'Healthtech',
    description:
      'O aplicativo que conecta psicólogos a pacientes. Desenvolvimento completo dos aplicativos para pacientes e psicólogos, criação do backoffice para gestão e suporte dos atendimentos. Análise de dados para crescimento do projeto e manutenção contínua.',
    screenshot: '/images/img-cases-psiapp-screenshot-1.webp',
    screenshot2: '/images/img-cases-psiapp-screenshot-2.webp',
    tags: ['IDENTIDADE VISUAL', 'WIREFRAME', 'INFRAESTRUTURA', 'IOS', 'ANDROID', 'WEB', 'BACKOFFICE'],
    link: '/cases/psiapp',
  },
  {
    name: 'Autoday',
    icon: '/images/img-cases-autoday-icon.webp',
    segment: 'Insurtech',
    description:
      'É uma insurtech especializada no desenvolvimento de soluções de seguros de mobilidade inovadores e acessíveis. O aplicativo que ajuda você a proteger seu carro com um seguro intermitente revolucionário.',
    screenshot: '/images/img-cases-autoday-screenshot-1.webp',
    screenshot2: '/images/img-cases-autoday-screenshot-2.webp',
    tags: ['BACKOFFICE', 'WIREFRAME', 'IDENTIDADE VISUAL', 'INFRAESTRUTURA', 'LANDING PAGE', 'IOS', 'ANDROID'],
    link: '/cases/autoday',
  },
  {
    name: 'Bluu',
    icon: '/images/img-cases-bluu-icon.webp',
    segment: 'Healthtech',
    description:
      'Aplicativo de saúde preventiva para pets, ajudando tutores a melhorar a saúde de seus bichinhos com atividades e práticas diárias. Além de atendimento veterinário para casos emergenciais.',
    screenshot: '/images/img-cases-bluu-screenshot-1.webp',
    screenshot2: '/images/img-cases-bluu-screenshot-2.webp',
    tags: ['WIREFRAME', 'BACKOFFICE', 'LANDING PAGE', 'IDENTIDADE VISUAL', 'IOS', 'ANDROID'],
  },
  {
    name: 'Novva',
    icon: '/images/img-cases-novva-icon.webp',
    segment: 'Educação',
    description:
      'Aplicativo para alunos americanos que vão ingressar nas universidades e querem conhecer as instituições de ensino. Uma plataforma completa que facilita a jornada de descoberta e conexão com as melhores universidades.',
    screenshot: '/images/img-cases-novva-screenshot-1.webp',
    screenshot2: '/images/img-cases-novva-screenshot-2.webp',
    tags: ['IDENTIDADE VISUAL', 'WIREFRAME', 'IOS', 'ANDROID'],
  },
  {
    name: 'Devotee',
    icon: '/images/img-cases-devotee-icon.webp',
    segment: 'Social',
    description:
      'Tivemos a honra de tirar do papel o único aplicativo de relacionamento exclusivo para deficientes físicos. Desde a concepção da ideia até o desenvolvimento do iOS e Android.',
    screenshot: '/images/img-cases-devotee-screenshot-1.webp',
    screenshot2: '/images/img-cases-devotee-screenshot-2.webp',
    tags: ['WIREFRAME', 'BACKEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE', 'IDENTIDADE VISUAL'],
  },
  {
    name: '4Traders',
    icon: '/images/img-cases-4traders-icon.webp',
    segment: 'Fintech',
    description:
      'Aplicativo de informações de mercado para quem investe em ações. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepção até a publicação.',
    screenshot: '/images/img-cases-4traders-screenshot-1.webp',
    screenshot2: '/images/img-cases-4traders-screenshot-2.webp',
    tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
  },
  {
    name: 'MovSpot',
    icon: '/images/img-cases-movspot-icon.webp',
    segment: 'Social',
    description:
      'Tiramos a ideia do papel, estudamos o mercado, criamos a identidade e desenvolvemos a única plataforma que mostra onde os filmes foram gravados na internet.',
    screenshot: '/images/img-cases-movspot-screenshot-1.webp',
    screenshot2: '/images/img-cases-movspot-screenshot-2.webp',
    tags: ['PESQUISA DE MERCADO', 'IDENTIDADE VISUAL', 'WIREFRAME', 'INFRAESTRUTURA', 'IOS', 'ANDROID', 'WEB'],
  },
  {
    name: 'Chefe de Plantão',
    icon: '/images/img-cases-chefe-icon.webp',
    segment: 'Healthtech',
    description:
      'Aplicativo que ajuda médicos recém formados com suas consultas. Projeto que construímos todos os produtos, desde a identidade até todos os aplicativos.',
    screenshot: '/images/img-cases-chefe-screenshot-1.webp',
    screenshot2: '/images/img-cases-chefe-screenshot-2.webp',
    tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
  },
  {
    name: 'Goplayer',
    icon: '/images/img-cases-goplayer-icon.webp',
    segment: 'Social',
    description:
      'Aplicativo conecta jogadores de futebol com times. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepção até a publicação.',
    screenshot: '/images/img-cases-goplayer-screenshot-1.webp',
    screenshot2: '/images/img-cases-goplayer-screenshot-2.webp',
    tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
  },
  {
    name: 'Buyapp',
    icon: '/images/img-cases-buyapp-icon.webp',
    segment: 'Varejo',
    description: 'O aplicativo que ajuda você a fazer suas compras seja em mercados ou em distribuidores.',
    screenshot: '/images/img-cases-buyapp-screenshot-1.webp',
    screenshot2: '/images/img-cases-buyapp-screenshot-2.webp',
    tags: ['MOCKUP', 'BACKEND', 'IOS', 'ANDROID'],
  },
  {
    name: 'Megatroca',
    icon: '/images/img-cases-megatroca-icon.webp',
    segment: 'Varejo',
    description:
      'Aplicativo para venda e compra de veículos. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepção até a publicação.',
    screenshot: '/images/img-cases-megatroca-screenshot-1.webp',
    screenshot2: '/images/img-cases-megatroca-screenshot-2.webp',
    tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
  },
  {
    name: 'Goin',
    icon: '/images/img-cases-goin-icon.webp',
    segment: 'Social',
    description:
      'Montando um time exclusivo para o desenvolvimento do aplicativo que traz entretenimento na palma das mãos pra quem não aguenta ficar sentado no sofá.',
    screenshot: '/images/img-cases-goin-screenshot-1.webp',
    screenshot2: '/images/img-cases-goin-screenshot-2.webp',
    tags: ['MOCKUP', 'BACKEND', 'FRONTEND', 'IOS', 'WEB', 'BACKOFFICE'],
  },
  {
    name: 'Dr Luke',
    icon: '/images/img-cases-drluke-icon.webp',
    segment: 'Healthtech',
    description: 'Desenvolvemos a versão Android do aplicativo que está ajudando as mães com a vacinação de seus filhos.',
    screenshot: '/images/img-cases-drluke-screenshot-1.webp',
    screenshot2: '/images/img-cases-drluke-screenshot-2.webp',
    tags: ['MOCKUP', 'BACKEND', 'IOS', 'ANDROID'],
  },
  {
    name: 'Gente Seguradora',
    icon: '/images/img-cases-gente-icon.webp',
    segment: 'Insurtech',
    description:
      'Estivemos dia-a-dia estudando o fluxo de dados de nosso cliente. Baseado na maneira como as pessoas utilizavam os serviços da Gente Seguradora nós construímos os aplicativos para digitalizar diversos processos que eram feitos manualmente.',
    screenshot: '/images/img-cases-gente-screenshot-1.webp',
    screenshot2: '/images/img-cases-gente-screenshot-2.webp',
    tags: ['MOCKUP', 'BACKEND', 'FRONTEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE'],
  },
]

export const caseHoverColors: { [key: string]: string } = {
  'Diag': '#8046FB1A',
  'Psiapp': '#FD97731A',
  'Autoday': '#5E239F1A',
  'Bluu': '#D80A831A',
  'Chefe de Plantão': '#0E97931A',
  'Dr Luke': '#FEC2671A',
  'Gente Seguradora': '#2692D71A',
  'MovSpot': '#FF8E0A1A',
  'Devotee': '#F96B6C1A',
  'Goplayer': '#21BD441A',
  'Goin': '#FE4F4E1A',
  '4Traders': '#F75A381A',
  'Buyapp': '#F75A381A',
  'Megatroca': '#007AFF1A',
  'Novva': '#ED61251A',
}

export const getSegmentIcon = (segment: string) => {
  const map: { [key: string]: string } = {
    'Healthtech': 'fa-solid fa-heart-pulse',
    'Insurtech': 'fa-solid fa-shield-halved',
    'Social': 'fa-solid fa-users',
    'Fintech': 'fa-solid fa-chart-line',
    'Varejo': 'fa-solid fa-store',
    'Educação': 'fa-solid fa-graduation-cap',
  }
  return map[segment] || 'fa-solid fa-tag'
}

export const getTagIcon = (tag: string) => {
  const map: { [key: string]: string } = {
    'IOS': 'fa-brands fa-apple',
    'ANDROID': 'fa-brands fa-android',
    'WEB': 'fa-solid fa-globe',
    'BACKEND': 'fa-solid fa-server',
    'FRONTEND': 'fa-solid fa-laptop-code',
    'BACKOFFICE': 'fa-solid fa-chart-pie',
    'IDENTIDADE VISUAL': 'fa-solid fa-palette',
    'WIREFRAME': 'fa-solid fa-drafting-compass',
    'INFRAESTRUTURA': 'fa-solid fa-cloud',
    'LANDING PAGE': 'fa-solid fa-file-code',
    'IA': 'fa-solid fa-brain',
    'PESQUISA DE MERCADO': 'fa-solid fa-magnifying-glass-chart',
    'LOGO': 'fa-solid fa-pen-nib',
    'MOCKUP': 'fa-solid fa-pencil-ruler',
  }
  return map[tag.toUpperCase()] || 'fa-solid fa-check'
}
