import { WhatsappWidget } from "@/components";
import { admissionHeroCarouselItems } from "@/data";
import {
  AdmissionFees,
  Explore,
  FJarisOverview,
  Footer,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
  SchoolAdmissionCTA,
} from "@/sections";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

const FJARIS = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={admissionHeroCarouselItems} />
        <FJarisOverview />
        <SchoolAdmissionCTA />
        <AdmissionFees t={t} locale={locale} />
        <Explore />
      </main>
      <Footer />
    </>
  );
};

export default FJARIS;
