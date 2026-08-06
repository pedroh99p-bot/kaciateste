import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

type BottomMobileCtaProps = {
  prospect: ResolvedProspect;
};

export function BottomMobileCta({ prospect }: BottomMobileCtaProps) {
  if (!prospect.layout.showBottomMobileCta) {
    return null;
  }

  const href = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "cta-fixo-mobile"
  });

  return (
    <a className="bottom-mobile-cta" href={href}>
      <Icon name="whatsapp" />
      <span>Falar no WhatsApp</span>
    </a>
  );
}
