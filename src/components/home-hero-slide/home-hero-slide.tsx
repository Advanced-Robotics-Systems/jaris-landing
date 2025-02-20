"use client";
import { motion } from "framer-motion";

const HomeHeroSlide = ({
  index,
  subtitle,
  subtitleColored,
  title,
  imgUrl,
}: {
  index: number;
  subtitle: string;
  subtitleColored: string;
  title: string;
  imgUrl: string;
}) => {
  return (
    <div
      className={`relative h-full bg-cover padding flex items-center justify-center ${
        index == 1 ? "bg-[80%_center]" : index == 2 ? "bg-top" : "bg-center"
      }`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute inset-0 bg-jaris-blue opacity-35" />
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center pt-5 sm:pt-20 md:pt-40 lg:pt-60"
      >
        <div className="text-xl leading-[38px] sm:text-2xl md:text-3xl lg:text-4xl font-[500]">
          <span className="text-white">{subtitle}</span>{" "}
          <span className="text-jaris-gold">{subtitleColored}</span>
        </div>
        <div className="text-4xl leading-[58px] sm:text-6xl md:text-7xl lg:text-8xl font-[700] text-white">
          {title}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHeroSlide;
