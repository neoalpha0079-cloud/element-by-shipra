import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { sanityFetch } from "@/sanity/lib";
import { siteSettingsQuery, navigationQuery } from "@/sanity/lib/queries";
import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Interior Design Studio`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — Interior Design Studio`,
    description: siteConfig.description,
    locale: "en_IN",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [siteSettings, navigation] = await Promise.all([
    sanityFetch<Record<string, unknown>>(siteSettingsQuery),
    sanityFetch<{ items?: Array<{ label: string; href: string }> }>(
      navigationQuery,
    ),
  ]);

  const settings = siteSettings as {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    brandStatement?: string;
    socialLinks?: { instagram?: string; facebook?: string; pinterest?: string };
  } | null;

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header siteSettings={settings ?? undefined} />
        {children}
        <Footer siteSettings={settings ?? undefined} />
      </body>
    </html>
  );
}
