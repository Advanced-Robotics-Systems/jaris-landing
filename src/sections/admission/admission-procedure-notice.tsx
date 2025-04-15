import React from "react";

const AdmissionProcedureNotice = ({ t }: { t: any }) => {
  return (
    <div className="w-full bg-white/80 padding sm:px-8 md:px-16 lg:px-56 xl:px-72 text-center">
      <p className="text-base sm:text-sm md:text-lg lg:text-base text-jaris-black lg:leading-7">
        {t("notice")}
      </p>
    </div>
  );
};

export default AdmissionProcedureNotice;
