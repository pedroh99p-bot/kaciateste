import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { StatCard } from "@/components/ui/StatCard";

type SpecialistSectionProps = {
  prospect: ResolvedProspect;
};

export function SpecialistSection({ prospect }: SpecialistSectionProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "especialista"
  });
  const portrait = prospect.assets.specialistPortrait;
  const specialistFirstName = prospect.specialist.name.split(" ")[0] || "especialista";

  return (
    <section className="section specialist" data-section-tone="deep" id="especialista">
      <Reveal className="specialist__card">
        <div className="specialist__header">
          <p className="eyebrow">
            <Icon className="eyebrow__icon" name="shield" />
            <span>{prospect.copy.specialistEyebrow}</span>
          </p>
          <div className="specialist__identity">
            <h2>{prospect.specialist.name}</h2>
            <p>{prospect.specialist.role}</p>
            <span>
              <Icon name="map" />
              {prospect.specialist.city} — {prospect.specialist.state}
            </span>
          </div>
        </div>
        <div className="specialist__visual">
          {portrait?.src ? (
            <ImageWithFallback
              className="specialist__portrait"
              fallback={prospect.assets.symbol}
              image={portrait}
            />
          ) : (
            <div
              aria-label={portrait?.alt ?? "Espaço reservado para foto do especialista"}
              className="specialist__photo-placeholder"
              role="img"
            >
              <span>{portrait?.alt ?? "SUA FOTO FICARIA AQUI"}</span>
            </div>
          )}
        </div>
        <div className="specialist__details">
          {prospect.canShowProof ? (
            <div className="specialist__stats">
              {prospect.proof.rating ? (
                <StatCard
                  decimals={1}
                  icon="star"
                  label={prospect.proof.sourceLabel ?? "avaliação"}
                  value={prospect.proof.rating}
                />
              ) : null}
              {prospect.proof.reviewCount ? (
                <StatCard icon="message" label="avaliações" value={prospect.proof.reviewCount} />
              ) : null}
              {prospect.proof.yearsExperience ? (
                <StatCard
                  icon="calendar"
                  label="anos de experiência"
                  suffix="+"
                  value={prospect.proof.yearsExperience}
                />
              ) : null}
              {prospect.proof.clientsServed ? (
                <StatCard
                  icon="user"
                  label="clientes atendidos"
                  suffix="+"
                  value={prospect.proof.clientsServed}
                />
              ) : null}
            </div>
          ) : null}
          <div className="specialist__chips">
            {prospect.specialist.chips.map((chip) => (
              <Chip key={chip.label} icon={chip.icon} label={chip.label} />
            ))}
          </div>
          <div className="specialist__actions">
            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              Falar com {specialistFirstName}
            </Button>
            {prospect.contact.instagramUrl ? (
              <Button href={prospect.contact.instagramUrl} icon="instagram" variant="secondary">
                Conhecer Instagram
              </Button>
            ) : (
              <Button href="#inicio" icon="calendar" variant="secondary">
                Consulta rápida
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
