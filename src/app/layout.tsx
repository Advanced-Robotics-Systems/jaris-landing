import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeueW23.woff",
  variable: "--font-helvetica-neue",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable} antialiased`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
