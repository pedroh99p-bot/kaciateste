import type { ProspectConfigInput } from "../types";

const assetRoot = "/assets/kacia-despachante";

const logoAsset = {
  src: `${assetRoot}/main-logo.png`,
  alt: "Kacia Despachante de Armas",
  width: 1080,
  height: 1080,
  objectFit: "contain" as const,
  objectPosition: "center"
};

const specialistAsset = {
  src: `${assetRoot}/specialist.webp`,
  alt: "Kacia, especialista em posse, CAC e documentação",
  width: 1122,
  height: 1402,
  objectFit: "cover" as const,
  objectPosition: "center top"
};

const groupLogoAsset = {
  src: `${assetRoot}/group-logo.webp`,
  alt: "Logo do grupo Kacia Despachante Decreto 11.615",
  width: 1080,
  height: 1080,
  objectFit: "contain" as const,
  objectPosition: "center"
};

export const kaciaDespachanteProspect = {
  slug: "kacia-despachante",
  status: "active",
  business: {
    name: "Kacia Despachante de Armas",
    category: "Despachante de armas",
    description:
      "Assessoria documental para posse, CAC, CR, CRAF, Guia de Tráfego e processos junto à Polícia Federal, com atendimento em todo o Brasil.",
    legalNotice:
      "A orientação é documental. Requisitos, prazos e decisões dependem da análise e dos procedimentos dos órgãos responsáveis."
  },
  specialist: {
    name: "Kacia Despachante",
    role: "Especialista em posse, CAC e documentação",
    city: "Atendimento nacional",
    state: "Brasil",
    description:
      "Atendimento especializado para organizar documentos, esclarecer etapas e orientar processos relacionados a posse, CAC, CR, CRAF, GT e Polícia Federal.",
    signatureText: null,
    chips: [
      { label: "Especialista em Posse e CAC", icon: "shield" },
      { label: "Atendimento em todo o Brasil", icon: "map" },
      { label: "Mais de 16 mil seguidores", icon: "instagram" }
    ]
  },
  contact: {
    whatsapp: "5521981554881",
    whatsappLabel: "(21) 98155-4881",
    phone: "5521981554881",
    phoneLabel: "(21) 98155-4881",
    email: null,
    instagram: "@kaciadespachante",
    instagramUrl: "https://www.instagram.com/kaciadespachante/",
    defaultMessage:
      "Olá, Kacia! Vim pelo site e gostaria de solicitar uma análise inicial do meu caso."
  },
  location: {
    city: "Rio de Janeiro",
    state: "RJ",
    address:
      "Av. Ayrton Senna, 2500 - Ofice 3 - Condomínio Neolink - Barra da Tijuca, 22775-003",
    region: "Todo o Brasil",
    hours: ["Consulte a disponibilidade pelo WhatsApp"],
    routeUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Ayrton%20Senna%2C%202500%20-%20Ofice%203%20-%20Condom%C3%ADnio%20Neolink%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-003",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Av.%20Ayrton%20Senna%2C%202500%20-%20Ofice%203%20-%20Condom%C3%ADnio%20Neolink%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-003&output=embed"
  },
  assets: {
    logo: logoAsset,
    logoLight: logoAsset,
    logoDark: logoAsset,
    symbol: logoAsset,
    favicon: `${assetRoot}/main-logo.png`,
    heroSpecialist: specialistAsset,
    specialistPortrait: specialistAsset,
    specialistSignature: null,
    socialPreview:
      "https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785977432/ChatGPT_Image_Aug_5_2026_09_45_21_PM_4_rzt9yl.webp",
    backgroundTexture: `${assetRoot}/hero-background.webp`,
    testimonialAvatars: [],
    mapFallback: {
      ...logoAsset,
      alt: "Escritório da Kacia Despachante na Barra da Tijuca"
    }
  },
  services: [
    {
      id: "posse-de-arma",
      title: "Posse de arma",
      shortDescription:
        "Orientação e organização documental para demandas relacionadas à posse de arma.",
      icon: "shield",
      enabled: true,
      whatsappMessage: "Quero solicitar uma análise sobre posse de arma."
    },
    {
      id: "cac",
      title: "Assessoria para CAC",
      shortDescription:
        "Orientação documental para demandas de Colecionador, Atirador Desportivo e Caçador.",
      icon: "badge-check",
      enabled: true,
      whatsappMessage: "Quero orientação documental sobre CAC."
    },
    {
      id: "cr",
      title: "Certificado de Registro — CR",
      shortDescription:
        "Análise e orientação documental em processos relacionados ao Certificado de Registro.",
      icon: "clipboard",
      enabled: true,
      whatsappMessage: "Quero orientação sobre Certificado de Registro (CR)."
    },
    {
      id: "craf",
      title: "Registro de Arma — CRAF",
      shortDescription:
        "Organização documental para processos relacionados ao Certificado de Registro de Arma de Fogo.",
      icon: "document",
      enabled: true,
      whatsappMessage: "Quero orientação sobre CRAF."
    },
    {
      id: "guia-de-trafego",
      title: "Guia de Tráfego — GT",
      shortDescription:
        "Orientação sobre documentos e etapas aplicáveis aos processos de Guia de Tráfego.",
      icon: "route",
      enabled: true,
      whatsappMessage: "Quero orientação sobre Guia de Tráfego (GT)."
    },
    {
      id: "processos-pf",
      title: "Processos na Polícia Federal",
      shortDescription:
        "Assessoria documental para demandas relacionadas aos serviços de armas da Polícia Federal.",
      icon: "lock",
      enabled: true,
      whatsappMessage: "Quero orientação sobre um processo na Polícia Federal."
    },
    {
      id: "analise-documental",
      title: "Análise documental do caso",
      shortDescription:
        "Conferência inicial do contexto para identificar documentos e próximos passos possíveis.",
      icon: "message",
      enabled: true,
      whatsappMessage: "Quero solicitar uma análise documental inicial do meu caso."
    }
  ],
  benefits: [
    {
      title: "Especialização no segmento",
      description:
        "Atendimento concentrado em posse, CAC e documentação relacionada a armas.",
      icon: "shield"
    },
    {
      title: "Orientação responsável",
      description:
        "Informações claras, sem prometer resultados que dependem dos órgãos responsáveis.",
      icon: "badge-check"
    },
    {
      title: "Atendimento nacional",
      description:
        "Contato on-line pelo WhatsApp para clientes de diferentes regiões do Brasil.",
      icon: "map"
    },
    {
      title: "Documentação organizada",
      description:
        "Apoio para entender os documentos e as etapas aplicáveis a cada situação.",
      icon: "clipboard"
    },
    {
      title: "Contato direto",
      description:
        "Você apresenta seu caso pelo WhatsApp e recebe orientação para o próximo passo.",
      icon: "whatsapp"
    }
  ],
  process: [
    {
      title: "Você apresenta o caso",
      description:
        "Envie pelo WhatsApp um resumo da sua necessidade e das dúvidas que precisa esclarecer.",
      icon: "message"
    },
    {
      title: "A situação é analisada",
      description:
        "O contexto inicial é conferido para identificar o tipo de orientação documental aplicável.",
      icon: "user"
    },
    {
      title: "Os documentos são organizados",
      description:
        "Você recebe direcionamento sobre informações, documentos e etapas do processo.",
      icon: "document"
    },
    {
      title: "O atendimento continua",
      description:
        "As dúvidas e os próximos passos são acompanhados pelo canal de atendimento.",
      icon: "whatsapp"
    }
  ],
  proof: {
    enabled: true,
    rating: 5,
    reviewCount: 93,
    clientsServed: null,
    yearsExperience: null,
    sourceLabel: "avaliação no Google"
  },
  testimonials: {
    enabled: false,
    autoplay: false,
    items: []
  },
  whatsappGroup: {
    enabled: true,
    name: "Kacia despachante/ decreto 11.615 🇧🇷",
    eyebrow: "Grupo de informações",
    headline: {
      before: "Informação responsável para quem acompanha o",
      highlight: "Decreto 11.615",
      after: "",
      variant: "glow"
    },
    description:
      "Peça para entrar no grupo da Kacia no WhatsApp e acompanhe conteúdos, avisos e informações sobre documentação, CAC e processos relacionados.",
    benefits: [
      { label: "Conteúdo informativo", icon: "document" },
      { label: "Avisos e atualizações", icon: "message" },
      { label: "Comunidade no WhatsApp", icon: "whatsapp" }
    ],
    ctaLabel: "Quero entrar no grupo",
    whatsappMessage:
      "Olá, Kacia! Quero receber o link do grupo Kacia despachante/ decreto 11.615 🇧🇷.",
    logo: groupLogoAsset
  },
  quickConsult: {
    identifierField: "name",
    identifierLabel: "Nome",
    identifierPlaceholder: "Seu nome"
  },
  rollers: {
    authority: {
      enabled: true,
      speedSeconds: 30,
      direction: "left",
      items: [
        { label: "Especialista em Posse e CAC", icon: "shield" },
        { label: "CR • CRAF • GT", icon: "document" },
        { label: "Processos na Polícia Federal", icon: "lock" },
        { label: "Atendimento em todo o Brasil", icon: "map" },
        { label: "Mais de 16 mil seguidores", icon: "instagram" },
        { label: "5,0 no Google", icon: "star", requiresProof: true },
        { label: "93 avaliações", icon: "message", requiresProof: true }
      ]
    },
    transition: {
      enabled: true,
      speedSeconds: 34,
      direction: "right",
      items: [
        { label: "Orientação documental", icon: "clipboard" },
        { label: "Atendimento pelo WhatsApp", icon: "whatsapp" },
        { label: "Informação responsável", icon: "badge-check" },
        { label: "Análise do seu caso", icon: "message" }
      ]
    }
  },
  theme: {
    preset: "black-copper",
    pageBackground: "#020202",
    sectionDark: "#030303",
    sectionDeep: "#080704",
    sectionMedium: "#11100a",
    sectionSoft: "#0d0c08",
    sectionLight: "#15120a",
    primary: "#f2bc18",
    primaryStrong: "#b77d05",
    primarySoft: "#ffe27a",
    primaryForeground: "#090806",
    secondary: "#17140a",
    accent: "#ffd24a",
    background: "#020202",
    backgroundSoft: "#090805",
    surface: "#11100c",
    surfaceElevated: "#1a170e",
    text: "#fffdf6",
    textInverse: "#fffdf6",
    muted: "#c9c1ad",
    border: "rgba(255, 210, 74, 0.20)",
    borderSoft: "rgba(255, 210, 74, 0.16)",
    success: "#f2bc18",
    whatsapp: "#f2bc18",
    glowRgb: "242, 188, 24",
    radiusSmall: "0.6rem",
    radiusMedium: "1.05rem",
    radiusLarge: "1.75rem",
    shadowCard: "0 24px 76px rgba(0, 0, 0, 0.52)",
    shadowGlow: "0 0 48px rgba(242, 188, 24, 0.28)"
  },
  typography: {
    headingPreset: "premium",
    bodyPreset: "system",
    labelPreset: "montserrat",
    accentPreset: "display"
  },
  copy: {
    preset: "documental",
    heroEyebrow: "Posse • CAC • documentação em todo o Brasil",
    heroHeadline: {
      before: "CAC, CR, CRAF e GT",
      highlight: "com orientação",
      after: "em cada etapa",
      variant: "glow"
    },
    heroSubtitle:
      "Assessoria documental para posse, CAC e processos junto à Polícia Federal, com atendimento em todo o Brasil.",
    heroPrimaryCta: "Solicitar análise no WhatsApp",
    heroSecondaryCta: "Ver serviços",
    servicesHeadline: {
      before: "Assessoria documental para",
      highlight: "posse, CAC e PF",
      after: "",
      variant: "glow"
    },
    servicesSubtitle:
      "Deslize pelo carrossel, escolha o assunto mais próximo do seu caso e solicite uma análise inicial pelo WhatsApp.",
    specialistEyebrow: "Especialista",
    specialistHeadline: {
      before: "Atendimento especializado com",
      highlight: "alcance nacional",
      after: "",
      variant: "glow"
    },
    benefitsEyebrow: "Por que escolher",
    benefitsHeadline: {
      before: "Orientação documental com",
      highlight: "clareza",
      after: "",
      variant: "glow"
    },
    processEyebrow: "Como funciona",
    processHeadline: {
      before: "Do primeiro contato ao",
      highlight: "próximo passo",
      after: "",
      variant: "underline-reveal"
    },
    testimonialsEyebrow: "Avaliações",
    testimonialsHeadline: {
      before: "Experiência reconhecida por quem já buscou",
      highlight: "orientação",
      after: "",
      variant: "glow"
    },
    locationEyebrow: "Onde fica o escritório",
    locationHeadline: {
      before: "Escritório na Barra da Tijuca",
      highlight: "atendimento em todo o Brasil",
      after: "",
      variant: "glow"
    },
    finalEyebrow: "Análise inicial",
    finalHeadline: {
      before: "Conte seu caso e entenda o",
      highlight: "próximo passo",
      after: "",
      variant: "glow"
    },
    finalSubtitle:
      "Envie um resumo da sua situação pelo WhatsApp para receber uma orientação inicial sobre documentos e etapas possíveis.",
    finalBenefits: [
      "Atendimento em todo o Brasil",
      "Especialista em Posse e CAC",
      "CR, CRAF, GT e processos na PF"
    ],
    footerDescription:
      "Assessoria documental para posse, CAC, CR, CRAF, GT e processos relacionados, com atendimento em todo o Brasil."
  },
  layout: {
    heroVariant: "specialist-background",
    heroBackgroundPositionMobile: "76% top",
    heroBackgroundPositionDesktop: "center top",
    servicesVariant: "carousel",
    servicesTone: "dark",
    contentTone: "dark",
    showBottomMobileCta: false
  },
  animations: {
    enabled: true,
    revealOnce: true,
    highlightVariant: "glow"
  },
  preloader: {
    enabled: true,
    variant: "curtain",
    duration: 1350,
    showOncePerSession: false
  },
  chatbot: {
    enabled: true,
    title: "Orientação documental",
    greeting:
      "Olá! Posso ajudar você a identificar qual assunto está mais próximo do seu caso.",
    disclaimer:
      "As respostas são informativas. Requisitos e decisões dependem da análise do caso e dos órgãos responsáveis.",
    position: "bottom-right",
    showAfterSeconds: 3,
    quickReplies: [
      {
        id: "posse",
        label: "Tenho dúvidas sobre posse",
        icon: "shield",
        response:
          "A orientação começa pela análise do contexto e dos documentos relacionados ao seu caso.",
        relatedServiceId: "posse-de-arma",
        whatsappMessage: "Tenho dúvidas sobre posse de arma e quero solicitar uma análise."
      },
      {
        id: "cac",
        label: "Preciso de orientação sobre CAC",
        icon: "badge-check",
        response:
          "Envie um resumo da sua situação para identificar a orientação documental aplicável.",
        relatedServiceId: "cac",
        whatsappMessage: "Preciso de orientação documental sobre CAC."
      },
      {
        id: "cr-craf",
        label: "Minha dúvida é sobre CR ou CRAF",
        icon: "document",
        response:
          "CR e CRAF são documentos diferentes. O atendimento pode analisar qual deles está relacionado à sua demanda.",
        relatedServiceId: "craf",
        whatsappMessage: "Tenho uma dúvida sobre CR ou CRAF."
      },
      {
        id: "gt",
        label: "Preciso de orientação sobre GT",
        icon: "route",
        response:
          "O primeiro passo é entender a finalidade e a situação documental relacionada à Guia de Tráfego.",
        relatedServiceId: "guia-de-trafego",
        whatsappMessage: "Preciso de orientação sobre Guia de Tráfego."
      },
      {
        id: "pf",
        label: "Tenho um processo na Polícia Federal",
        icon: "lock",
        response:
          "Envie um resumo do processo e das dúvidas para uma análise documental inicial.",
        relatedServiceId: "processos-pf",
        whatsappMessage: "Tenho um processo relacionado à Polícia Federal e quero orientação."
      },
      {
        id: "falar-kacia",
        label: "Quero falar com a Kacia",
        icon: "whatsapp",
        response: "Perfeito. Continue pelo WhatsApp e envie um resumo da sua situação.",
        relatedServiceId: null,
        whatsappMessage: "Quero falar com a Kacia e solicitar uma análise inicial."
      }
    ]
  },
  seo: {
    title: "Kacia Despachante de Armas | Posse, CAC, CR, CRAF e GT",
    description:
      "Assessoria documental para posse, CAC, CR, CRAF, Guia de Tráfego e processos na Polícia Federal, com atendimento em todo o Brasil.",
    canonical: null,
    allowIndexing: false
  },
  tracking: {
    googleAnalyticsId: null,
    googleTagManagerId: null,
    metaPixelId: null
  }
} satisfies ProspectConfigInput;
