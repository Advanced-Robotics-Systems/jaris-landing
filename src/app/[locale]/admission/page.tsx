"use client";
import { WhatsappWidget } from "@/components";
import { admissionHeroCarouselItems } from "@/data";
import {
  AdmissionCTA,
  AdmissionFees,
  AdmissionMission,
  AdmissionProcedure,
  AdmissionProcedureKindergarten,
  AdmissionProcedureNotice,
  AdmissionProcedureSteps,
  DiscoverJaris,
  Explore,
  Footer,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
} from "@/sections";
import { useLocale, useTranslations } from "next-intl";

const Admission = () => {
  const locale = useLocale();
  const t = useTranslations("admissionPage");
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={admissionHeroCarouselItems} />
        <AdmissionProcedure t={t} locale={locale} />
        <AdmissionProcedureNotice t={t} />
        <AdmissionProcedureSteps t={t} locale={locale} />
        <AdmissionFees t={t} locale={locale} />
        <AdmissionMission t={t} />
        <AdmissionProcedureKindergarten t={t} />
        <AdmissionCTA t={t} />
        <Explore />
        <DiscoverJaris />
      </main>
      <Footer />
    </>
  );
};

export default Admission;
