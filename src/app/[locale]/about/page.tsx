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
import { getTranslations } from "next-intl/server";
import React from "react";

export const metadata: Metadata = {
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

const About = async () => {
  const t = await getTranslations("aboutPage");

  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={aboutHeroCarouselItems} />
        <AboutMission />
        <AboutFounder />
        <CoreValues />
        <Facilities />
        <AboutExploreSchool />
        <AboutFJaris />
        <AboutSJaris />
        <AboutTJaris />
        <Explore />
        <DiscoverJaris />
      </main>
      <Footer />
    </>
  );
};

export default About;
