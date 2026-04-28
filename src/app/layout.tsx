import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { createPageMetadata, defaultDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Sai Nitish Bimari | AI Product Engineer",
    description: defaultDescription,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: "Sai Nitish Bimari", url: siteUrl }],
  creator: "Sai Nitish Bimari",
  publisher: "Sai Nitish Bimari",
  category: "Portfolio",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
