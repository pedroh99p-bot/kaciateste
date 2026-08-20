import type { ProspectConfig } from "./types";

export const defaultProspectConfig: ProspectConfig = {
  slug: "prospect-demo",
  status: "draft",
  business: {
    name: "Despachante Veicular",
    category: "Despachante veicular",
    description:
      "Base configurável para atendimento de despachante veicular, com dados centralizados por configuração.",
    legalNotice:
      "Prazos e resultados podem variar de acordo com a análise e os procedimentos dos órgãos responsáveis."
  },
  specialist: {
    name: "Nome do Especialista",
    role: "Especialista em documentação veicular",
    city: "Sua Cidade",
    state: "UF",
    description:
      "Atendimento consultivo para orientar cada etapa da regularização, com comunicação clara e acompanhamento pelo WhatsApp.",
    signatureText: "Nome do Especialista",
    chips: [
      { label: "Atendimento humanizado", icon: "message" },
      { label: "Processo organizado", icon: "shield" },
      { label: "Orientação clara", icon: "badge-check" }
    ],
    credentials: []
  },
  contact: {
    whatsapp: "5500000000000",
    whatsappLabel: "(00) 00000-0000",
    phone: null,
    phoneLabel: null,
    email: null,
    instagram: "@seuinstagram",
    instagramUrl: null,
    defaultMessage:
      "Olá, vim pelo site da {{businessName}}. Gostaria de receber uma orientação sobre documentação veicular."
  },
  location: {
    city: "Sua Cidade",
    state: "UF",
    address: "Endereço comercial do despachante",
    region: "Sua Cidade e região",
    hours: ["Seg a Sex: informe o horário", "Sáb: informe se houver atendimento"],
    routeUrl: null,
    mapEmbedUrl: null
  },
  assets: {
    logo: {
      src: "/assets/placeholders/logo.svg",
      alt: "Logo configurável do despachante",
      width: 296,
      height: 96
    },
    logoLight: null,
    logoDark: null,
    symbol: {
      src: "/assets/placeholders/symbol.svg",
      alt: "Símbolo demonstrativo",
      width: 96,
      height: 96
    },
    favicon: "/assets/placeholders/symbol.svg",
    heroSpecialist: {
      src: "/assets/placeholders/specialist.svg",
      alt: "Retrato ilustrativo substituível do especialista",
      width: 760,
      height: 960,
      objectPosition: "center bottom"
    },
    specialistPortrait: {
      src: "/assets/placeholders/specialist.svg",
      alt: "Retrato ilustrativo substituível do especialista",
      width: 760,
      height: 960,
      objectPosition: "center bottom"
    },
    specialistSignature: null,
    socialPreview: "/assets/placeholders/social-preview.svg",
    backgroundTexture: null,
    testimonialAvatars: [
      {
        src: "/assets/placeholders/avatar.svg",
        alt: "Avatar demonstrativo substituível",
        width: 96,
        height: 96
      }
    ],
    mapFallback: {
      src: "/assets/placeholders/map.svg",
      alt: "Mapa ilustrativo substituível",
      width: 960,
      height: 720
    }
  },
  services: [
    {
      id: "transferencia",
      title: "Transferência de veículo",
      shortDescription: "Orientação para troca de propriedade com documentação organizada.",
      icon: "transfer",
      enabled: true,
      ctaLabel: "Falar com o especialista",
      whatsappMessage: "Quero orientação sobre transferência de veículo."
    },
    {
      id: "licenciamento",
      title: "Licenciamento",
      shortDescription: "Apoio para entender etapas e pendências do licenciamento.",
      icon: "document",
      enabled: true,
      ctaLabel: "Falar com o especialista",
      whatsappMessage: "Quero orientação sobre licenciamento."
    },
    {
      id: "comunicacao-venda",
      title: "Comunicação de venda",
      shortDescription: "Ajuda para organizar a comunicação após venda do veículo.",
      icon: "message",
      enabled: true,
      ctaLabel: "Falar com o especialista",
      whatsappMessage: "Quero orientação sobre comunicação de venda."
    },
    {
      id: "segunda-via",
      title: "Segunda via de documentos",
      shortDescription: "Direcionamento para casos de perda, roubo ou atualização documental.",
      icon: "clipboard",
      enabled: true,
      ctaLabel: "Falar com o especialista",
      whatsappMessage: "Quero orientação sobre segunda via de documentos."
    },
    {
      id: "regularizacao",
      title: "Regularização de pendências",
      shortDescription: "Análise inicial de pendências e próximos passos possíveis.",
      icon: "shield",
      enabled: true,
      ctaLabel: "Falar com o especialista",
      whatsappMessage: "Quero orientação sobre regularização de pendências."
    },
    {
      id: "primeiro-emplacamento",
      title: "Primeiro emplacamento",
      shortDescription: "Orientação para organizar a documentação do primeiro registro.",
      icon: "car",
      enabled: true,
      ctaLabel: "Falar com o especialista",
      whatsappMessage: "Quero orientação sobre primeiro emplacamento."
    }
  ],
  commercialFeatures: [],
  packages: {
    enabled: false,
    eyebrow: "Investimento",
    headline: {
      before: "Escolha o atendimento mais adequado ao",
      highlight: "seu momento",
      after: "",
      variant: "glow"
    },
    subtitle: "Compare as opções disponíveis antes de iniciar o atendimento.",
    disclaimer: null,
    items: []
  },
  packageComparison: {
    enabled: false,
    eyebrow: "Comparativo",
    headline: {
      before: "Compare as",
      highlight: "opções",
      after: "",
      variant: "glow"
    },
    subtitle: "Veja as principais diferenças entre os atendimentos disponíveis.",
    packageIds: [],
    featureIds: []
  },
  inclusions: {
    enabled: false,
    eyebrow: "Detalhes do atendimento",
    headline: {
      before: "O que está",
      highlight: "incluso",
      after: "",
      variant: "glow"
    },
    subtitle: "Selecione uma opção para conferir os detalhes.",
    defaultTabId: null,
    tabs: []
  },
  renewal: {
    enabled: false,
    eyebrow: "Renovação documental",
    headline: {
      before: "Organize sua renovação com",
      highlight: "antecedência",
      after: "",
      variant: "glow"
    },
    subtitle: "Confira as opções cadastradas para o seu caso.",
    description: "A orientação depende da análise dos documentos e requisitos aplicáveis.",
    prices: [],
    initialQuantity: null,
    benefits: [],
    additionalLabel: null,
    disclaimer: null,
    ctaLabel: "Falar sobre renovação",
    whatsappMessage: "Quero orientação sobre renovação documental."
  },
  reports: {
    enabled: false,
    eyebrow: "Etapas complementares",
    headline: {
      before: "Orientação sobre etapas",
      highlight: "complementares",
      after: "",
      variant: "glow"
    },
    subtitle: "Informações gerais sobre etapas que podem ser aplicáveis ao processo.",
    items: []
  },
  faq: {
    enabled: false,
    eyebrow: "Dúvidas frequentes",
    headline: {
      before: "Informações para começar com",
      highlight: "clareza",
      after: "",
      variant: "glow"
    },
    subtitle: "Respostas prudentes sobre atendimento, documentos e próximos passos.",
    items: []
  },
  benefits: [
    {
      title: "Atendimento especializado",
      description: "Orientação focada em documentação veicular e dúvidas do dia a dia.",
      icon: "shield"
    },
    {
      title: "Orientação clara",
      description: "Você entende o que precisa separar antes de iniciar o atendimento.",
      icon: "badge-check"
    },
    {
      title: "Acompanhamento pelo WhatsApp",
      description: "O contato acontece no canal que o cliente já usa.",
      icon: "whatsapp"
    },
    {
      title: "Processo organizado",
      description: "Etapas, documentos e próximos passos ficam mais fáceis de acompanhar.",
      icon: "clipboard"
    },
    {
      title: "Atendimento humanizado",
      description: "Um fluxo direto para explicar sua situação sem burocracia desnecessária.",
      icon: "user"
    }
  ],
  process: [
    {
      title: "Você explica o que precisa",
      description: "Conte a situação pelo WhatsApp ou pela consulta rápida.",
      icon: "message"
    },
    {
      title: "A situação é analisada",
      description: "O atendimento identifica o serviço mais adequado e os próximos passos.",
      icon: "user"
    },
    {
      title: "Documentos são organizados",
      description: "Você recebe orientação sobre quais informações precisa separar.",
      icon: "document"
    },
    {
      title: "Acompanhamento pelo WhatsApp",
      description: "O contato permanece claro durante o andamento do atendimento.",
      icon: "whatsapp"
    }
  ],
  proof: {
    enabled: false,
    rating: null,
    reviewCount: null,
    clientsServed: null,
    yearsExperience: null,
    sourceLabel: null
  },
  testimonials: {
    enabled: true,
    autoplay: true,
    items: [
      {
        name: "Cliente demonstrativo",
        text:
          "Este espaço receberá avaliações reais do despachante quando elas forem informadas na configuração.",
        rating: null,
        service: "Conteúdo demonstrativo",
        source: "Placeholder",
        sourceUrl: null,
        avatar: {
          src: "/assets/placeholders/avatar.svg",
          alt: "Avatar demonstrativo substituível",
          width: 96,
          height: 96
        },
        isPlaceholder: true
      },
      {
        name: "Avaliação a cadastrar",
        text:
          "Use apenas depoimentos reais, com origem clara, ou mantenha este bloco marcado como demonstrativo.",
        rating: null,
        service: "Conteúdo demonstrativo",
        source: "Placeholder",
        sourceUrl: null,
        avatar: {
          src: "/assets/placeholders/avatar.svg",
          alt: "Avatar demonstrativo substituível",
          width: 96,
          height: 96
        },
        isPlaceholder: true
      }
    ]
  },
  digitalProduct: {
    enabled: false,
    eyebrow: "Conteúdo digital",
    headline: {
      before: "Material para consultar com mais",
      highlight: "clareza",
      after: "",
      variant: "glow"
    },
    subtitle: "Uma opção complementar para quem prefere estudar o assunto no próprio ritmo.",
    description: "Consulte os detalhes do conteúdo antes de seguir para o checkout.",
    cover: null,
    benefits: [],
    pricePrefix: null,
    price: null,
    paymentNote: null,
    ctaLabel: "Conhecer o material",
    checkoutUrl: null,
    disclaimer: null
  },
  whatsappGroup: {
    enabled: false,
    name: "Grupo de informações",
    eyebrow: "Comunidade no WhatsApp",
    headline: {
      before: "Receba conteúdo e avisos no",
      highlight: "grupo de informações",
      after: "",
      variant: "glow"
    },
    description:
      "Peça pelo WhatsApp o link para entrar no grupo e acompanhar os conteúdos compartilhados pelo especialista.",
    benefits: [
      { label: "Conteúdo informativo", icon: "document" },
      { label: "Avisos e atualizações", icon: "message" },
      { label: "Comunidade no WhatsApp", icon: "whatsapp" }
    ],
    ctaLabel: "Quero entrar no grupo",
    whatsappMessage: "Olá! Quero receber o link do grupo de informações.",
    logo: null
  },
  quickConsult: {
    enabled: false,
    eyebrow: "Consulta rápida",
    headline: {
      before: "Conte o seu caso e receba uma",
      highlight: "orientação inicial",
      after: "",
      variant: "glow"
    },
    description: "Envie as informações principais do seu caso diretamente para o WhatsApp.",
    identifierField: "vehicle",
    identifierLabel: "Placa ou identificação",
    identifierPlaceholder: "ABC1D23",
    stateLabel: "Estado",
    statePlaceholder: "Selecione seu estado",
    situationLabel: "Situação atual",
    situationPlaceholder: "Conte resumidamente em que etapa está e o que precisa resolver.",
    ctaLabel: "Enviar consulta pelo WhatsApp"
  },
  rollers: {
    authority: {
      enabled: true,
      speedSeconds: 28,
      direction: "left",
      items: [
        { label: "Orientação especializada", icon: "shield" },
        { label: "Atendimento pelo WhatsApp", icon: "whatsapp" },
        { label: "Sua Cidade e região", icon: "map" },
        { label: "Documentação sem complicação", icon: "check" },
        { label: "Processo acompanhado", icon: "clipboard" },
        { label: "Avaliações verificadas", icon: "star", requiresProof: true }
      ]
    },
    transition: {
      enabled: true,
      speedSeconds: 34,
      direction: "right",
      items: [
        { label: "Atendimento claro", icon: "message" },
        { label: "Segurança documental", icon: "lock" },
        { label: "Suporte direto", icon: "whatsapp" },
        { label: "Próximo passo organizado", icon: "route" }
      ]
    }
  },
  theme: {
    preset: "clean-blue",
    pageBackground: "#031426",
    sectionDark: "#031426",
    sectionDeep: "#061d33",
    sectionMedium: "#0b3153",
    sectionSoft: "#dceeff",
    sectionLight: "#f2f8fd",
    primary: "#2e82c4",
    primaryStrong: "#124a78",
    primarySoft: "#79bdf0",
    primaryForeground: "#f2f8fd",
    secondary: "#092844",
    accent: "#66b9f2",
    background: "#031426",
    backgroundSoft: "#061d33",
    surface: "#092844",
    surfaceElevated: "#0b3153",
    commercialSurfaceBase: "#061525",
    commercialSurfacePanel: "rgba(9, 40, 68, 0.92)",
    commercialSurfaceElevated: "rgba(11, 49, 83, 0.94)",
    commercialSurfaceHighlight: "rgba(14, 58, 96, 0.96)",
    commercialSurfaceSolid: "#092844",
    goldPrimary: "#2e82c4",
    goldMuted: "#79bdf0",
    goldBorder: "rgba(121, 189, 240, 0.26)",
    goldForeground: "#f2f8fd",
    text: "#ffffff",
    textInverse: "#05223a",
    muted: "#b8cbe0",
    border: "rgba(220,238,255,0.16)",
    borderSoft: "rgba(9,40,68,0.14)",
    success: "#52df7e",
    whatsapp: "#25d366",
    glowRgb: "46, 130, 196",
    radiusSmall: "0.75rem",
    radiusMedium: "1.25rem",
    radiusLarge: "2rem",
    shadowCard: "0 20px 70px rgba(0, 0, 0, 0.28)",
    shadowGlow: "0 0 44px rgba(47, 139, 255, 0.35)"
  },
  typography: {
    headingPreset: "premium",
    bodyPreset: "system",
    labelPreset: "tracked",
    accentPreset: "signature"
  },
  copy: {
    preset: "despachante-veicular",
    heroEyebrow: "{{businessCategory}} em {{city}}",
    heroHeadline: {
      before: "Documentação do seu veículo",
      highlight: "sem complicação",
      after: "",
      variant: "gradient-sweep"
    },
    heroSubtitle:
      "Orientação para transferência, licenciamento e regularização em {{city}} e região.",
    heroProofs: [
      { label: "Atendimento pelo WhatsApp", icon: "whatsapp" },
      { label: "Orientação especializada", icon: "shield" },
      { label: "{{region}}", icon: "map" }
    ],
    heroPrimaryCta: "Falar no WhatsApp",
    heroSecondaryCta: "Ver serviços",
    primaryCta: "Falar no WhatsApp",
    specialistNavLabel: "Especialista",
    servicesHeadline: {
      before: "Serviços para deixar sua documentação",
      highlight: "mais clara",
      after: "",
      variant: "underline-reveal"
    },
    servicesSubtitle:
      "Escolha o serviço mais próximo da sua necessidade ou peça orientação para entender o melhor caminho.",
    specialistEyebrow: "Especialista",
    specialistHeadline: {
      before: "Atendimento que organiza sua documentação com",
      highlight: "clareza",
      after: "",
      variant: "glow"
    },
    benefitsEyebrow: "Por que escolher",
    benefitsHeadline: {
      before: "Diferenciais pensados para reduzir",
      highlight: "incertezas",
      after: "",
      variant: "gradient-sweep"
    },
    processEyebrow: "Como funciona",
    processHeadline: {
      before: "Simples, direto e",
      highlight: "acompanhado",
      after: "",
      variant: "underline-reveal"
    },
    testimonialsEyebrow: "Quem confia, recomenda",
    testimonialsHeadline: {
      before: "Depoimentos reais entram aqui com",
      highlight: "origem clara",
      after: "",
      variant: "none"
    },
    locationEyebrow: "Localização",
    locationHeadline: {
      before: "Atendimento em",
      highlight: "{{city}}",
      after: " e região",
      variant: "gradient-sweep"
    },
    finalEyebrow: "Próximo passo",
    finalHeadline: {
      before: "Pronto para resolver sua",
      highlight: "documentação?",
      after: "",
      variant: "gradient-sweep"
    },
    finalSubtitle:
      "Conte sua situação e receba uma orientação inicial pelo WhatsApp, sem promessas irreais e com próximos passos claros.",
    finalBenefits: [
      "Atendimento pelo WhatsApp",
      "Orientação sobre documentos",
      "Processo sem falsa garantia"
    ],
    footerDescription:
      "Landing demonstrativa para despachantes, pronta para receber dados reais por configuração."
  },
  layout: {
    heroVariant: "specialist-background",
    heroBackgroundPositionMobile: "62% top",
    heroBackgroundPositionDesktop: "center top",
    servicesVariant: "grid",
    servicesTone: "light",
    contentTone: "light",
    showBottomMobileCta: false,
    pageProgress: {
      enabled: false,
      sections: []
    }
  },
  animations: {
    enabled: true,
    revealOnce: true,
    highlightVariant: "gradient-sweep"
  },
  preloader: {
    enabled: true,
    variant: "curtain",
    duration: 1050,
    showOncePerSession: false
  },
  chatbot: {
    enabled: true,
    title: "Tire suas dúvidas",
    greeting: "Olá! Posso ajudar você a identificar qual serviço precisa.",
    disclaimer:
      "As respostas são orientativas. A confirmação depende da análise do despachante e dos órgãos responsáveis.",
    position: "bottom-right",
    showAfterSeconds: 3,
    quickReplies: [
      {
        id: "compra-venda",
        label: "Comprei ou vendi um veículo",
        icon: "transfer",
        response:
          "Você provavelmente precisa verificar transferência de propriedade ou comunicação de venda. Para confirmar os documentos, fale com o especialista.",
        relatedServiceId: "transferencia",
        whatsappMessage: "Quero orientação porque comprei ou vendi um veículo."
      },
      {
        id: "regularizar",
        label: "Preciso regularizar documentos",
        icon: "shield",
        response:
          "O caminho pode envolver análise de pendências, documentos e situação do veículo. O ideal é enviar o contexto para orientação inicial.",
        relatedServiceId: "regularizacao",
        whatsappMessage: "Quero orientação para regularizar documentos."
      },
      {
        id: "licenciamento",
        label: "Tenho dúvidas sobre licenciamento",
        icon: "document",
        response:
          "O licenciamento pode depender de pendências, calendário e dados do veículo. O especialista pode orientar os próximos passos.",
        relatedServiceId: "licenciamento",
        whatsappMessage: "Quero orientação sobre licenciamento."
      },
      {
        id: "perdi-documento",
        label: "Perdi um documento",
        icon: "clipboard",
        response:
          "Nesse caso, pode ser necessário avaliar segunda via ou atualização documental. Envie sua situação para receber orientação.",
        relatedServiceId: "segunda-via",
        whatsappMessage: "Quero orientação porque perdi um documento."
      },
      {
        id: "nao-sei",
        label: "Não sei qual serviço preciso",
        icon: "message",
        response:
          "Sem problema. Conte o que aconteceu e o atendimento ajuda a identificar o serviço mais adequado, sem promessa de resultado automático.",
        relatedServiceId: null,
        whatsappMessage: "Ainda não sei qual serviço preciso e quero orientação inicial."
      },
      {
        id: "whatsapp-direto",
        label: "Quero falar diretamente no WhatsApp",
        icon: "whatsapp",
        response:
          "Perfeito. Você pode continuar pelo WhatsApp com um resumo do que precisa resolver.",
        relatedServiceId: null,
        whatsappMessage: "Quero falar diretamente pelo WhatsApp."
      }
    ]
  },
  seo: {
    title: "Despachante Veicular | Documentação veicular sem complicação",
    description:
      "Demonstração de landing page configurável para despachantes veiculares, com atendimento pelo WhatsApp.",
    canonical: null,
    allowIndexing: false
  },
  tracking: {
    googleAnalyticsId: null,
    googleTagManagerId: null,
    metaPixelId: null
  }
};
