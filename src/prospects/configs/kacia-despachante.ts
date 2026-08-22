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
  alt: "Kacia Miranda, especialista em processos documentais relacionados a armas",
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

const googleIconAsset = {
  src: `${assetRoot}/google-icon.png`,
  alt: "Google",
  width: 320,
  height: 320,
  objectFit: "contain" as const,
  objectPosition: "center"
};

const manualCacCoverAsset = {
  src: `${assetRoot}/manual-cac-2026.png`,
  alt: "Capa do Manual do CAC 2026 para colecionadores, atiradores e caçadores",
  width: 319,
  height: 465,
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
    name: "Kacia Miranda",
    role: "Especialista em processos documentais relacionados à Polícia Federal",
    city: "Atendimento nacional",
    state: "Brasil",
    description:
      "Orienta e organiza processos documentais relacionados a CR, CRAF, CAC, Guia de Tráfego, posse e demandas perante a Polícia Federal.",
    signatureText: null,
    chips: [{ label: "Mais de 16 mil seguidores", icon: "instagram" }],
    credentials: [{ label: "Despachante", icon: "clipboard" }]
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
      "Olá, Kacia! Vim pelo site e gostaria de receber orientação sobre o meu caso."
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
    socialPreview: `${assetRoot}/whatsapp-preview.webp`,
    backgroundTexture: `${assetRoot}/hero-background.webp`,
    testimonialAvatars: [googleIconAsset],
    mapFallback: {
      ...logoAsset,
      alt: "Escritório da Kacia Despachante na Barra da Tijuca"
    }
  },
  services: [
    {
      id: "cr-cac",
      title: "CR / CAC",
      shortDescription:
        "Assessoria documental para processos relacionados ao Certificado de Registro e às categorias aplicáveis.",
      icon: "badge-check",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero entender como funciona a assessoria para CR e CAC."
    },
    {
      id: "craf",
      title: "CRAF",
      shortDescription:
        "Organização documental para emissão ou atualização do Certificado de Registro de Arma de Fogo.",
      icon: "document",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero orientação sobre um processo relacionado ao CRAF."
    },
    {
      id: "guia-de-trafego",
      title: "Guia de Tráfego",
      shortDescription:
        "Orientação sobre documentos e etapas aplicáveis aos processos de Guia de Tráfego.",
      icon: "route",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero orientação sobre Guia de Tráfego."
    },
    {
      id: "renovacao",
      title: "Renovação",
      shortDescription:
        "Assessoria para organizar a documentação de renovação de CR ou CRAF conforme o caso.",
      icon: "calendar",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero orientação sobre renovação de CR ou CRAF."
    },
    {
      id: "posse-de-arma",
      title: "Posse de arma",
      shortDescription:
        "Orientação e organização documental para demandas relacionadas à posse de arma.",
      icon: "shield",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero solicitar uma análise sobre posse de arma."
    },
    {
      id: "porte-federal",
      title: "Porte Federal",
      shortDescription:
        "Orientação documental inicial sobre processos de porte nas hipóteses aplicáveis.",
      icon: "lock",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero entender se a assessoria para Porte Federal se aplica ao meu caso."
    },
    {
      id: "aquisicao",
      title: "Compra / aquisição",
      shortDescription:
        "Organização documental relacionada às etapas aplicáveis ao pedido de aquisição.",
      icon: "clipboard",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero orientação sobre o processo documental de aquisição."
    },
    {
      id: "regularizacao-documental",
      title: "Regularização documental",
      shortDescription:
        "Análise do contexto e direcionamento sobre documentos que podem precisar de adequação.",
      icon: "check",
      enabled: true,
      ctaLabel: "FALAR COM KACIA",
      whatsappMessage: "Quero orientação sobre regularização documental."
    }
  ],
  commercialFeatures: [
    {
      id: "emissao-cr",
      title: "Emissão do CR pela Polícia Federal",
      shortTitle: "Emissão do CR",
      description: "Orientação documental para o processo de emissão do Certificado de Registro.",
      icon: "document"
    },
    {
      id: "filiacao-entidade",
      title: "Orientação para filiação à entidade aplicável",
      shortTitle: "Orientação para filiação",
      description: "Direcionamento sobre a filiação aplicável ao processo, conforme o caso.",
      icon: "user"
    },
    {
      id: "laudos-certidoes",
      title: "Orientação para documentação, laudos e certidões",
      shortTitle: "Laudos e certidões",
      description: "Orientação sobre documentos, laudos e certidões que podem ser aplicáveis.",
      icon: "badge-check"
    },
    {
      id: "acompanhamento",
      title: "Suporte durante o processo",
      shortTitle: "Acompanhamento",
      description: "Suporte documental durante as etapas do atendimento.",
      icon: "message"
    },
    {
      id: "autorizacao-aquisicao",
      title: "Processo relacionado à autorização de aquisição",
      shortTitle: "Autorização de aquisição",
      description: "Organização documental relacionada à autorização de aquisição, quando aplicável.",
      icon: "clipboard"
    },
    {
      id: "craf",
      title: "Processo relacionado ao CRAF",
      shortTitle: "CRAF",
      description: "Orientação e organização documental para o processo relacionado ao CRAF.",
      icon: "document"
    },
    {
      id: "guia-trafego",
      title: "Processo relacionado à Guia de Tráfego",
      shortTitle: "Guia de Tráfego",
      description: "Orientação sobre documentos e etapas aplicáveis à Guia de Tráfego.",
      icon: "route"
    },
    {
      id: "gt-transporte-desmuniciada",
      title: "Autorização para transportar armas de fogo desmuniciadas",
      shortTitle: "Transporte de arma desmuniciada",
      description: "Orientação documental para solicitar a autorização de transporte aplicável ao CAC.",
      icon: "shield"
    },
    {
      id: "gt-treino-estande",
      title: "Deslocamento para treinamento ou estande de tiro",
      shortTitle: "Deslocamento para treinamento ou estande de tiro",
      description: "Guia destinada aos deslocamentos autorizados até o local de treinamento ou estande de tiro.",
      icon: "route"
    },
    {
      id: "gt-validade-cr",
      title: "Validade conforme a finalidade e as condições da GT",
      shortTitle: "Validade conforme a finalidade e as condições da GT",
      description: "A validade deve ser observada conforme a finalidade e as condições indicadas na Guia de Tráfego.",
      icon: "calendar"
    },
    {
      id: "orientacao-complementar",
      title: "Orientação complementar",
      shortTitle: "Orientação complementar",
      description: "Direcionamento sobre etapas complementares que podem integrar o processo.",
      icon: "shield"
    },
    {
      id: "renovacao-craf",
      title: "Assessoria para renovação de CRAF",
      shortTitle: "Renovação do CRAF",
      description: "Organização documental para iniciar o processo de renovação do CRAF.",
      icon: "calendar"
    },
    {
      id: "orientacao-documental",
      title: "Orientação documental",
      shortTitle: "Orientação documental",
      description: "Direcionamento inicial sobre documentos e próximos passos aplicáveis ao caso.",
      icon: "clipboard"
    },
    {
      id: "multiplos-crafs",
      title: "Opções para múltiplos CRAFs",
      shortTitle: "Múltiplos CRAFs",
      description: "Opções configuradas de atendimento para diferentes quantidades de CRAFs.",
      icon: "document"
    },
    {
      id: "posse-orientacao",
      title: "Orientação para demandas relacionadas à posse",
      shortTitle: "Orientação sobre posse",
      description: "Análise inicial e organização documental para demandas relacionadas à posse de arma.",
      icon: "shield"
    }
  ],
  packages: {
    enabled: true,
    eyebrow: "Investimento",
    headline: {
      before: "Escolha o seu",
      highlight: "pacote",
      after: "",
      variant: "glow"
    },
    subtitle: "Escolha o atendimento mais adequado ao seu momento.",
    disclaimer:
      "Valores e condições apresentados no briefing comercial. Confirme itens inclusos, taxas e condições no atendimento.",
    items: [
      {
        id: "cr-atirador",
        name: "CR Atirador Desportivo",
        shortName: "CR Atirador",
        eyebrow: null,
        badge: null,
        price: "R$ 2.000,00",
        installments: "18x de R$ 129,00",
        description: "Assessoria para o processo de emissão do CR.",
        featureIds: ["emissao-cr", "filiacao-entidade", "laudos-certidoes", "acompanhamento"],
        cardFeatureIds: ["emissao-cr", "laudos-certidoes", "acompanhamento"],
        ctaLabel: "QUERO ESTE",
        whatsappMessage:
          "Olá, Kacia. Vi no site o pacote CR Atirador Desportivo e gostaria de entender como funciona.",
        featured: false,
        enabled: true
      },
      {
        id: "cr-completo-arma",
        name: "CR Completo + Arma",
        shortName: "CR Completo + Arma",
        eyebrow: null,
        badge: "Mais procurado",
        price: "R$ 3.000,00",
        installments: "18x de R$ 190,00",
        description: "Assessoria documental que reúne etapas complementares do processo.",
        featureIds: [
          "emissao-cr",
          "filiacao-entidade",
          "laudos-certidoes",
          "acompanhamento",
          "autorizacao-aquisicao",
          "craf",
          "guia-trafego",
          "orientacao-complementar"
        ],
        cardFeatureIds: ["emissao-cr", "autorizacao-aquisicao", "craf", "guia-trafego"],
        ctaLabel: "QUERO ESTE PACOTE",
        whatsappMessage:
          "Olá, Kacia. Vi no site o pacote CR Completo + Arma e gostaria de entender como funciona.",
        featured: true,
        enabled: true
      },
      {
        id: "guia-trafego-gt",
        name: "Guia de Tráfego (GT)",
        shortName: "Guia de Tráfego",
        eyebrow: null,
        badge: null,
        price: null,
        installments: null,
        description: "Assessoria documental para solicitar a autorização de transporte no contexto CAC.",
        featureIds: ["gt-transporte-desmuniciada", "gt-treino-estande", "gt-validade-cr"],
        cardFeatureIds: ["gt-transporte-desmuniciada", "gt-treino-estande", "gt-validade-cr"],
        ctaLabel: "FALAR SOBRE A GT",
        whatsappMessage:
          "Olá, Kacia. Vi no site a opção de Guia de Tráfego (GT) e gostaria de receber orientação sobre a solicitação.",
        featured: false,
        enabled: true
      }
    ]
  },
  packageComparison: {
    enabled: true,
    eyebrow: "Diferenças principais",
    headline: {
      before: "Compare os",
      highlight: "pacotes",
      after: "",
      variant: "glow"
    },
    subtitle: "Entenda rapidamente as principais diferenças entre as duas opções de CR.",
    packageIds: ["cr-atirador", "cr-completo-arma"],
    featureIds: [
      "emissao-cr",
      "laudos-certidoes",
      "acompanhamento",
      "autorizacao-aquisicao",
      "craf",
      "guia-trafego"
    ]
  },
  inclusions: {
    enabled: true,
    eyebrow: "Detalhes do atendimento",
    headline: {
      before: "O que está",
      highlight: "incluso",
      after: "",
      variant: "glow"
    },
    subtitle: "Selecione um processo para conferir o escopo apresentado no site.",
    defaultTabId: "cr-atirador",
    tabs: [
      {
        id: "cr-atirador",
        label: "CR Atirador",
        shortLabel: "CR Atirador",
        description: "Assessoria para o processo de emissão do CR.",
        packageId: "cr-atirador",
        featureIds: []
      },
      {
        id: "cr-completo-arma",
        label: "CR Completo + Arma",
        shortLabel: "CR Completo",
        description: "Assessoria documental que reúne etapas complementares do processo.",
        packageId: "cr-completo-arma",
        featureIds: []
      },
      {
        id: "posse",
        label: "Posse",
        shortLabel: "Posse",
        description: "Orientação e organização documental para demandas relacionadas à posse de arma.",
        packageId: null,
        featureIds: ["posse-orientacao", "orientacao-documental", "laudos-certidoes", "acompanhamento"]
      },
      {
        id: "renovacao",
        label: "Renovação",
        shortLabel: "Renovação",
        description: "Assessoria para organizar o processo documental de renovação do CRAF.",
        packageId: null,
        featureIds: ["renovacao-craf", "orientacao-documental", "multiplos-crafs", "acompanhamento"]
      }
    ]
  },
  renewal: {
    enabled: true,
    eyebrow: "Renovação documental",
    headline: {
      before: "Renovação de",
      highlight: "CRAF",
      after: "",
      variant: "glow"
    },
    subtitle: "Entenda o que precisa ser organizado para renovar seu documento.",
    description:
      "Cada renovação deve considerar a situação do documento, os dados do titular e os requisitos aplicáveis ao processo.",
    prices: [],
    initialQuantity: null,
    benefits: [
      { label: "Análise inicial da situação documental", icon: "document" },
      { label: "Orientação sobre documentos e etapas", icon: "clipboard" },
      { label: "Acompanhamento durante o processo", icon: "message" }
    ],
    additionalLabel: null,
    disclaimer:
      "Prazos, exigências e taxas oficiais dependem da análise do caso e dos órgãos responsáveis.",
    ctaLabel: "ANALISAR MINHA RENOVAÇÃO",
    whatsappMessage:
      "Olá, Kacia. Quero falar sobre a renovação do meu CRAF e entender quais documentos e etapas se aplicam ao meu caso."
  },
  reports: {
    enabled: true,
    eyebrow: "Etapas complementares",
    headline: {
      before: "Laudos e etapas",
      highlight: "complementares",
      after: "",
      variant: "glow"
    },
    subtitle: "Orientação responsável sobre etapas que podem ser aplicáveis ao processo.",
    items: [
      {
        id: "laudo-psicologico",
        title: "Laudo psicológico",
        description:
          "Orientação sobre a etapa de avaliação psicológica, quando aplicável ao processo.",
        icon: "user",
        enabled: true
      },
      {
        id: "capacidade-tecnica",
        title: "Capacidade técnica",
        description:
          "Orientação para realização da etapa técnica conforme os requisitos aplicáveis.",
        icon: "badge-check",
        enabled: true
      }
    ]
  },
  faq: {
    enabled: true,
    eyebrow: "Dúvidas frequentes",
    headline: {
      before: "Comece com mais",
      highlight: "clareza",
      after: "",
      variant: "glow"
    },
    subtitle: "Respostas iniciais sobre o atendimento e os próximos passos.",
    items: [
      {
        id: "atendimento-brasil",
        question: "Você atende todo o Brasil?",
        answer:
          "Sim. O atendimento inicial e a orientação documental podem ser realizados pelo WhatsApp para clientes de diferentes regiões do Brasil.",
        enabled: true
      },
      {
        id: "qual-processo",
        question: "Como sei qual processo preciso?",
        answer:
          "Envie um resumo do seu caso pelo WhatsApp. A análise inicial ajuda a identificar qual assunto está mais próximo da sua necessidade.",
        enabled: true
      },
      {
        id: "itens-inclusos",
        question: "O que está incluso na assessoria?",
        answer:
          "Cada pacote apresenta seu escopo principal. Antes de contratar, confirme pelo WhatsApp os documentos, etapas e itens aplicáveis ao seu caso.",
        enabled: true
      },
      {
        id: "taxas-laudos",
        question: "Taxas e laudos estão incluídos?",
        answer:
          "Os valores de taxas, laudos e serviços de terceiros devem ser confirmados no atendimento antes da contratação.",
        enabled: true
      },
      {
        id: "prazo",
        question: "Quanto tempo o processo leva?",
        answer:
          "O prazo pode variar conforme os documentos, o tipo de processo e a análise da Polícia Federal. Não há promessa de prazo ou aprovação.",
        enabled: true
      },
      {
        id: "decisao-pf",
        question: "O resultado depende da Polícia Federal?",
        answer:
          "Sim. A assessoria é documental, e a decisão final depende da análise e dos procedimentos do órgão responsável.",
        enabled: true
      },
      {
        id: "como-comecar",
        question: "Como começo meu atendimento?",
        answer:
          "Clique em Falar com Kacia, envie um resumo da sua necessidade e aguarde a orientação sobre o próximo passo.",
        enabled: true
      }
    ]
  },
  benefits: [
    {
      title: "Especialização no segmento",
      description: "Atendimento concentrado em processos documentais relacionados a armas.",
      icon: "shield"
    },
    {
      title: "Orientação responsável",
      description: "Informações claras, sem prometer resultados que dependem dos órgãos responsáveis.",
      icon: "badge-check"
    },
    {
      title: "Contato direto",
      description: "Você apresenta seu caso pelo WhatsApp e recebe orientação para o próximo passo.",
      icon: "whatsapp"
    }
  ],
  process: [
    {
      title: "Você apresenta o caso",
      description: "Envie pelo WhatsApp um resumo da sua necessidade e das suas dúvidas.",
      icon: "message"
    },
    {
      title: "A situação é analisada",
      description: "O contexto inicial é conferido para identificar a orientação documental aplicável.",
      icon: "user"
    },
    {
      title: "Os documentos são organizados",
      description: "Você recebe direcionamento sobre informações, documentos e etapas.",
      icon: "document"
    },
    {
      title: "O atendimento continua",
      description: "Dúvidas e próximos passos são acompanhados pelo canal de atendimento.",
      icon: "whatsapp"
    }
  ],
  proof: {
    enabled: true,
    rating: 5,
    reviewCount: 93,
    clientsServed: null,
    yearsExperience: null,
    sourceLabel: "no Google",
    sourceLogo: googleIconAsset,
    starCount: 5
  },
  testimonials: {
    enabled: true,
    autoplay: true,
    items: [
      {
        name: "Matheus",
        text: "Ótima profissional, sem enrolação e um ótimo atendimento em todas as áreas!",
        rating: 5,
        service: "Avaliação de cliente",
        source: "Google",
        sourceUrl:
          "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s100121115990411396861!2s0x9971f91e84c12d:0xa045940f6b60d789",
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Adrielle Santana",
        text: "Trabalho impecável, super recomendo. A melhor do Rio de Janeiro.",
        rating: 5,
        service: "Avaliação de cliente",
        source: "Google",
        sourceUrl:
          "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s100767338557286887161!2s0x9971f91e84c12d:0xa045940f6b60d789",
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Andre Machado",
        text: "Profissionalismo e atenção aos detalhes foram a marca registrada do atendimento.",
        rating: 5,
        service: "Avaliação de cliente",
        source: "Google",
        sourceUrl:
          "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s107683572511176657226!2s0x9971f91e84c12d:0xa045940f6b60d789",
        avatar: null,
        isPlaceholder: false
      }
    ]
  },
  digitalProduct: {
    enabled: true,
    eyebrow: "Conteúdo digital",
    headline: {
      before: "Manual do",
      highlight: "CAC 2026",
      after: "",
      variant: "glow"
    },
    subtitle: "Guia digital para colecionadores, atiradores e caçadores consultarem no próprio ritmo.",
    description:
      "Um material organizado sobre legislação, documentação, registros, transporte e segurança no universo CAC.",
    cover: manualCacCoverAsset,
    benefits: [
      { label: "Edição 2026 organizada para consulta", icon: "document" },
      { label: "Principais temas reunidos em um só material", icon: "clipboard" },
      { label: "Leitura pelo celular, tablet ou computador", icon: "phone" },
      { label: "Compra e acesso pela plataforma Hotmart", icon: "lock" }
    ],
    pricePrefix: "por apenas",
    price: "R$ 29,90",
    paymentNote: "Parcele em até 4 vezes no checkout.",
    ctaLabel: "COMPRAR O MANUAL",
    checkoutUrl: "https://pay.hotmart.com/F105217496C?off=wyip12rm&hotfeature=51",
    disclaimer:
      "Material informativo. Regras e procedimentos podem mudar; consulte os órgãos responsáveis e busque orientação profissional para o seu caso."
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
    enabled: true,
    eyebrow: "Consulta rápida",
    headline: {
      before: "Conte o seu caso para receber uma",
      highlight: "orientação inicial",
      after: "",
      variant: "glow"
    },
    description:
      "Escolha o assunto, informe seu estado e resuma a situação atual. A mensagem chega organizada no WhatsApp da Kacia.",
    identifierField: "name",
    identifierLabel: "Nome",
    identifierPlaceholder: "Como podemos te chamar?",
    stateLabel: "Seu estado",
    statePlaceholder: "Selecione a UF",
    situationLabel: "Situação atual do processo",
    situationPlaceholder:
      "Ex.: ainda não iniciei, estou renovando, recebi uma exigência ou preciso organizar os documentos.",
    ctaLabel: "Enviar consulta organizada"
  },
  rollers: {
    authority: {
      enabled: true,
      speedSeconds: 32,
      direction: "left",
      items: [
        { label: "Processos documentais na Polícia Federal", icon: "shield" },
        { label: "Atendimento nacional", icon: "map" },
        { label: "Mais de 16 mil seguidores", icon: "instagram" },
        { label: "5,0 no Google", icon: "star", requiresProof: true },
        { label: "93 avaliações", icon: "message", requiresProof: true }
      ]
    },
    transition: {
      enabled: true,
      speedSeconds: 36,
      direction: "right",
      items: [
        { label: "CR e CAC", icon: "badge-check" },
        { label: "CRAF e Guia de Tráfego", icon: "document" },
        { label: "Renovação documental", icon: "calendar" },
        { label: "Laudos e etapas complementares", icon: "clipboard" }
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
    commercialSurfaceBase: "#050504",
    commercialSurfacePanel: "rgba(17, 16, 12, 0.94)",
    commercialSurfaceElevated: "rgba(25, 22, 14, 0.95)",
    commercialSurfaceHighlight: "rgba(30, 25, 12, 0.97)",
    commercialSurfaceSolid: "#11100c",
    goldPrimary: "#e4b94c",
    goldMuted: "#caa85a",
    goldBorder: "rgba(228, 185, 76, 0.28)",
    goldForeground: "#080705",
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
    heroEyebrow: "CR pela Polícia Federal",
    heroHeadline: {
      before: "Quer ser CAC?",
      highlight: "Comece aqui.",
      after: "",
      variant: "glow"
    },
    heroSubtitle:
      "Assessoria especializada para conduzir seu processo documental junto à Polícia Federal com orientação em cada etapa.",
    heroProofs: [
      { label: "5,0 no Google", icon: "star", image: googleIconAsset, stars: 5 },
      { label: "Atendimento nacional", icon: "map" },
      { label: "Especialista em processos na PF", icon: "shield" },
      { label: "Atendimento pelo WhatsApp", icon: "whatsapp" }
    ],
    heroPrimaryCta: "FALAR COM KACIA AGORA",
    heroSecondaryCta: "VER INVESTIMENTO",
    primaryCta: "Falar com Kacia",
    specialistNavLabel: "Quem é Kacia",
    servicesHeadline: {
      before: "Assessoria para diferentes",
      highlight: "momentos do processo",
      after: "",
      variant: "glow"
    },
    servicesSubtitle:
      "Deslize, encontre o assunto mais próximo do seu caso e fale com Kacia.",
    specialistEyebrow: "Quem é Kacia",
    specialistHeadline: {
      before: "Mais que uma despachante.",
      highlight: "Experiência de quem conhece o processo.",
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
      before: "Atendimento reconhecido por quem já contou com a",
      highlight: "Kacia",
      after: "",
      variant: "glow"
    },
    locationEyebrow: "Onde fica o escritório",
    locationHeadline: {
      before: "Escritório no Rio,",
      highlight: "atendimento nacional",
      after: "",
      variant: "glow"
    },
    finalEyebrow: "Fale com Kacia",
    finalHeadline: {
      before: "Comece seu atendimento com",
      highlight: "orientação",
      after: "",
      variant: "glow"
    },
    finalSubtitle:
      "Envie um resumo da sua situação pelo WhatsApp e entenda o próximo passo documental.",
    finalBenefits: [
      "Atendimento em todo o Brasil",
      "Orientação documental responsável",
      "Contato direto pelo WhatsApp"
    ],
    footerDescription:
      "Assessoria documental para CR, CRAF, CAC, GT, posse, renovação e processos relacionados, com atendimento em todo o Brasil."
  },
  layout: {
    heroVariant: "specialist-background",
    heroBackgroundPositionMobile: "76% top",
    heroBackgroundPositionDesktop: "center top",
    servicesVariant: "carousel",
    servicesTone: "dark",
    contentTone: "dark",
    showBottomMobileCta: false,
    pageProgress: {
      enabled: true,
      sections: [
        { id: "inicio", label: "Início" },
        { id: "consulta", label: "Consulta" },
        { id: "especialista", label: "Especialista" },
        { id: "servicos", label: "Serviços" },
        { id: "pacotes", label: "Pacotes" },
        { id: "comparar-pacotes", label: "Comparação" },
        { id: "inclusoes", label: "Inclusões" },
        { id: "renovacao-craf", label: "Renovação" },
        { id: "laudos", label: "Etapas" },
        { id: "como-funciona", label: "Processo" },
        { id: "depoimentos", label: "Avaliações" },
        { id: "manual-cac", label: "Manual" },
        { id: "faq", label: "Dúvidas" },
        { id: "grupo-whatsapp", label: "Grupo" },
        { id: "localizacao", label: "Escritório" },
        { id: "contato", label: "Contato" }
      ]
    }
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
        id: "cr-cac",
        label: "Quero orientação sobre CR ou CAC",
        icon: "badge-check",
        response:
          "Envie um resumo da sua situação para identificar a orientação documental aplicável.",
        relatedServiceId: "cr-cac",
        whatsappMessage: "Quero orientação documental sobre CR ou CAC."
      },
      {
        id: "craf",
        label: "Minha dúvida é sobre CRAF",
        icon: "document",
        response:
          "O atendimento pode analisar se sua demanda envolve emissão, atualização ou renovação.",
        relatedServiceId: "craf",
        whatsappMessage: "Tenho uma dúvida sobre CRAF."
      },
      {
        id: "renovacao",
        label: "Preciso renovar documentos",
        icon: "calendar",
        response:
          "Envie a quantidade de documentos e um resumo do caso para receber a orientação inicial.",
        relatedServiceId: "renovacao",
        whatsappMessage: "Quero orientação sobre renovação documental."
      },
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
        id: "nao-sei",
        label: "Não sei qual processo preciso",
        icon: "message",
        response:
          "Sem problema. Envie um resumo do que precisa resolver para uma orientação inicial.",
        relatedServiceId: null,
        whatsappMessage: "Ainda não sei qual processo preciso e quero orientação inicial."
      },
      {
        id: "falar-kacia",
        label: "Quero falar com a Kacia",
        icon: "whatsapp",
        response: "Perfeito. Continue pelo WhatsApp e envie um resumo da sua situação.",
        relatedServiceId: null,
        whatsappMessage: "Quero falar com a Kacia e solicitar uma orientação inicial."
      }
    ]
  },
  seo: {
    title: "Kacia Despachante de Armas | CR, CAC, CRAF e Renovação",
    description:
      "Assessoria documental para CR, CAC, CRAF, Guia de Tráfego, renovação, posse e processos na Polícia Federal, com atendimento nacional.",
    canonical: "https://kaciateste.vercel.app/kacia-despachante",
    allowIndexing: false
  },
  tracking: {
    googleAnalyticsId: null,
    googleTagManagerId: null,
    metaPixelId: null
  }
} satisfies ProspectConfigInput;
