import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "BUDVA QUAD ADVENTURES",
    template: "%s - BUDVA QUAD ADVENTURES",
  },
  description:
    "Unleash your adventurous spirit with Budva Quad Adventures! Explore breathtaking landscapes, rugged trails, and hidden gems of Montenegro on an unforgettable quad ride.",
  keywords: [
    "budva quad adventures",
    "atv budva tour",
    "budva tour",
    "quad ride",
    "montenegro",
    "landscapes",
    "rugged trails",
    "hidden gems",
    "budva quad",
    "budva",
    "rider",
    "drive",
    "drive quad",
    "atv",
    "rocks",
    "quad biking",
    "adventures",
    "tour budva",
    "self guided tour budva",
    "best tour budva",
    "day trips from budva",
    "budva to kotor",
    "things to do in budva",
    "budva walking tour",
    "quad tour budva",
    "quad tour budva reviews",
    "quad bike rental budva",
    "avis sur atv quad tour budva",
    "how to get to budva",
    "quad budva",
    "atv quad tour budva",
    "quad tour",
    "quad tour near me",
    "budva quad tour",
    "quad bike hire montenegro",
    "quad bike rental budva",
    "atv tour montenegro",
    "quad tour putter grip",
    "atv quad tour",
    "city quad tour",
    "jochen schweizer quad tour",
    "offroad quad tour",
    "quad tours near me",
    "quadeca tour",
    "quad bike tour",
    "quad bike tour near me",
    "quad city tour",
    "quad offroad tour",
    "ATV tour Montenegro",
    "kotor atv tour montenegro",
    "atv tour montenegro prices",
    "quad bike hire montenegro",
    "budva quad tour",
    "atv tour montenegro",
    "what is an atv tour",
    "atv tour guide jobs",
    "what to do in montenegro in may",
    "atv montenegro",
    "montenegro quad tour",
    "quad tour budva",
    "quad tour budva",
    "quad budva",
    "atv budva",
    "budva quad adventures",
    "budva quad adventures reviews",
    "budva quad adventures photos",
    "budva quad tour",
    "quad bike rental budva",
  ],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.budvaquad.me/",
    siteName: "ATV/Budva Quad Adventures",
    images: [
      {
        url: "https://www.budvaquad.me/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Budva Quad Adventures - Explore Montenegro",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
