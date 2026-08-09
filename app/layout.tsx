import type { Metadata, Viewport } from "next";
import { restaurant } from "@/data/restaurant";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: restaurant.seo.title,
  description: restaurant.seo.description,
  keywords: restaurant.seo.keywords,
  openGraph: {
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    url: siteConfig.url,
    siteName: restaurant.name,
    images: [{ url: restaurant.hero.image }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    images: [restaurant.hero.image],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
