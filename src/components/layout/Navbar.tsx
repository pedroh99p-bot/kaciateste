import type { IconName, ResolvedProspect } from "@/prospects/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { MobileMenu } from "./MobileMenu";

const navLinks: Array<{ href: string; label: string; icon: IconName }> = [
  { href: "#servicos", label: "Serviços", icon: "clipboard" },
  { href: "#especialista", label: "Especialista", icon: "user" },
  { href: "#como-funciona", label: "Como funciona", icon: "route" },
  { href: "#localizacao", label: "Localização", icon: "map" }
];

type NavbarProps = {
  prospect: ResolvedProspect;
};

export function Navbar({ prospect }: NavbarProps) {
  return (
    <header className="navbar navbar--menu-only">
      <a className="navbar__brand" href={`/${prospect.slug}`} aria-label={`Início - ${prospect.business.name}`}>
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
