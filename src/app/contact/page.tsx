"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { contactCarouselItems, contactNavItems } from "@/data";
import {
  Header,
  Footer,
  NavbarPlaceholder,
  HeroCarouselNav,
  ContactGetInTouch,
  StaffContactDetails,
  FAQContents,
} from "@/sections";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsappWidget } from "@/components";

export default function Contact() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState<number>(0);

  const tabNameToIndex: { [key: string]: number } = {
    "#getintouch": 0,
    "#staff": 1,
    "#faq": 2,
    "#myemail": 3,
  };

  useEffect(() => {
    const hash = window.location.hash;
    const initialTab = tabNameToIndex[hash] ?? 0;
    setActive(initialTab);
  }, []);

  const handleTabChange = (index: number) => {
    setActive(index);
    const tabName = Object.keys(tabNameToIndex)[index];
    router.push(`${pathname}${tabName}`, { scroll: false });
  };

  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarouselNav
          carouselItems={contactCarouselItems}
          carouselNavItems={contactNavItems}
          active={active}
          setActive={handleTabChange}
        />
        <AnimatePresence mode="wait">
          {/* Contact Get in Touch */}
          {active === 0 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactGetInTouch />
            </motion.div>
          )}

          {/* Staff */}
          {active === 1 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <StaffContactDetails />
            </motion.div>
          )}

          {/* FAQ */}
          {active === 2 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FAQContents />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
