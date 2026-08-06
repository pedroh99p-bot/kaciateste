import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Barlow_Semi_Condensed,
  Inter,
  League_Spartan,
  Montserrat
} from "next/font/google";
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

export const metadata: Metadata = {
  title: "Fábrica de Landing Pages para Despachantes",
  description: "Base configurável para demonstrações de despachantes."
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
