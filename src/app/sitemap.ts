import type { MetadataRoute } from "next";
import { getIndexableProspects } from "@/prospects/registry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexableProspects().map((prospect) => {
    const canonical = prospect.seo.canonical!;
    const origin = new URL(canonical).origin;

    return {
      url: canonical,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [new URL(prospect.assets.socialPreview, origin).toString()]
    };
  });
}
