"use client";

import { InnerFooter } from "@/components";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("shared.footer");
  const locale = useLocale();

  return <InnerFooter t={t} locale={locale} />;
};

export default Footer;
