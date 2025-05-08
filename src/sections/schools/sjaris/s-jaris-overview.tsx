import { sJarisCurriculumImages } from "@/data";
import { Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

const SJarisOverview = () => {
  const t = useTranslations("aboutPage.jarisOverview");
  return (
    <div className="padding bg-jaris-white flex flex-col lg:flex-row gap-16 lg:px-64 xl:px-80 2xl:px-96">
      <div className="lg:w-2/3">
        <h3 className="subtitle text-jaris-blue font-semibold mb-2">
          {t("title")}
        </h3>
        <h2 className="heading-secondary text-jaris-gold font-semibold">
          {t("subtitle")}
        </h2>
        <p className="subtitle text-jaris-black mt-10">{t("description")}</p>
      </div>

      {/* Right Curriculum Section */}
      <div className="lg:w-1/3 flex flex-col lg:flex-row gap-4 lg:justify-end">
        <div className="p-4 flex flex-col items-center bg-bg-text backdrop-blur-lg rounded-lg">
          <h3 className="text-jaris-red font-semibold text-lg heading-secondary uppercase">
            {t("curriculum")}
          </h3>
          <hr className="left-1/2 w-full mt-2 border-t-[1px] border-white opacity-60" />
          <div className="flex lg:flex-col gap-6 mt-4 items-center justify-center flex-wrap">
            {sJarisCurriculumImages.map((curriculum, index) => (
              <Image
                key={index}
                src={curriculum.imgSrc}
                alt={curriculum.title}
                width={90}
                className={`h-auto ${
                  curriculum.title === "Jawahir"
                    ? "rounded-full"
                    : "rounded-none"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SJarisOverview;
