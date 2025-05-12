import React from "react";

const AboutExploreSchool = ({ t }: { t: any }) => {
  return (
    <div className="bg-jaris-blue-dark padding lg:px-48 xl:px-56 flex flex-col items-start">
      {/* Section Title */}
      <h3 className="text-jaris-white heading-secondary font-semibold">
        {t("school.ourSchools")}
      </h3>

      {/* Main Heading */}
      <h2 className="text-jaris-gold heading-md mt-4 lg:mt-6">
        {t("school.description")}
      </h2>
    </div>
  );
};

export default AboutExploreSchool;
