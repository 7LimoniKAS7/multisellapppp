import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Listiq | Compliant marketplace listing manager",
    template: "%s | Listiq"
  },
  applicationName: "Listiq",
  description: siteConfig.description,
  openGraph: {
    title: "Listiq",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: "Listiq",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
