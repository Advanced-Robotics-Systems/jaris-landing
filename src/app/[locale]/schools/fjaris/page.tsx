"use client";
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
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const FJARIS = () => {
  const t = useTranslations("admissionPage");
  const locale = useLocale();

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
