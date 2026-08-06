import type { CSSProperties } from "react";
import type { ResolvedProspect } from "@/prospects/types";

type CSSVariableStyle = CSSProperties & Record<`--${string}`, string>;

const headingStacks = {
  institutional:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  premium:
    'Aptos Display, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  modern:
    'var(--font-barlow-condensed), Arial, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  local:
    'Trebuchet MS, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  spartan:
    'var(--font-league-spartan), "Archivo Black", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
};

const bodyStacks = {
  system:
    'var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  clean:
    'Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  humanist:
    'Verdana, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
};

const labelStacks = {
  tracked:
    'var(--font-barlow-semi-condensed), var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  compact:
    'var(--font-barlow-semi-condensed), Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  montserrat:
    'var(--font-montserrat), var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
};

const accentStacks = {
  none: "var(--font-heading)",
  signature: '"Segoe Script", "Brush Script MT", cursive',
  display: 'Georgia, "Times New Roman", serif'
};

export function createThemeStyle(prospect: ResolvedProspect): CSSVariableStyle {
  const { theme, typography } = prospect;

  return {
    "--color-page-background": theme.pageBackground,
    "--color-section-dark": theme.sectionDark,
    "--color-section-deep": theme.sectionDeep,
    "--color-section-medium": theme.sectionMedium,
    "--color-section-soft": theme.sectionSoft,
    "--color-section-light": theme.sectionLight,
    "--color-primary": theme.primary,
    "--color-primary-strong": theme.primaryStrong,
    "--color-primary-soft": theme.primarySoft,
    "--color-primary-foreground": theme.primaryForeground,
    "--color-secondary": theme.secondary,
    "--color-accent": theme.accent,
    "--color-background": theme.background,
    "--color-background-soft": theme.backgroundSoft,
    "--color-surface": theme.surface,
    "--color-surface-elevated": theme.surfaceElevated,
    "--color-text": theme.text,
    "--color-text-inverse": theme.textInverse,
    "--color-muted": theme.muted,
    "--color-border": theme.border,
    "--color-border-soft": theme.borderSoft,
    "--color-success": theme.success,
    "--color-whatsapp": theme.whatsapp,
    "--glow-rgb": theme.glowRgb,
    "--radius-small": theme.radiusSmall,
    "--radius-medium": theme.radiusMedium,
    "--radius-large": theme.radiusLarge,
    "--shadow-card": theme.shadowCard,
    "--shadow-glow": theme.shadowGlow,
    "--font-heading": headingStacks[typography.headingPreset],
    "--font-body": bodyStacks[typography.bodyPreset],
    "--font-label": labelStacks[typography.labelPreset],
    "--font-accent": accentStacks[typography.accentPreset]
  };
}
