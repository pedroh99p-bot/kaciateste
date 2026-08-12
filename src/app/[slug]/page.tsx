import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createLocalBusinessJsonLd, createProspectMetadata } from "@/lib/seo";
import { getAllProspectSlugs, getProspectBySlug } from "@/prospects/registry";
import { createThemeStyle } from "@/themes/apply-theme";
import { CurtainPreloader } from "@/components/animations/CurtainPreloader";
import { FloatingActions } from "@/components/chatbot/FloatingActions";
import { BottomMobileCta } from "@/components/layout/BottomMobileCta";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageProgress } from "@/components/layout/PageProgress";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { AuthorityRoller } from "@/components/rollers/AuthorityRoller";
import { CrafRenewalSection } from "@/components/sections/CrafRenewalSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InclusionsSection } from "@/components/sections/InclusionsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { PackageComparisonSection } from "@/components/sections/PackageComparisonSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuickConsultSection } from "@/components/sections/QuickConsultSection";
import { ReportsSection } from "@/components/sections/ReportsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SpecialistSection } from "@/components/sections/SpecialistSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatsAppGroupSection } from "@/components/sections/WhatsAppGroupSection";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProspectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prospect = getProspectBySlug(slug);

  if (!prospect) {
    return {
      title: "Landing não encontrada",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  return createProspectMetadata(prospect);
}

export default async function ProspectPage({ params }: PageProps) {
  const { slug } = await params;
  const prospect = getProspectBySlug(slug);

  if (!prospect) {
    notFound();
  }

  const jsonLd = createLocalBusinessJsonLd(prospect);

  return (
    <div className="site-shell" style={createThemeStyle(prospect)}>
      <CurtainPreloader logo={prospect.assets.logo} preloader={prospect.preloader} />
      <Navbar prospect={prospect} />
      <PageProgress config={prospect.layout.pageProgress} />
      <AuthorityRoller items={prospect.visibleRollerItems} roller={prospect.rollers.authority} />
      <main>
        <HeroSection prospect={prospect} />
        <SectionDivider variant="curve" />
        <AuthorityRoller roller={prospect.rollers.transition} />
        <QuickConsultSection prospect={prospect} />
        <SpecialistSection prospect={prospect} />
        <SectionDivider variant="diagonal" />
        <ServicesSection prospect={prospect} />
        <PackagesSection prospect={prospect} />
        <PackageComparisonSection prospect={prospect} />
        <InclusionsSection prospect={prospect} />
        <CrafRenewalSection prospect={prospect} />
        <ReportsSection prospect={prospect} />
        <ProcessSection prospect={prospect} />
        <TestimonialsSection prospect={prospect} />
        <FaqSection prospect={prospect} />
        <WhatsAppGroupSection prospect={prospect} />
        <SectionDivider variant="glow-line" />
        <LocationSection prospect={prospect} />
        <SectionDivider variant="grid-fade" />
        <FinalCtaSection prospect={prospect} />
      </main>
      <Footer prospect={prospect} />
      <BottomMobileCta prospect={prospect} />
      <FloatingActions prospect={prospect} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
    </div>
  );
}
