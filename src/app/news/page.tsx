import { galleryCarouselItems } from "@/data";
import { Footer, GalleryCarousel, Header } from "@/sections";

export default function GalleryNews() {
  return (
    <>
      <Header />
      <main>
        <GalleryCarousel carouselItems={galleryCarouselItems} />
      </main>
      <Footer />
    </>
  );
}
