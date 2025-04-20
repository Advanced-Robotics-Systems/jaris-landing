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
import { getLocale, getTranslations } from "next-intl/server";

const SJARIS = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

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
