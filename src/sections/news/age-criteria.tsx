import { Button } from "@nextui-org/react";
import Image from "next/image";
import ageCriteriaImage from "@/../public/images/gallery/announcements/age-criteria-image.jpeg";

const AgeCriteria = () => {
  return (
    <div className="flex flex-col sm:flex-row max-sm:gap-y-6 justify-between bg-bg-primary padding">
      {/* Left Side Starts */}
      <div className="basis-full sm:basis-2/5 flex sm:items-center sm:min-h-96 max-sm:order-2">
        <div className="w-full flex flex-col gap-y-6">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl text-jaris-gold font-semibold">
            Age Criteria
          </h1>
          <p className="text-sm sm:ext-base font-normal text-jaris-blue">
            Age Criteria for KinderGarten and Grade 1. Explore our Kindergartens
            or download below.
          </p>
          <Button
            size="lg"
            radius="sm"
            className="bg-jaris-gold text-sm sm:text-base lg:text-lg font-bold text-bg-text w-3/5 sm:w-full md:w-3/5 lg:w-1/2"
          >
            Download Criteria
          </Button>
        </div>
      </div>
      {/* Left Side Ends */}
      {/* Right Side Starts */}
      <div className="basis-full min-h-60 sm:basis-[55%] relative max-sm:order-1">
        <Image
          src={ageCriteriaImage}
          alt="Age Criteria"
          className="rounded-lg"
          objectFit="cover"
          fill
        />
      </div>
      {/* Right Side Ends */}
    </div>
  );
};

export default AgeCriteria;
