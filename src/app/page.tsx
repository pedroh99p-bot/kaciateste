import { redirect } from "next/navigation";
import { getDefaultProspectSlug } from "@/prospects/registry";

export default function HomePage() {
  redirect(`/${getDefaultProspectSlug()}`);
}
