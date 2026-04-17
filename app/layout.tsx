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
    default: "MultiSell | Compliant marketplace listing manager",
    template: "%s | MultiSell"
  },
  applicationName: "MultiSell",
  description: siteConfig.description,
  openGraph: {
    title: "MultiSell",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: "MultiSell",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
