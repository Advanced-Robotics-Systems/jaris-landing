"use client";

import { contactCarouselItems } from "@/data";
import { Header, ContactCarousel } from "@/sections";
import { useState } from "react";

export default function Contact() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Header />
      <main>
        <ContactCarousel carouselItems={contactCarouselItems} />
      </main>
    </>
  );
}
