"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { newsCarouselItems, newsNavItems } from "@/data";
import {
  // Announcements,
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
import { WhatsappWidget } from "@/components";
import { useTranslations } from "next-intl";

export default function GalleryNews() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(0);

  const tabNameToIndex: { [key: string]: number } = {
    "#gallery": 0,
    "#news": 1,
    "#events": 2,
    // "#announcements": 3,
  };
  const tabIndexToName = Object.keys(tabNameToIndex);

  useEffect(() => {
    const hash = window.location.hash;
    const initialTab = tabNameToIndex[hash] ?? 0;
    setActive(initialTab);
  }, []);

  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  const handleTabChange = (index: number) => {
    setActive(index);
    const tabName = tabIndexToName[index];
    router.push(`${pathname}${tabName}`, { scroll: false });
  };

  const t = useTranslations("newsGalleryPage");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <HeroCarouselNav
          carouselItems={newsCarouselItems}
          carouselNavItems={newsNavItems}
          active={active}
          setActive={handleTabChange}
          t={t}
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
              <PhotoGallery t={t} />
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
              <News t={t} />
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
              <Events t={t} />
            </motion.div>
          )}

          {/* Announcements Page */}
          {/* {active === 3 && (
            <motion.div
              key={active}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Announcements />
            </motion.div>
          )} */}
        </AnimatePresence>
        <CTASchools />
      </main>
      <Footer />
    </Suspense>
  );
}
