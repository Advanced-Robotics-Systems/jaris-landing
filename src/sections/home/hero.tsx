"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { HomeHeroSlide } from "@/components";
import { homeCarouselItems } from "@/data";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("homepage.hero");
  const locale = useLocale();

  return (
    <div className="relative h-[calc(100vh-70px)]">
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={2000}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
        }}
        // allowTouchMove={false}
        loop={true}
        modules={[EffectFade, Pagination, Autoplay]}
        className="relative mySwiper h-full"
      >
        {homeCarouselItems.map((item: any, index: number) => (
          <SwiperSlide key={index} className="h-full">
            <HomeHeroSlide
              index={index}
              subtitle={t(item.subtitle)}
              subtitleColored={t(`${item.subtitleColored}${index + 1}`)}
              title={t(item.title)}
              imgUrl={item.imgUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero bottom texts */}
      <div
        className={`absolute w-full bottom-2 md:bottom-4 lg:bottom-8 max-sm:right-2 px-6 lg:px-10 z-10 flex ${
          locale === "ar" ? "flex-row-reverse" : ""
        } items-start justify-between`}
      >
        <div
          className={`small-text md:subtitle text-jaris-white w-[40%] lg:w-[20%] ${
            locale === "ar" ? "text-right" : ""
          }`}
        >
          {t("bottomText")}
        </div>
        <div
          className={`small-text md:subtitle text-jaris-white w-[30%] ${
            locale === "en" ? "text-end" : ""
          }`}
        >
          #INSPIRING_FUTURES
        </div>
      </div>
    </div>
  );
};

export default Hero;
