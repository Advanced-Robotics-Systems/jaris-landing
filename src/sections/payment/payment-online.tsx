"use client";
import { jarisBankDetails } from "@/data";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import { useState } from "react";

const PaymentOnline = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(jarisBankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between padding bg-bg-primary lg:px-64 xl:px-80 2xl:px-96 gap-10">
      {/* Payment with Card Section */}
      <Card className="flex-1 bg-jaris-blue text-jaris-white rounded-lg p-6 lg:h-[320px]">
        <CardHeader>
          <h3 className="sm:text-xl lg:text-2xl">PAY WITH CARD</h3>
        </CardHeader>
        <CardBody className="flex-grow">
          <p className="subtitle mt-2 mb-4">
            Now JARIS accepts card payments. So you can pay easily and
            effortlessly.
            <br />
            <span className="inline-block text-red-600 mt-4">
              (This feature is still under development)
            </span>
          </p>
        </CardBody>
        <CardFooter>
          <Button
            size="lg"
            className="mt-auto disabled:bg-gray-500"
            color="warning"
            disabled
          >
            Pay Online
          </Button>
        </CardFooter>
      </Card>

      {/* Bank Details Section */}
      <Card className="flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col lg:h-[320px]">
        <CardHeader>
          <h3 className="sm:text-xl lg:text-2xl text-jaris-gold">
            Bank Details
          </h3>
        </CardHeader>
        <CardBody className="flex-grow text-jaris-blue grid grid-cols-5">
          <div className="flex flex-col gap-3 col-span-2">
            <p className="subtitle">Bank:</p>
            <p className="subtitle">Account Holder:</p>
            <p className="subtitle">Account Number:</p>
          </div>
          <div className="flex flex-col gap-3 col-span-3">
            <span className="font-bold subtitle">{jarisBankDetails.bank}</span>
            <span className="font-bold subtitle">
              {jarisBankDetails.accountName}
            </span>
            <span className="font-bold subtitle">
              {jarisBankDetails.accountNumber}
            </span>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            size="lg"
            className="mt-auto !min-w-36 bg-transparent border-2 border-jaris-blue text-jaris-blue font-semibold"
            onPress={handleCopy}
          >
            <span className="transition-opacity duration-300">
              {copied ? "Copied!" : "Copy"}
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentOnline;
