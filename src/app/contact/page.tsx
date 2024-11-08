"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
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

export default function Contact() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(0);

  const tabNameToIndex: { [key: string]: number } = {
    contact: 0,
    staff: 1,
    faq: 2,
    myemail: 3,
  };
  const tabIndexToName = Object.keys(tabNameToIndex);

  useEffect(() => {
    const tabName = searchParams.get("tab");
    const initialTab =
      tabName &&
      tabNameToIndex[tabName as keyof typeof tabNameToIndex] !== undefined
        ? tabNameToIndex[tabName as keyof typeof tabNameToIndex]
        : 0;
    setActive(initialTab);
  }, [searchParams]);

  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  const handleTabChange = (index: number) => {
    setActive(index);
    const tabName = tabIndexToName[index];
    router.push(`${pathname}?tab=${tabName}`, { scroll: false });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <NavbarPlaceholder />
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
    </Suspense>
  );
}
