import { paymentContactDetails } from "@/data";
import { ICONS } from "@/utils/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

const PaymentContact = ({ t, locale }: { t: any; locale: string }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between padding bg-bg-primary lg:px-64 xl:px-80 2xl:px-96 gap-16">
      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/images/payment/payment-image.jpg"
          alt="Contact"
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* Contact Information Section */}
      <Card className="flex-1 bg-jaris-blue text-jaris-white rounded-lg p-6">
        <CardHeader>
          <h3 className="sm:text-xl lg:text-2xl font-semibold">
            {t("contact.title")}
          </h3>
        </CardHeader>
        <CardBody
          className={`flex flex-col gap-4 ${
            locale === "en" ? "text-left" : "text-right"
          }`}
        >
          <p className="subtitle">{t("contact.subtitle")}</p>
          <div className="subtitle flex gap-2 items-center">
            <span className="text-jaris-gold">{ICONS.phone}</span>
            <p>{paymentContactDetails.phone}</p>
          </div>
          <div className="subtitle flex gap-2 items-center">
            <span className="text-jaris-gold">{ICONS.email}</span>
            <p>{paymentContactDetails.email}</p>
          </div>
          <div className="subtitle flex gap-2 items-center">
            <span className="text-jaris-gold self-start pt-1">
              {ICONS.mail_box}
            </span>
            <p>{paymentContactDetails.address}</p>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            as="a"
            href="/contact"
            size="lg"
            className="mt-4"
            color="warning"
          >
            {t("contact.buttonText")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentContact;
