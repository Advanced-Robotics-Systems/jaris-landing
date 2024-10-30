import { contactCarouselItems } from "@/data";
import { Header, ContactCarousel, Footer, NavbarPlaceholder } from "@/sections";

export default function Contact() {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <ContactCarousel carouselItems={contactCarouselItems} />
      </main>
      <Footer />
    </>
  );
}
