import { coreValues } from "@/data";
import { Image } from "@nextui-org/react";

const CoreValues = ({ t }: { t: any }) => {
  return (
    <div className="w-full lg:min-h-screen bg-bg-primary padding sm:px-8 sm:py-12 lg:px-36 xl:px-56 lg:py-24 flex flex-col lg:flex-row gap-12 items-center justify-center">
      {/* Left Text Section */}
      <div className="lg:flex-[2]">
        <h2 className="text-jaris-blue-dark text-3xl lg:text-4xl font-bold">
          {t("coreValue.coreValues")}
        </h2>
        <p className="text-jaris-gold text-base md:text-lg mt-2 lg:mt-4">
          {t("coreValue.details")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {coreValues.map((value, index) => (
            <div key={index} className="flex gap-4 items-start w-full">
              {/* Serial Number */}
              <div className="text-jaris-gold bg-bg-text w-12 h-12 flex items-center justify-center text-2xl font-bold">
                {index + 1}
              </div>

              {/* Core Value Text */}
              <div className="flex flex-col justify-start w-full">
                <h3 className="text-jaris-blue-dark text-xl font-semibold">
                  {t(`coreValue.${value.title}`)}
                </h3>
                <p className="text-jaris-blue-light text-base mt-2">
                  {t(`coreValue.${value.description}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex-1 lg:flex justify-center">
        <Image
          src="/images/about/about-core-values.jpg"
          alt="Core Values"
          className="rounded-lg object-cover"
          width={352}
          height={616}
        />
      </div>
    </div>
  );
};

export default CoreValues;
