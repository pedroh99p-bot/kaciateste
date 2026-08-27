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
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
          "max-video-preview": -1
        }
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
      locale: "pt_BR",
      siteName: prospect.business.name,
      url: prospect.seo.canonical ?? `/${prospect.slug}`,
      images: [
        {
          url: prospect.assets.socialPreview,
          width: 1200,
          height: 630,
          type: "image/webp",
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
  const canonical = prospect.seo.canonical ?? undefined;
  const origin = canonical ? new URL(canonical).origin : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": canonical ? `${canonical}#business` : undefined,
    name: prospect.business.name,
    description: prospect.business.description,
    areaServed: prospect.location.region,
    address: {
      "@type": "PostalAddress",
      streetAddress: prospect.location.address,
      addressLocality: prospect.location.city,
      addressRegion: prospect.location.state,
      addressCountry: "BR"
    },
    telephone: prospect.contact.phoneLabel ?? prospect.contact.whatsappLabel,
    url: canonical,
    image: origin ? new URL(prospect.assets.socialPreview, origin).toString() : undefined,
    logo:
      origin && prospect.assets.logo.src
        ? new URL(prospect.assets.logo.src, origin).toString()
        : undefined,
    sameAs: [prospect.contact.instagramUrl].filter(Boolean)
  };
}
