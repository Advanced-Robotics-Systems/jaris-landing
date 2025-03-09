"use client";
import { ExploreCard } from "@/components";
import { exploreItems } from "@/data";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Explore = () => {
  const t = useTranslations("shared.explore");
  const locale = useLocale();

  return (
    <div className="relative padding bg-jaris-blue-light flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-20">
      <h2 className="heading-secondary font-bold text-bg-text">{t("title")}</h2>
      <div
        className={`flex ${
          locale === "ar" ? "flex-row-reverse" : ""
        } items-center justify-center gap-8 flex-wrap`}
      >
        {exploreItems.map((item: any, index: number) => (
          <ExploreCard
            key={index}
            title={t(`cards.${item.title}`)}
            description={t(`cards.${item.description}`)}
            link={item.link}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
