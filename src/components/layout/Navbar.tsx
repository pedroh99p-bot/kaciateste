import type { IconName, ResolvedProspect } from "@/prospects/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { MobileMenu } from "./MobileMenu";

type NavbarProps = {
  prospect: ResolvedProspect;
};

export function Navbar({ prospect }: NavbarProps) {
  const homeHref = prospect.seo.canonical
    ? new URL(prospect.seo.canonical).pathname
    : `/${prospect.slug}`;
  const navLinks: Array<{ href: string; label: string; icon: IconName }> = [
    { href: "#consulta", label: "Consulta rápida", icon: "message" },
    { href: "#especialista", label: prospect.copy.specialistNavLabel, icon: "user" },
    { href: "#servicos", label: "Serviços", icon: "clipboard" },
    { href: "#pacotes", label: "Pacotes", icon: "star" },
    { href: "#faq", label: "Dúvidas", icon: "message" },
    { href: "#localizacao", label: "Localização", icon: "map" }
  ];

  return (
    <header className="navbar navbar--menu-only">
      <a className="navbar__brand" href={homeHref} aria-label={`Início - ${prospect.business.name}`}>
        <ImageWithFallback
          className="navbar__logo"
          fallback={prospect.assets.logo}
          image={prospect.assets.logoLight ?? prospect.assets.logo}
          loading="eager"
        />
      </a>
      <MobileMenu links={navLinks} prospect={prospect} />
    </header>
  );
}
