"use client";
import { WhatsappWidget } from "@/components";
import { admissionHeroCarouselItems } from "@/data";
import {
  AdmissionFees,
  Explore,
  Footer,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
  SchoolAdmissionCTA,
  SJarisOverview,
} from "@/sections";
import { useLocale, useTranslations } from "next-intl";

const SJARIS = () => {
  const t = useTranslations("admissionPage");
  const locale = useLocale();
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={admissionHeroCarouselItems} />
        <SJarisOverview />
        <SchoolAdmissionCTA />
        <AdmissionFees t={t} locale={locale} />
        <Explore />
      </main>
      <Footer />
    </>
  );
};

export default SJARIS;
