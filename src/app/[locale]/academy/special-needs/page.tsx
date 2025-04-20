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

const SpecialNeeds = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarousel carouselItems={specialNeedsHeroCarouselItems} />
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
