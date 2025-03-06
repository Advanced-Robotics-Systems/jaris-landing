import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

// next-intl imports
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// const helveticaNeue = localFont({
//   src: "./fonts/HelveticaNeueW23.woff",
//   variable: "--font-helvetica-neue",
//   weight: "100 900",
// });

const notoSansArabic = localFont({
  src: "./fonts/NotoSansArabic-VariableFont_wdth,wght.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jawahir Al-Riyadh International School",
  description: "Welcome to Jawahir Al-Riyadh International School",
  keywords: [
    "Jawahir Al-Riyadh",
    "International School",
    "Riyadh",
    "Saudi Arabia",
  ],
  openGraph: {
    title: "Jawahir Al-Riyadh International School",
    description: "Welcome to Jawahir Al-Riyadh International School",
    url: "https://jawahirschool.com",
    siteName: "Jawahir Al-Riyadh",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${helveticaNeue.variable} antialiased`}>
//         <NextUIProvider>{children}</NextUIProvider>
//       </body>
//     </html>
//   );
// }

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body
        className={`${
          locale === "ar" ? notoSansArabic.className : ""
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>{children}</NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
