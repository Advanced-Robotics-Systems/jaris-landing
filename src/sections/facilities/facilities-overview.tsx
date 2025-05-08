import { Image } from "@nextui-org/react";

const FacilitiesOverview = ({ t }: { t: any }) => {
  return (
    <div className="w-full padding bg-bg-primary flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-36 lg:px-36 xl:px-52 2xl:px-72">
      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="heading-secondary font-semibold text-jaris-gold">
          {t("facilitiesOverview.title")}
        </h2>
        <p className="subtitle text-jaris-black mt-4">
          {t("facilitiesOverview.description")}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/images/facilities/facilities-overview-image.jpeg"
          alt="Facilities Overview"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default FacilitiesOverview;
