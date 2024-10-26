import { contactCarouselItems } from "@/data";
import { Header, ContactCarousel, Footer } from "@/sections";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <ContactCarousel carouselItems={contactCarouselItems} />
      </main>
      <Footer />
    </>
  );
}
