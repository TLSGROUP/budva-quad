import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default : "BUDVA QUAD ADVENTURES",
    template : "%s - BUDVA QUAD ADVENTURES"
  },
  description:
    "Unleash your adventurous spirit with Budva Quad Adventures! Explore breathtaking landscapes, rugged trails, and hidden gems of Montenegro on an unforgettable quad ride.",
  keywords: ["budva quad adventures", "quad ride", "montenegro", "landscapes", "rugged trails", "hidden gems", "budva quad", "budva", "rider", "drive", "drive quad", "avt", "rocks", 'quad biking', 'adventures', ],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.budvaquad.me/',
    siteName: 'Budva Quad Adventures',
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
