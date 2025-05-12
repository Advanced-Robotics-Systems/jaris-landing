"use client";

import { WhatsappWidget } from "@/components";
import { facilitiesHeroCarouselItems } from "@/data";
import {
  AllFacilities,
  CTASchools,
  FacilitiesOverview,
  Footer,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
} from "@/sections";
import { useTranslations } from "next-intl";

const Facilities = () => {
  const t = useTranslations("aboutPage.facilities");
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={facilitiesHeroCarouselItems} />
        <FacilitiesOverview t={t} />
        <AllFacilities t={t} />
        <CTASchools />
      </main>
      <Footer />
    </>
  );
};

export default Facilities;
