import { notFound } from "next/navigation";
import { ProspectLandingPage } from "@/components/pages/ProspectLandingPage";
import { getDefaultProspectSlug, getProspectBySlug } from "@/prospects/registry";

export default function HomePage() {
  const prospect = getProspectBySlug(getDefaultProspectSlug());

  if (!prospect) {
    notFound();
  }

  return <ProspectLandingPage prospect={prospect} />;
}
