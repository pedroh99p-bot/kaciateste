import type { MetadataRoute } from "next";
import { getIndexableProspects } from "@/prospects/registry";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const firstCanonical = getIndexableProspects()[0]?.seo.canonical;

  if (!firstCanonical) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    };
  }

  const origin = new URL(firstCanonical).origin;

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin
  };
}
