import { Image } from "@nextui-org/react";
import React from "react";

const AboutMission = ({ t }: { t: any }) => {
  return (
    <div className="bg-bg-primary padding-y lg:px-32 flex flex-col items-center gap-12">
      {/* Top Section */}
      <div className="lg:flex gap-8 lg:gap-16 w-full max-container">
        {/* Mission Text 1 */}
        <div className="p-8 rounded-lg lg:flex-1">
          <h3 className="text-jaris-blue-dark text-xl md:text-2xl font-semibold">
            {t("mission.ourMission")}
          </h3>
          <h2 className="text-jaris-gold text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mt-4">
            {t("mission.title1")}
          </h2>
          <p className="text-base md:text-lg text-jaris-blue-light mt-4">
            {t("mission.details1")}
          </p>
        </div>

        {/* Image 1 */}
        <div className="lg:flex-1 flex items-center justify-center">
          <Image
            src="/images/gallery/new-gallery-pictures/_DSC0309-Enhanced-NR.jpg"
            alt="Mission Image 1"
            className="rounded-lg object-cover w-full h-[200px] sm:h-[300px] lg:h-[400px]"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 w-full max-container">
        {/* Mission Text 2 */}
        <div className="p-8 rounded-lg lg:flex-1">
          <h3 className="text-jaris-blue-dark text-xl md:text-2xl font-semibold">
            {t("mission.ourMission")}
          </h3>
          <h2 className="text-jaris-gold text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mt-4">
            {t("mission.title2")}
          </h2>
          <p className="text-base md:text-lg text-jaris-blue-light mt-4">
            {t("mission.details2")}
          </p>
        </div>

        {/* Image 2 */}
        <div className="lg:flex-1 flex items-center justify-center">
          <Image
            src="/images/about/about-mission-2.jpg"
            alt="Mission Image 2"
            className="rounded-lg object-cover w-full h-[200px] sm:h-[300px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
