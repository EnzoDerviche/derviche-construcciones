import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — Construcción y mantenimiento integral`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "construcción Berazategui",
    "mantenimiento integral",
    "electricista Zona Sur",
    "plomería",
    "pintura",
    "durlock",
    "membrana",
    "albañilería",
    "instalación de aire acondicionado",
    "instalador matriculado aire acondicionado",
    "reformas CABA",
  ],
  authors: [{ name: site.brand }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — Construcción y mantenimiento integral`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — Construcción y mantenimiento integral`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
