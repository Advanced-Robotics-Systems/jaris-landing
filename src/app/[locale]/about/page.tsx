"use client";
import { WhatsappWidget } from "@/components";
import { aboutHeroCarouselItems } from "@/data";
import {
  AboutExploreSchool,
  AboutFJaris,
  AboutFounder,
  AboutMission,
  AboutSJaris,
  AboutTJaris,
  CoreValues,
  DiscoverJaris,
  Explore,
  Facilities,
  Footer,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
} from "@/sections";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
  title: "About Us | Jawahir Al Riyadh",
  description: "Learn more about Jawahir Al Riyadh International School",
  keywords: [
    "Jawahir Al Riyadh",
    "Jaris",
    "International School",
    "Riyadh",
    "Saudi Arabia",
  ],
  openGraph: {
    title: "About Us | Jawahir Al Riyadh",
    description: "Learn more about Jawahir Al Riyadh International School",
    url: "https://jawahirschool.com/about",
    siteName: "Jawahir Al Riyadh",
  },
};

const About = () => {
  const t = useTranslations("aboutPage");

  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={aboutHeroCarouselItems} />
        <AboutMission t={t} />
        <AboutFounder t={t} />
        <CoreValues t={t} />
        <Facilities t={t} />
        <AboutExploreSchool t={t} />
        <AboutFJaris t={t} />
        <AboutSJaris t={t} />
        <AboutTJaris t={t} />
        <Explore />
        <DiscoverJaris />
      </main>
      <Footer />
    </>
  );
};

export default About;
