"use client";
import { WhatsappWidget } from "@/components";
import { admissionHeroCarouselItems } from "@/data";
import {
  Footer,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
  AllCurriculums,
} from "@/sections";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Curriculum = () => {
  const locale = useLocale();
  const t = useTranslations("admissionPage");
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={admissionHeroCarouselItems} />
        <AllCurriculums t={t} locale={locale} />
      </main>
      <Footer />
    </>
  );
};

export default Curriculum;
