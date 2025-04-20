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
import { getTranslations } from "next-intl/server";

const Facilities = async () => {
  const t = await getTranslations("facilities");
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarousel t={t} carouselItems={facilitiesHeroCarouselItems} />
        <FacilitiesOverview />
        <AllFacilities />
        <CTASchools />
      </main>
      <Footer />
    </>
  );
};

export default Facilities;
