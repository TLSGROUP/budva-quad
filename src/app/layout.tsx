import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BUDVA QUAD ADVENTURES",
  description:
    "Unleash your adventurous spirit with Budva Quad Adventures! Explore breathtaking landscapes, rugged trails, and hidden gems of Montenegro on an unforgettable quad ride.",
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
