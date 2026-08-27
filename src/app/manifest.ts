import type { MetadataRoute } from "next";
import { getDefaultProspectSlug, getProspectBySlug } from "@/prospects/registry";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const prospect = getProspectBySlug(getDefaultProspectSlug());

  return {
    name: prospect?.business.name ?? "Serviços profissionais",
    short_name: prospect?.specialist.name ?? "Atendimento",
    description: prospect?.business.description,
    start_url: "/",
    display: "standalone",
    background_color: prospect?.theme.pageBackground ?? "#020202",
    theme_color: prospect?.theme.primary ?? "#f2bc18",
    icons: prospect
      ? [
          {
            src: prospect.assets.favicon,
            sizes: "any",
            type: "image/png"
          }
        ]
      : []
  };
}
