import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { HighlightText } from "@/components/ui/HighlightText";
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
      <div className="specialist__card">
        <Reveal className="specialist__header">
          <p className="eyebrow">
            <Icon className="eyebrow__icon" name="shield" />
            <span>{prospect.copy.specialistEyebrow}</span>
          </p>
          <h2 className="specialist__headline">
            <HighlightText copy={prospect.copy.specialistHeadline} />
          </h2>
          <div className="specialist__identity">
            <h3>{prospect.specialist.name}</h3>
            <p>{prospect.specialist.role}</p>
            <span>
              <Icon name="map" />
              {prospect.specialist.city} — {prospect.specialist.state}
            </span>
          </div>
        </Reveal>
        <Reveal className="specialist__visual" delay={80} preset="image-reveal">
          {portrait?.src ? (
            <div className="specialist__device-frame">
              <div className="specialist__device-bar" aria-hidden="true" />
              <ImageWithFallback
                className="specialist__portrait"
                fallback={prospect.assets.symbol}
                image={portrait}
                sizes="(min-width: 940px) 38vw, 88vw"
              />
              <div className="specialist__photo-caption">
                <strong>{prospect.specialist.name}</strong>
                <span>{prospect.specialist.role}</span>
              </div>
            </div>
          ) : (
            <div
              aria-label={portrait?.alt ?? "Espaço reservado para foto do especialista"}
              className="specialist__photo-placeholder"
              role="img"
            >
              <span>{portrait?.alt ?? "SUA FOTO FICARIA AQUI"}</span>
            </div>
          )}
        </Reveal>
        <Reveal className="specialist__details" delay={160}>
          <p className="specialist__description">{prospect.specialist.description}</p>
          {prospect.specialist.credentials.length > 0 ? (
            <div className="specialist__credentials" aria-label="Credenciais profissionais">
              {prospect.specialist.credentials.map((credential) => (
                <Chip key={credential.label} icon={credential.icon} label={credential.label} />
              ))}
              {prospect.specialist.chips.map((chip) => (
                <Chip key={chip.label} icon={chip.icon} label={chip.label} />
              ))}
            </div>
          ) : null}
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
          <div className="specialist__actions">
            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              Falar com {specialistFirstName}
            </Button>
            {prospect.contact.instagramUrl ? (
              <Button href={prospect.contact.instagramUrl} icon="instagram" variant="secondary">
                Instagram
              </Button>
            ) : (
              <Button href="#inicio" icon="calendar" variant="secondary">
                Consulta rápida
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
