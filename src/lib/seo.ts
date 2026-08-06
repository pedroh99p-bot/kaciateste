import type { Metadata } from "next";
import type { ResolvedProspect } from "@/prospects/types";

export function createProspectMetadata(prospect: ResolvedProspect): Metadata {
  const canonicalOrigin = prospect.seo.canonical
    ? new URL(prospect.seo.canonical).origin
    : null;
  const metadataBase = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? canonicalOrigin ?? "http://localhost:3000"
  );
  const robots = prospect.canIndex
    ? {
        index: true,
        follow: true
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false
        }
      };

  return {
    metadataBase,
    title: prospect.seo.title,
    description: prospect.seo.description,
    alternates: prospect.seo.canonical ? { canonical: prospect.seo.canonical } : undefined,
    robots,
    icons: {
      icon: prospect.assets.favicon
    },
    openGraph: {
      title: prospect.seo.title,
      description: prospect.seo.description,
      type: "website",
      url: prospect.seo.canonical ?? `/${prospect.slug}`,
      images: [
        {
          url: prospect.assets.socialPreview,
          width: 1200,
          height: 630,
          alt: `${prospect.business.name} — prévia social`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: prospect.seo.title,
      description: prospect.seo.description,
      images: [prospect.assets.socialPreview]
    }
  };
}

export function createLocalBusinessJsonLd(prospect: ResolvedProspect) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: prospect.business.name,
    description: prospect.business.description,
    areaServed: prospect.location.region,
    address: prospect.location.address,
    telephone: prospect.contact.phoneLabel ?? prospect.contact.whatsappLabel,
    url: prospect.seo.canonical ?? undefined,
    sameAs: [prospect.contact.instagramUrl].filter(Boolean)
  };
}
