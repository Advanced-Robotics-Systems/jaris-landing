import { specialNeedsHeroCarouselItems } from "@/data";
import {
  CTASchools,
  Footer,
  GalleryPreview,
  Header,
  HeroCarousel,
  NavbarPlaceholder,
  SpNeedsOverview1,
  SpNeedsOverview2,
} from "@/sections";
import { getTranslations } from "next-intl/server";

const SpecialNeeds = async () => {
  const t = await getTranslations("academy.specialNeeds");

  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarousel t={t} carouselItems={specialNeedsHeroCarouselItems} />
        <SpNeedsOverview1 />
        <SpNeedsOverview2 />
        <GalleryPreview />
        <CTASchools />
      </main>
      <Footer />
    </>
  );
};

export default SpecialNeeds;
