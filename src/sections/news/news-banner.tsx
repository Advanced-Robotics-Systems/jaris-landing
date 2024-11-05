"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

const NewsBanner = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="basis-full sm:basis-3/4 md:basis-[49%] flex justify-between items-center h-44 sm:h-52 bg-bg-text rounded-lg px-6 py-5 shadow-[2px_1px_4px_0_rgba(0,0,0,0.1)]">
      {/* Left Side Section Starts */}
      <div className="basis-1/2 sm:basis-3/5 flex flex-col gap-y-6">
        {/* Title and Description Starts */}
        <div className="flex flex-col gap-y-1">
          <h1 className="text-base text-jaris-blue font-medium">{title}</h1>
          <p className="text-[9px] text-jaris-blue font-normal">
            {description}
          </p>
        </div>
        {/* Title and Description Ends */}
        {/* Button Section Starts */}
        <div>
          <Button
            radius="md"
            size="sm"
            className="px-2 py-1 text-xs text-jaris-white font-medium bg-jaris-gold hover:bg-jaris-gold-dark shadow-[-1px_2px_4px_0_rgba(0,0,0,0.25)]"
          >
            Read
          </Button>
        </div>
        {/* Button Sections Ends */}
      </div>
      {/* Left Side Section Ends */}
      {/* Right Image Section Starts */}
      <div className="basis-[48%] sm:basis-[38%] relative h-full">
        <Image
          src={imgUrl}
          alt="Event Image"
          fill
          objectFit="cover"
          style={{ borderRadius: "8px" }}
        />
      </div>
      {/* Right Image Section Ends */}
    </div>
  );
};

export default NewsBanner;
