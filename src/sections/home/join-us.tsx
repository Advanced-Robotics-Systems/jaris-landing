"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const JoinUs = () => {
  const [width, setWidth] = useState("50%");
  const [locked, setLocked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate the visible percentage of the section
        const visiblePercentage = Math.min(
          Math.max(50 + entry.intersectionRatio * 50, 50),
          100
        );
        const { bottom } = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;

        if (!locked) {
          setWidth(`${visiblePercentage}%`);
          if (visiblePercentage >= 97) {
            setWidth("100%");
            setLocked(true); // Lock the width once it reaches 100%
          }
        }
        if (locked && bottom >= viewportHeight) {
          setLocked(false);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Create thresholds from 0 to 1 at 0.01 intervals
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [locked]);
  return (
    <>
      <div className="hidden md:block">
        <div className="flex items-center justify-center w-full">
          <motion.div
            ref={sectionRef}
            initial={{ width: "50%" }}
            animate={{ width }}
            transition={{ duration: 0 }}
            className={`relative h-screen max-md:h-[50vh] flex items-center justify-center overflow-hidden `}
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-110"
              src="/videos/discover-jaris-bg.mp4"
              autoPlay
              loop
              muted
            />
            <div className="absolute inset-0 bg-jaris-blue opacity-75 " />
            <div className="relative z-20 title font-bold flex gap-3 md:gap-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-jaris-gold"
              >
                JOIN US AT
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-white"
              >
                JARIS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="relative  h-screen max-md:h-[50vh] flex items-center justify-center overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-110"
            src="/videos/discover-jaris-bg.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-jaris-blue opacity-75 " />
          <div className="relative z-20 title font-bold flex gap-3 md:gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-jaris-gold"
            >
              JOIN US AT
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-white"
            >
              JARIS
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
