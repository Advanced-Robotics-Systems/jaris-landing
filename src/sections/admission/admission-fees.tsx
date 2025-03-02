import { admissionFeesData } from "@/data";
import { ICONS } from "@/utils/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const AdmissionFees = () => {
  const pdfUrl = "/files/fee-structure 23-24.pdf";

  return (
    <div className="padding bg-jaris-blue lg:px-56 xl:px-72 md:py-40 flex flex-col items-center justify-center gap-12 md:gap-16">
      {/* Title Section */}
      <div className="flex justify-between items-center w-full mb-8">
        <div>
          <h2 className="heading-secondary font-semibold text-jaris-white">
            Prices and Fee Structure
          </h2>
          <h3 className="subtitle text-jaris-gold font-semibold">Fees</h3>
        </div>
        <Button
          size="lg"
          radius="full"
          as="a"
          href={pdfUrl}
          target="_blank"
          className="border border-jaris-white text-jaris-white bg-jaris-white/20"
        >
          <span className="text-xl -mr-2">{ICONS.download}</span>
          Fee Info
        </Button>
      </div>

      {/* Fee Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {admissionFeesData.map((fee, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader className="p-4 text-center bg-[#005A79] flex-col">
              <div className="text-jaris-white text-xl font-semibold">
                {fee.title}
              </div>
              <div className="text-jaris-white text-sm lg:text-base">
                {fee.grades}
              </div>
            </CardHeader>
            <CardBody className="p-6 text-center text-jaris-blue">
              <div className="heading-secondary font-bold flex flex-wrap items-center justify-center gap-x-1">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="/logos/Saudi_Riyal_Symbol-2-jaris_blue.svg"
                  alt="SAR"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 inline-block"
                />
                {/* eslint-enable @next/next/no-img-element */}
                {fee.fee}
              </div>
            </CardBody>
            <CardFooter className="p-4 text-center">
              <div className="w-full text-jaris-blue text-sm lg:text-base flex items-center justify-center">
                {fee.vat}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* PDF Viewer Section */}
      <div className="hidden mt-12 lg:flex justify-center w-full">
        <iframe
          src={pdfUrl}
          width="100%"
          height="500px"
          className="lg:max-w-[900px] border-none"
          title="Fee Structure PDF"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center mt-8 gap-4 self-end">
        <Button
          size="lg"
          radius="full"
          as={Link}
          href="/payment"
          className="bg-jaris-white/20 border border-jaris-white text-jaris-white"
        >
          <span className="hidden sm:inline-block -mr-2">View</span>Bank Details
        </Button>
        <Button
          size="lg"
          radius="full"
          as="a"
          href={pdfUrl}
          download
          className="bg-jaris-gold text-jaris-white"
        >
          <span className="text-2xl sm:hidden -mr-2">{ICONS.download}</span>
          <span className="hidden sm:inline-block -mr-2">Download</span>PDF
        </Button>
      </div>
    </div>
  );
};

export default AdmissionFees;
