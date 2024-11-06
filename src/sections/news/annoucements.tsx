import { Button } from "@nextui-org/react";
import Image from "next/image";
import ageCriteriaImage from "@/../public/images/gallery/announcements/age-criteria-image.jpeg";
import paymentImage1 from "@/../public/images/gallery/announcements/payment-portal-image-1.jpeg";
import paymentImage2 from "@/../public/images/gallery/announcements/payment-portal-image-2.jpeg";

const Announcements = () => {
  return (
    <div>
      {/* Age Criteria Section Starts */}
      <div className="flex flex-col sm:flex-row max-sm:gap-y-6 justify-between bg-bg-primary padding">
        {/* Left Side Starts */}
        <div className="basis-full sm:basis-2/5 flex sm:items-center sm:min-h-96 max-sm:order-2">
          <div className="w-full flex flex-col gap-y-6">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl text-jaris-gold font-semibold">
              Age Criteria
            </h1>
            <p className="text-base font-normal text-jaris-blue">
              Age Criteria for KinderGarten and Grade 1. Explore our
              Kindergartens or download below.
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
      {/* Age Criteria Sections Ends */}
      {/* Payment Portal Starts */}
      <div className="flex flex-col sm:flex-row max-sm:gap-y-6 justify-between bg-jaris-blue padding">
        {/* Left Side Starts */}
        <div className="basis-full sm:basis-1/3 flex items-center justify-center sm:justify-between max-sm:order-2">
          <div className="flex flex-col gap-y-14">
            <div className="flex flex-col gap-y-6">
              <span className="text-sm text-bg-primary">Payment Portal</span>
              <h1 className="text-4xl text-jaris-gold font-semibold">
                We Accept
              </h1>
              <p className="text-sm text-bg-primary">
                Now we accept Master Card and Visa Card for fees and other
                payments.
              </p>
            </div>
            <Button
              size="lg"
              radius="sm"
              className="bg-jaris-gold text-base sm:text-lg text-jaris-blue font-bold w-3/5 sm:w-4/5 lg:w-1/2"
            >
              Online Payment
            </Button>
          </div>
        </div>
        {/* Left Side Ends */}
        {/* Right Side Starts */}
        <div className="basis-full min-h-36 sm:basis-1/2 flex items-center justify-center max-sm:order-1">
          <div className="relative w-[125.8px] h-[170px] sm:w-[148px] sm:h-[200px] lg:w-[222px] lg:h-[300px] xl:w-[296px] xl:h-[400px] translate-x-[5%] -translate-y-[5%] z-0">
            <Image
              src={paymentImage1}
              alt="Payment Left Image"
              objectFit="cover"
              className="rounded"
              fill
            />
          </div>
          <div className="relative w-[125.8px] h-[170px] sm:w-[148px] sm:h-[200px] lg:w-[222px] lg:h-[300px] xl:w-[296px] xl:h-[400px] -translate-x-[5%] translate-y-[5%] z-10">
            <Image
              src={paymentImage2}
              alt="Payment Right Image"
              objectFit="cover"
              className="rounded"
              fill
            />
          </div>
        </div>
      </div>
      {/* Payment Portal Ends */}
    </div>
  );
};

export default Announcements;
