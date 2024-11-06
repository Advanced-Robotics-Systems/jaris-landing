"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { newsCarouselItems, newsNavItems } from "@/data";
import {
  Announcements,
  CTASchools,
  Events,
  Footer,
  Header,
  HeroCarouselNav,
  NavbarPlaceholder,
  News,
  PhotoGallery,
} from "@/sections";
import { AnimatePresence, motion } from "framer-motion";

export default function GalleryNews() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(0);

  const tabNameToIndex: { [key: string]: number } = {
    gallery: 0,
    news: 1,
    events: 2,
    announcements: 3,
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
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarouselNav
          carouselItems={newsCarouselItems}
          carouselNavItems={newsNavItems}
          active={active}
          setActive={handleTabChange}
        />
        <AnimatePresence mode="wait">
          {/* Gallery */}
          {active === 0 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PhotoGallery />
            </motion.div>
          )}

          {/* News Page */}
          {active === 1 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <News />
            </motion.div>
          )}

          {/* Events Page */}
          {active === 2 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Events />
            </motion.div>
          )}

          {/* Announcements Page */}
          {active === 3 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Announcements />
            </motion.div>
          )}
        </AnimatePresence>
        <CTASchools />
      </main>
      <Footer />
    </>
  );
}
