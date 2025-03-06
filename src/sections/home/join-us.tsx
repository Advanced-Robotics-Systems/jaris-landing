"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const JoinUs = ({ t, locale }: { t: any; locale: string }) => {
  // const [width, setWidth] = useState("50%");
  // const [locked, setLocked] = useState(false);
  // const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // Calculate the visible percentage of the section
  //       const visiblePercentage = Math.min(
  //         Math.max(50 + entry.intersectionRatio * 50, 50),
  //         100
  //       );
  //       const { bottom } = entry.boundingClientRect;
  //       const viewportHeight = window.innerHeight;

  //       if (!locked) {
  //         setWidth(`${visiblePercentage}%`);
  //         if (visiblePercentage >= 97) {
  //           setWidth("100%");
  //           setLocked(true); // Lock the width once it reaches 100%
  //         }
  //       }
  //       if (locked && bottom >= viewportHeight) {
  //         setLocked(false);
  //       }
  //     },
  //     {
  //       threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Create thresholds from 0 to 1 at 0.01 intervals
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, [locked]);

  const joinUsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: joinUsRef,
    offset: ["start end", "end end"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);

  return (
    <div className="bg-bg-primary flex items-center justify-center w-full">
      <motion.div
        ref={joinUsRef}
        style={{ width }}
        className="relative h-screen hidden md:flex items-center justify-center overflow-hidden whitespace-nowrap text-ellipsis"
      >
        <JoinUsBody t={t} locale={locale} />
      </motion.div>
      <div className="relative h-[50vh] w-full md:hidden flex items-center justify-center overflow-hidden">
        <JoinUsBody t={t} locale={locale} />
      </div>
    </div>
  );
};

const JoinUsBody = ({ t, locale }: { t: any; locale: string }) => {
  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-110"
        src="/videos/discover-jaris-bg.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-jaris-blue opacity-75 " />
      <div className="relative z-20 text-4xl leading-[58px] sm:text-6xl md:text-7xl lg:text-8xl font-bold flex gap-3 md:gap-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-jaris-gold"
        >
          {t("joinUs.textGold")}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-white"
        >
          {t("joinUs.textWhite")}
        </motion.div>
      </div>
    </>
  );
};

export default JoinUs;
