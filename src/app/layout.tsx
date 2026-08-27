import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Barlow_Semi_Condensed,
  Inter,
  League_Spartan,
  Montserrat
} from "next/font/google";
import { createProspectMetadata } from "@/lib/seo";
import { getDefaultProspectSlug, getProspectBySlug } from "@/prospects/registry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800", "900"]
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-semi-condensed",
  weight: ["600", "700", "800"]
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
  weight: ["700", "800", "900"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700"]
});

const defaultProspect = getProspectBySlug(getDefaultProspectSlug());
const prospectMetadata = defaultProspect
  ? createProspectMetadata(defaultProspect)
  : {
      title: "Serviços profissionais",
      description: "Atendimento profissional especializado."
    };

export const metadata: Metadata = {
  ...prospectMetadata,
  applicationName: defaultProspect?.business.name,
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable} ${leagueSpartan.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
