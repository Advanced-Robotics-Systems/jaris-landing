"use client";

import { LocaleSwitcher, WhatsappWidget } from "@/components";
import SplashScreen from "@/components/splash-screen/splash-screen";
import {
  Discover,
  Hero,
  JoinUs,
  // Mission,
  CTACommunity,
  Experience,
  Counts,
  CTASchools,
  HomeGallery,
  Explore,
  DiscoverJaris,
  Header,
  NavbarPlaceholder,
  Footer,
} from "@/sections";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 1000);
    }, 1000);

    return () => clearTimeout(splashTimer);
  }, []);

  const locale = useLocale();
  const t = useTranslations("homepage");

  return (
    <>
      {showContent ? (
        <>
          <Header />
          <NavbarPlaceholder />
          <WhatsappWidget />
          <LocaleSwitcher />
          <main className="">
            <Hero t={t} locale={locale} />
            <Discover t={t} locale={locale} />
            <JoinUs t={t} locale={locale} />
            {/* <Mission /> */}
            <CTACommunity t={t} />
            <Experience t={t} locale={locale} />
            <Counts t={t} locale={locale} />
            <CTASchools t={t} locale={locale} />
            <HomeGallery />
            <Explore />
            <DiscoverJaris />
          </main>
          <Footer />
        </>
      ) : (
        <SplashScreen isLoading={isLoading} />
      )}
    </>
  );
}
