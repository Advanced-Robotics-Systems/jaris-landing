import { Button, Image, Card } from "@nextui-org/react";

const AdmissionCTA = ({ t }: { t: any }) => {
  return (
    <div className="padding bg-bg-primary grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:py-36 lg:px-64 xl:px-80 2xl:px-96">
      {/* Classera Section */}
      <Card className="bg-jaris-blue text-jaris-white shadow-lg flex-row h-full">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col justify-between w-2/3 p-6">
          <div>
            <h3 className="heading-secondary font-semibold">
              {t(`ctaCard.title1`)}
            </h3>
            <p className="subtitle mt-4"> {t(`ctaCard.details1`)}</p>
          </div>
          <div className="mt-6">
            <Button
              size="lg"
              as="a"
              href="#"
              radius="full"
              className="border border-jaris-white text-jaris-white bg-jaris-white/20"
            >
              {t(`ctaCard.buttonText1`)}
            </Button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-1/3 flex justify-center items-center p-4">
          <Image
            src="/images/admission/classera.png"
            alt="Classera Placeholder Image"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </Card>

      {/* Curriculum Section */}
      <Card className="bg-jaris-blue text-jaris-white shadow-lg flex-row flex-wrap h-full">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col justify-between w-2/3 p-6">
          <div>
            <h3 className="heading-secondary font-semibold">
              {t(`ctaCard.title2`)}
            </h3>
            <p className="subtitle mt-4">{t(`ctaCard.details2`)}</p>
          </div>
          <div className="mt-6">
            <Button
              size="lg"
              as="a"
              href="/admission/curriculum"
              radius="full"
              className="border border-jaris-white text-jaris-white bg-jaris-white/20"
            >
              {t(`ctaCard.buttonText2`)}
            </Button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-1/3 flex justify-center items-center p-4">
          <Image
            src="/images/admission/curriculum.jpeg"
            alt="Curriculum Placeholder Image"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </Card>

      {/* Join Us Section */}
      <Card className="lg:col-span-2 bg-jaris-blue text-jaris-white shadow-lg flex-row flex-wrap h-full">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col justify-between w-2/3 p-6">
          <div>
            <h3 className="heading-secondary font-semibold">
              {t(`ctaCard.title3`)}
            </h3>
            <p className="subtitle mt-4">{t(`ctaCard.details3`)}</p>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Button
              size="lg"
              as="a"
              href="/contact#faq"
              radius="full"
              className="border border-jaris-white text-jaris-white bg-jaris-white/20"
            >
              {t(`ctaCard.buttonText3`)}
            </Button>
            <Button
              size="lg"
              as="a"
              href="/contact"
              radius="full"
              className="bg-jaris-gold text-jaris-white"
            >
              {t(`ctaCard.buttonText4`)}
            </Button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-1/3 flex justify-center items-center p-4">
          <Image
            src="/images/admission/curriculum.jpeg"
            alt="Join Us Placeholder Image"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
};

export default AdmissionCTA;
