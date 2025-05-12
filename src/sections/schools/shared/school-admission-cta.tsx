import { availableTimes } from "@/data";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const SchoolAdmissionCTA = () => {
  const t = useTranslations("aboutPage.admissionCTA");

  return (
    <div className="padding bg-jaris-white flex max-lg:flex-col items-center justify-center gap-8 lg:gap-12 lg:px-64 xl:px-80 2xl:px-96">
      <Card className="bg-jaris-white shadow-lg p-6 flex-1">
        <div className="flex flex-col items-start gap-4">
          <h3 className="heading-secondary text-jaris-blue font-semibold">
            {t("title")}
          </h3>
          <p className="subtitle text-jaris-black">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4 w-full">
            <Button
              size="lg"
              as={Link}
              href="/admission#admission-procedure"
              radius="full"
              className="flex-1 min-w-[150px] border border-jaris-gold text-jaris-gold bg-jaris-gold/20"
            >
              {t("buttonTxt1")}
            </Button>
            <Button
              size="lg"
              as="a"
              href="http://admissionform.jawahirschool.com/"
              radius="full"
              className="flex-1 min-w-[150px] bg-jaris-gold text-jaris-white"
            >
              {t("buttonTxt2")}
            </Button>
          </div>
        </div>
      </Card>

      <Card className="bg-jaris-blue text-jaris-white shadow-lg p-6 flex-1">
        <CardBody className="flex flex-col items-start gap-6">
          <h3 className="subtitle font-semibold">{t("avilable")}</h3>
          <ul className="w-full flex flex-col gap-3">
            {availableTimes.map((slot, index) => (
              <li
                key={index}
                className="flex justify-between gap-6 w-full font-light small-text"
              >
                <span>{t(`${slot.day}`)}</span>
                <span>{t(`${slot.time}`)}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default SchoolAdmissionCTA;
