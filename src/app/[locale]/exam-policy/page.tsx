"use client";
import { WhatsappWidget } from "@/components";
import { examPolicyHeroCarouselItems } from "@/data";
import {
  CTASchools,
  CurriculumDistribution,
  ExamNotice,
  ExamPolicies,
  ExamPolicyOverview,
  ExamRules,
  Footer,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
} from "@/sections";
import { useTranslations } from "next-intl";
import React from "react";

const ExamPolicy = () => {
  const t = useTranslations("examPolicyPage");

  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={examPolicyHeroCarouselItems} />
        <ExamNotice />
        <ExamPolicyOverview />
        <ExamPolicies />
        <ExamRules />
        <CurriculumDistribution />
        <CTASchools />
      </main>
      <Footer />
    </>
  );
};

export default ExamPolicy;
