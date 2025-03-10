"use client";
import { motion } from "framer-motion";

const Discover = () => {
  return (
    <div className="sticky top-0 h-screen max-md:h-[50vh] bg-bg-primary padding flex flex-col items-center justify-center text-jaris-blue font-[600]">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="heading-md"
      >
        Discover a world of
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="heading-md underline-animated"
      >
        endless potential.
      </motion.p>
    </div>
  );
};

export default Discover;
