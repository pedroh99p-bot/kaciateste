import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createProspectMetadata } from "@/lib/seo";
import { getAllProspectSlugs, getProspectBySlug } from "@/prospects/registry";
import { ProspectLandingPage } from "@/components/pages/ProspectLandingPage";

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

  return <ProspectLandingPage prospect={prospect} />;
}
