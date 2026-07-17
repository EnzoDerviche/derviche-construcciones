import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seo, site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
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
    default: seo.title,
    template: `%s | ${site.brand}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.brand }],
  creator: site.brand,
  publisher: site.brand,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.brand,
    title: seo.title,
    description: seo.description,
    images: [{ url: "/logo.png", width: 1260, height: 264, alt: site.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  category: "construction",
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
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
