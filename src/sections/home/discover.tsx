"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const Discover = () => {
  const t = useTranslations("homepage.discover");
  const locale = useLocale();

  return (
    <div
      className={`sticky top-0 h-screen max-md:h-[50vh] bg-bg-primary padding flex flex-col ${
        locale === "ar" ? "gap-y-4" : ""
      } items-center justify-center text-jaris-blue font-[600]`}
    >
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="heading-md"
      >
        {t("topText")}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="heading-md underline-animated"
      >
        {t("bottomText")}
      </motion.p>
    </div>
  );
};

export default Discover;
