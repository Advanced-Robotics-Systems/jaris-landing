"use client";

import { InnerFooter } from "@/components";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("shared.footer");

  return <InnerFooter t={t} />;
};

export default Footer;
