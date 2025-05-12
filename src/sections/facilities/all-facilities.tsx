import { labData } from "@/data";
import { Card, Image } from "@nextui-org/react";
import React from "react";

const AllFacilities = ({ t }: { t: any }) => {
  return (
    <div className="padding bg-bg-primary flex flex-col items-center gap-12 lg:px-36 xl:px-52 2xl:px-72">
      {/* Title */}
      <div className="text-center">
        <h2 className="heading-secondary text-jaris-blue font-semibold">
          {t("allFacilities.title")}
        </h2>
        <p className="subtitle text-jaris-black mt-4">
          {t("allFacilities.description")}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {labData.map((lab, index) => (
          <Card key={index} className="shadow-lg bg-jaris-white">
            <Image
              src={lab.imgSrc}
              alt={t(`allFacilities.${lab.name}`)}
              width="100%"
              height={200}
              className="object-cover"
            />
            <div className="p-6">
              <p className="subtitle font-semibold text-jaris-blue">
                {t(`allFacilities.${lab.category}`)}
              </p>
              <h3 className="heading-secondary font-semibold text-jaris-blue">
                {t(`allFacilities.${lab.name}`)}
              </h3>
              <p className="subtitle text-jaris-blue-dark mt-4">
                {t(`allFacilities.${lab.description}`)}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllFacilities;
