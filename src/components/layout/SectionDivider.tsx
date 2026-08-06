type SectionDividerProps = {
  variant: "curve" | "diagonal" | "glow-line" | "grid-fade" | "layered-gradient";
};

export function SectionDivider({ variant }: SectionDividerProps) {
  return (
    <div aria-hidden="true" className={`section-divider section-divider--${variant}`}>
      <span />
    </div>
  );
}
