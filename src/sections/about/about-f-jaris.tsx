import { fJarisCurriculumImages } from "@/data";
import { Button, Image, Link } from "@nextui-org/react";
import React from "react";

const AboutFJaris = ({ t }: { t: any }) => {
  return (
    <div
      className="relative padding lg:px-32 md:py-32 lg:py-48 xl:py-56 flex flex-col lg:flex-row justify-between items-start gap-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/images/gallery/new-gallery-pictures/_DSC0348-Enhanced-NR.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-jaris-blue opacity-80 " />
      <div className="absolute inset-0 bg-black opacity-20 " />

      <div className="relative z-10 lg:w-2/3">
        <h1 className="heading-md font-bold text-white">1st JARIS</h1>
        <h2 className="text-jaris-gold heading-secondary font-semibold mt-2">
          {t("fJaris.subtitle")}
        </h2>
        <p className="text-bg-text mt-4 subtitle font-light">
          {t("fJaris.grade")}
        </p>
        <p className="text-bg-text mt-4 leading-7 subtitle font-[400]">
          {t("fJaris.description")}
        </p>

        <div className="flex gap-4 mt-6 flex-wrap">
          <Link href="/schools/fjaris">
            <Button
              size="lg"
              variant="bordered"
              className="border-jaris-gold border-3 rounded-md lg:px-8"
            >
              <span className="subtitle text-jaris-gold font-semibold">
                {t("commonTxt.buttonTxt1")}
              </span>
            </Button>
          </Link>

          <Link href="/schools/fjaris">
            <Button
              size="lg"
              variant="bordered"
              className="border-jaris-gold border-3 rounded-md lg:px-8"
            >
              <span className="subtitle text-jaris-gold font-semibold">
                {t("commonTxt.buttonTxt2")}
              </span>
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="lg"
              variant="solid"
              className="bg-jaris-gold rounded-md lg:px-8"
            >
              <span className="subtitle text-jaris-blue font-semibold">
                {t("commonTxt.buttonTxt3")}
              </span>
            </Button>
          </Link>

          <Link href="http://admissionform.jawahirschool.com/">
            <Button
              size="lg"
              variant="solid"
              className="bg-jaris-red rounded-md lg:px-8"
            >
              <span className="subtitle text-jaris-white font-semibold">
                {t("commonTxt.buttonTxt4")}
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Curriculum Section */}
      <div className="relative z-10 lg:w-1/3 flex flex-col lg:flex-row gap-4 lg:justify-end">
        <div className="p-4 flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-lg">
          <h3 className="text-white font-semibold text-lg heading-secondary uppercase">
            {t("commonTxt.curriculum")}
          </h3>
          <hr className="left-1/2 w-full mt-2 border-t-[1px] border-white opacity-60" />
          <div className="flex lg:flex-col gap-6 mt-4 items-center justify-center flex-wrap">
            {fJarisCurriculumImages.map((curriculum, index) => (
              <Image
                key={index}
                src={curriculum.imgSrc}
                alt={curriculum.title}
                width={90}
                className="h-auto rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFJaris;
