"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ctaSchoolsCarouselItems } from "@/data";
import { Button, Link } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";

const CTASchools = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const t = useTranslations("shared.ctaSchools");
  const locale = useLocale();

  return (
    <div className="relative w-full padding-y lg:py-36 bg-[url('/images/home/_DSC0188-Enhanced-NR.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-jaris-blue opacity-75" />
      <div className="relative z-20 w-full flex flex-col items-center justify-center gap-28 sm:gap-32 md:gap-44">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          speed={1500}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          spaceBetween={70}
          loop={true}
          pagination={pagination}
          modules={[Autoplay, Pagination]}
          className="mySwiper cta-swiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
        >
          {ctaSchoolsCarouselItems.map((item: any, index: number) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[55%] !h-[85%] md:!h-[90%]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-cover rounded-xl scale-110"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(177, 114, 31, 0.1) 0%, #1C406F 100%), url(${item.imgUrl})`,
                  }}
                />
                <div
                  className={`relative z-20 h-full padding flex flex-col items-center justify-end ${
                    locale === "en" ? "gap-5" : "gap-10"
                  }`}
                >
                  <h1 className="title font-bold text-bg-text">
                    {t(`swiper.${item.title}`)}
                  </h1>
                  <p className="subtitle text-bg-primary text-center">
                    {t(`swiper.${item.subtitle}`)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col items-start justify-center gap-10 md:gap-12 ">
          <div className="heading-md">
            <p className="text-jaris-gold">{t("unleash")}</p>
            <p className="text-jaris-gold">{t("potential")}</p>
            <p className="text-bg-text">{t("journey")}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Link href={`/${locale}/schools`}>
              <Button
                size="lg"
                variant="bordered"
                className="border-jaris-gold border-3 rounded-md  lg:px-8"
              >
                <span className="subtitle text-jaris-gold font-semibold">
                  {t("buttons.explore")}{" "}
                  <span className="hidden md:inline">{t("buttons.our")}</span>{" "}
                  {t("buttons.schools")}
                </span>
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                variant="solid"
                className="bg-jaris-gold rounded-md lg:px-8"
              >
                <span className="subtitle text-jaris-blue font-semibold">
                  {t("buttons.contact")}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASchools;
