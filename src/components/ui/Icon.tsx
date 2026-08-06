import type { IconName } from "@/prospects/types";

type IconProps = {
  name: IconName;
  className?: string;
  decorative?: boolean;
};

const paths: Record<IconName, JSX.Element> = {
  "arrow-right": <path d="M5 12h14m-6-6 6 6-6 6" />,
  "badge-check": (
    <>
      <path d="m9 12 2 2 4-5" />
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" />
    </>
  ),
  calendar: (
    <>
      <path d="M7 3v4M17 3v4M4 9h16" />
      <rect x="4" y="5" width="16" height="16" rx="3" />
    </>
  ),
  car: (
    <>
      <path d="M6 16h12M7 16l1-5 2-4h4l2 4 1 5" />
      <path d="M8 16v2M16 16v2M8.5 13h.01M15.5 13h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  clipboard: (
    <>
      <path d="M9 5h6M9 13h6M9 17h4" />
      <rect x="6" y="3" width="12" height="18" rx="2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </>
  ),
  document: (
    <>
      <path d="M14 3v5h5" />
      <path d="M6 3h8l5 5v13H6V3Z" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  map: (
    <>
      <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
      <path d="M9 3v15M15 6v15" />
    </>
  ),
  message: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H5l-2 2v-9a8 8 0 1 1 18-1Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  phone: (
    <path d="M6 4 4 6c0 8 6 14 14 14l2-2-4-4-2 2c-3-1-5-3-6-6l2-2-4-4Z" />
  ),
  route: (
    <>
      <path d="M4 19c4 0 4-4 8-4s4 4 8 4" />
      <path d="M6 7h9m-3-3 3 3-3 3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  spark: <path d="m13 2-2 8H4l6 4-2 8 6-5 6 5-2-8 6-4h-7l-4-8Z" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  transfer: (
    <>
      <path d="M7 7h11m-4-4 4 4-4 4" />
      <path d="M17 17H6m4 4-4-4 4-4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4-6 8-6s6.5 2 8 6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M5 20.5 6.2 17A8 8 0 1 1 9 19.2L5 20.5Z" />
      <path d="M9.5 8.7c.2 3 2 5.1 5 5.8l1.2-1.5-2-1-1 1c-1.1-.5-1.9-1.3-2.4-2.4l1-1-1-2-1.8 1.1Z" />
    </>
  )
};

export function Icon({ name, className, decorative = true }: IconProps) {
  return (
    <svg
      aria-hidden={decorative}
      className={className}
      fill="none"
      focusable="false"
      role={decorative ? undefined : "img"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
