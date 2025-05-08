import {
  AboutExploreSchool,
  AboutFJaris,
  AboutSJaris,
  AboutTJaris,
  DiscoverJaris,
  Explore,
  Footer,
  Header,
  NavbarPlaceholder,
} from "@/sections";
import { useTranslations } from "next-intl";
import React from "react";

const School = () => {
  const t = useTranslations("aboutPage");
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
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

export default School;
