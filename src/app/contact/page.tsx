import { contactCarouselItems } from "@/data";
import { Header } from "@/sections";
import { ContactCarousel } from "@/sections";
import { useState } from "react";

export default function Contact() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Header />
      <main>
        <ContactCarousel
          carouselItems={contactCarouselItems}
          active={active}
          setActive={setActive}
        />
      </main>
    </>
  );
}
