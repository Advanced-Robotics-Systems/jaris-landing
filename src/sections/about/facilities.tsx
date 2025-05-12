import { Button, Image, Link } from "@nextui-org/react";
import { facilities } from "@/data";

const Facilities = ({ t }: { t: any }) => {
  return (
    <div className="padding bg-bg-primary sm:px-8 sm:py-12 lg:px-32 lg:py-24 flex flex-col items-center gap-16">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-jaris-gold heading-secondary font-semibold">
          {t("facilitie.ourFacilities")}
        </h2>
        <p className="text-jaris-blue-dark mt-4 subtitle">
          {t("facilitie.description")}
        </p>
      </div>

      {/* Facilities Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {facilities.map((facility, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={facility.imgUrl}
              alt={t(`facilitie.${facility.title}`)}
              width={250}
              height={350}
              className={`rounded-lg xl:w-[300px] xl:h-[400px] object-cover ${
                index == 3 ? "object-[30%_center]" : ""
              }`}
            />
            <h6 className="text-jaris-blue-dark mt-2 subtitle">
              {t(`facilitie.${facility.title}`)}
            </h6>
          </div>
        ))}
      </div>

      {/* Explore Button Section */}
      <div className="mt-8">
        <Link href="/facilities">
          <Button
            size="lg"
            variant="bordered"
            className="border-jaris-gold border-3 rounded-md lg:px-8"
          >
            <span className="subtitle text-jaris-gold font-semibold">
              {t("facilitie.buttonTxt")}
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Facilities;
