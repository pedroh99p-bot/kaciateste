export type ProspectStatus = "draft" | "active" | "client" | "archived";

export type ThemePreset =
  | "navy-gold"
  | "navy-coral"
  | "dark-green"
  | "graphite-lime"
  | "clean-blue"
  | "black-copper";

export type HighlightVariant =
  | "none"
  | "glow"
  | "shimmer"
  | "gradient-sweep"
  | "underline-reveal";

export type AnimationPreset =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "line-grow"
  | "image-reveal";

export type IconName =
  | "arrow-right"
  | "badge-check"
  | "calendar"
  | "car"
  | "check"
  | "chevron-right"
  | "clipboard"
  | "clock"
  | "document"
  | "instagram"
  | "lock"
  | "map"
  | "message"
  | "minus"
  | "phone"
  | "route"
  | "shield"
  | "spark"
  | "star"
  | "transfer"
  | "user"
  | "whatsapp";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends object
      ? DeepPartial<T[P]>
      : T[P];
};

export type HighlightCopy = {
  before: string;
  highlight?: string;
  after?: string;
  variant?: HighlightVariant;
};

export type AssetImage = {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

export type ThemeConfig = {
  preset: ThemePreset;
  pageBackground: string;
  sectionDark: string;
  sectionDeep: string;
  sectionMedium: string;
  sectionSoft: string;
  sectionLight: string;
  primary: string;
  primaryStrong: string;
  primarySoft: string;
  primaryForeground: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundSoft: string;
  surface: string;
  surfaceElevated: string;
  commercialSurfaceBase: string;
  commercialSurfacePanel: string;
  commercialSurfaceElevated: string;
  commercialSurfaceHighlight: string;
  commercialSurfaceSolid: string;
  goldPrimary: string;
  goldMuted: string;
  goldBorder: string;
  goldForeground: string;
  text: string;
  textInverse: string;
  muted: string;
  border: string;
  borderSoft: string;
  success: string;
  whatsapp: string;
  glowRgb: string;
  radiusSmall: string;
  radiusMedium: string;
  radiusLarge: string;
  shadowCard: string;
  shadowGlow: string;
};

export type TypographyConfig = {
  headingPreset: "institutional" | "premium" | "modern" | "local" | "spartan";
  bodyPreset: "system" | "clean" | "humanist";
  labelPreset: "tracked" | "compact" | "montserrat";
  accentPreset: "none" | "signature" | "display";
};

export type BusinessConfig = {
  name: string;
  category: string;
  description: string;
  legalName?: string;
  legalNotice: string;
};

export type SpecialistConfig = {
  name: string;
  role: string;
  city: string;
  state: string;
  description: string;
  signatureText: string | null;
  chips: Array<{ label: string; icon: IconName }>;
  credentials: Array<{ label: string; icon: IconName }>;
};

export type ContactConfig = {
  whatsapp: string;
  whatsappLabel: string;
  phone: string | null;
  phoneLabel: string | null;
  email: string | null;
  instagram: string | null;
  instagramUrl: string | null;
  defaultMessage: string;
};

export type LocationConfig = {
  city: string;
  state: string;
  address: string;
  region: string;
  hours: string[];
  routeUrl: string | null;
  mapEmbedUrl: string | null;
};

export type AssetsConfig = {
  logo: AssetImage;
  logoLight: AssetImage | null;
  logoDark: AssetImage | null;
  symbol: AssetImage;
  favicon: string;
  heroSpecialist: AssetImage | null;
  specialistPortrait: AssetImage | null;
  specialistSignature: AssetImage | null;
  socialPreview: string;
  backgroundTexture: string | null;
  testimonialAvatars: AssetImage[];
  mapFallback: AssetImage;
};

export type ServiceConfig = {
  id: string;
  title: string;
  shortDescription: string;
  icon: IconName;
  enabled: boolean;
  ctaLabel: string;
  whatsappMessage: string;
};

export type CommercialFeatureConfig = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: IconName;
};

export type PackageConfig = {
  id: string;
  name: string;
  shortName: string;
  eyebrow: string | null;
  badge: string | null;
  price: string;
  installments: string | null;
  description: string;
  featureIds: string[];
  cardFeatureIds: string[];
  ctaLabel: string;
  whatsappMessage: string;
  featured: boolean;
  enabled: boolean;
};

export type PackagesConfig = {
  enabled: boolean;
  eyebrow: string;
  headline: HighlightCopy;
  subtitle: string;
  disclaimer: string | null;
  items: PackageConfig[];
};

export type PackageComparisonConfig = {
  enabled: boolean;
  eyebrow: string;
  headline: HighlightCopy;
  subtitle: string;
  packageIds: string[];
  featureIds: string[];
};

export type InclusionTabConfig = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  packageId: string | null;
  featureIds: string[];
};

export type InclusionsConfig = {
  enabled: boolean;
  eyebrow: string;
  headline: HighlightCopy;
  subtitle: string;
  defaultTabId: string | null;
  tabs: InclusionTabConfig[];
};

export type RenewalPriceConfig = {
  quantity: number;
  label: string;
  price: string;
};

export type RenewalConfig = {
  enabled: boolean;
  eyebrow: string;
  headline: HighlightCopy;
  subtitle: string;
  description: string;
  prices: RenewalPriceConfig[];
  initialQuantity: number | null;
  benefits: Array<{ label: string; icon: IconName }>;
  additionalLabel: string | null;
  disclaimer: string | null;
  ctaLabel: string;
  whatsappMessage: string;
};

export type ReportConfig = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  enabled: boolean;
};

export type ReportsConfig = {
  enabled: boolean;
  eyebrow: string;
  headline: HighlightCopy;
  subtitle: string;
  items: ReportConfig[];
};

export type FaqItemConfig = {
  id: string;
  question: string;
  answer: string;
  enabled: boolean;
};

export type FaqConfig = {
  enabled: boolean;
  eyebrow: string;
  headline: HighlightCopy;
  subtitle: string;
  items: FaqItemConfig[];
};

export type BenefitConfig = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProcessStepConfig = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProofConfig = {
  enabled: boolean;
  rating: number | null;
  reviewCount: number | null;
  clientsServed: number | null;
  yearsExperience: number | null;
  sourceLabel: string | null;
};

export type TestimonialConfig = {
  name: string;
  text: string;
  rating: number | null;
  service: string | null;
  source: string | null;
  sourceUrl: string | null;
  avatar: AssetImage | null;
  isPlaceholder: boolean;
};

export type TestimonialsConfig = {
  enabled: boolean;
  autoplay: boolean;
  items: TestimonialConfig[];
};

export type WhatsAppGroupConfig = {
  enabled: boolean;
  name: string;
  eyebrow: string;
  headline: HighlightCopy;
  description: string;
  benefits: Array<{ label: string; icon: IconName }>;
  ctaLabel: string;
  whatsappMessage: string;
  logo: AssetImage | null;
};

export type QuickConsultConfig = {
  identifierField: "vehicle" | "name";
  identifierLabel: string;
  identifierPlaceholder: string;
};

export type RollerConfig = {
  enabled: boolean;
  items: Array<{ label: string; icon: IconName; requiresProof?: boolean }>;
  speedSeconds: number;
  direction: "left" | "right";
};

export type CopyConfig = {
  preset: "despachante-veicular" | "documental";
  heroEyebrow: string;
  heroHeadline: HighlightCopy;
  heroSubtitle: string;
  heroProofs: Array<{ label: string; icon: IconName }>;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  primaryCta: string;
  specialistNavLabel: string;
  servicesHeadline: HighlightCopy;
  servicesSubtitle: string;
  specialistEyebrow: string;
  specialistHeadline: HighlightCopy;
  benefitsEyebrow: string;
  benefitsHeadline: HighlightCopy;
  processEyebrow: string;
  processHeadline: HighlightCopy;
  testimonialsEyebrow: string;
  testimonialsHeadline: HighlightCopy;
  locationEyebrow: string;
  locationHeadline: HighlightCopy;
  finalEyebrow: string;
  finalHeadline: HighlightCopy;
  finalSubtitle: string;
  finalBenefits: string[];
  footerDescription: string;
};

export type LayoutConfig = {
  heroVariant: "specialist-background" | "specialist-side" | "no-specialist";
  heroBackgroundPositionMobile: string;
  heroBackgroundPositionDesktop: string;
  servicesVariant: "grid" | "carousel";
  servicesTone: "light" | "dark";
  contentTone: "light" | "dark";
  showBottomMobileCta: boolean;
};

export type AnimationConfig = {
  enabled: boolean;
  revealOnce: boolean;
  highlightVariant: HighlightVariant;
};

export type PreloaderConfig = {
  enabled: boolean;
  variant: "curtain";
  duration: number;
  showOncePerSession: boolean;
};

export type ChatbotQuickReplyConfig = {
  id: string;
  label: string;
  icon: IconName;
  response: string;
  relatedServiceId: string | null;
  whatsappMessage: string;
  nextOptions?: string[];
};

export type ChatbotConfig = {
  enabled: boolean;
  title: string;
  greeting: string;
  disclaimer: string;
  position: "bottom-right";
  showAfterSeconds: number;
  quickReplies: ChatbotQuickReplyConfig[];
};

export type SeoConfig = {
  title: string;
  description: string;
  canonical: string | null;
  allowIndexing: boolean;
};

export type TrackingConfig = {
  googleAnalyticsId: string | null;
  googleTagManagerId: string | null;
  metaPixelId: string | null;
};

export type ProspectConfig = {
  slug: string;
  status: ProspectStatus;
  business: BusinessConfig;
  specialist: SpecialistConfig;
  contact: ContactConfig;
  location: LocationConfig;
  assets: AssetsConfig;
  services: ServiceConfig[];
  commercialFeatures: CommercialFeatureConfig[];
  packages: PackagesConfig;
  packageComparison: PackageComparisonConfig;
  inclusions: InclusionsConfig;
  renewal: RenewalConfig;
  reports: ReportsConfig;
  faq: FaqConfig;
  benefits: BenefitConfig[];
  process: ProcessStepConfig[];
  proof: ProofConfig;
  testimonials: TestimonialsConfig;
  whatsappGroup: WhatsAppGroupConfig;
  quickConsult: QuickConsultConfig;
  rollers: {
    authority: RollerConfig;
    transition: RollerConfig;
  };
  theme: ThemeConfig;
  typography: TypographyConfig;
  copy: CopyConfig;
  layout: LayoutConfig;
  animations: AnimationConfig;
  preloader: PreloaderConfig;
  chatbot: ChatbotConfig;
  seo: SeoConfig;
  tracking: TrackingConfig;
};

export type ProspectConfigInput = DeepPartial<ProspectConfig> & {
  slug: string;
  business: Pick<BusinessConfig, "name"> & Partial<BusinessConfig>;
};

export type ResolvedProspect = ProspectConfig & {
  enabledServices: ServiceConfig[];
  commercialFeatureMap: Record<string, CommercialFeatureConfig>;
  enabledPackages: PackageConfig[];
  canShowPackageComparison: boolean;
  enabledInclusionTabs: InclusionTabConfig[];
  canShowInclusions: boolean;
  enabledReports: ReportConfig[];
  enabledFaqItems: FaqItemConfig[];
  visibleRollerItems: RollerConfig["items"];
  canShowProof: boolean;
  canIndex: boolean;
};
