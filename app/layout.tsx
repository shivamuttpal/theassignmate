import type { Metadata } from "next";
import { BRAND } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: `${BRAND.fullName} — Tutoring, Project Mentoring & Viva Prep`,
  description:
    "1-on-1 tutoring, project mentoring, viva preparation and coding bootcamps for college students. Learn it, build it, own it.",
  openGraph: {
    title: `${BRAND.fullName} — Learn it. Build it. Own it.`,
    description: "Live tutoring, project mentoring and viva prep for college students.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
