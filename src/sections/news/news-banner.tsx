"use client";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import jarisLogo from "@/../public/logos/jaris-logo-full.png";
import { IoClose } from "react-icons/io5";

const NewsBanner = ({
  title,
  description,
  imgUrl,
  modal,
}: {
  title: string;
  description: string;
  imgUrl: string;
  modal: {
    insideImg: string;
    longDescription: string;
  };
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="basis-full sm:basis-3/4 md:basis-[49%] flex justify-between items-center sm:h-52 bg-bg-text rounded-lg px-6 py-5 shadow-[2px_1px_4px_0_rgba(0,0,0,0.1)]">
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
              onPress={onOpen}
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
            className="rounded-lg object-cover"
          />
        </div>
        {/* Right Image Section Ends */}
      </div>
      {/* Modal Starts */}
      <Modal
        size="3xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        placement="center"
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col sm:flex-row bg-bg-primary">
                {/* Modal Left Side Starts */}
                <div className="basis-full sm:basis-1/3 flex flex-col gap-y-6 p-0 sm:p-2 md:p-3">
                  <Image src={jarisLogo} alt="JARIS Logo" width={206} />
                  <Image
                    src={imgUrl}
                    alt="Banner Picture"
                    width={206}
                    height={182}
                    className="rounded hidden sm:block"
                  />
                </div>
                {/* Modal Left Side Ends */}
                {/* Modal Right Side Starts */}
                <div className="basis-full sm:basis-2/3 flex flex-col gap-y-3 sm:gap-y-6 p-0 sm:p-2 md:p-3">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-jaris-blue-dark">
                    {title}
                  </h1>
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl font-normal text-justify">
                    {modal.longDescription == ""
                      ? description
                      : modal.longDescription}
                  </p>
                  {modal.insideImg != "" && (
                    <Image
                      src={modal.insideImg}
                      alt="Inside Picture"
                      width={520}
                      height={360}
                      className="rounded-lg"
                    />
                  )}
                </div>
                {/* Modal Right Side Ends */}
              </ModalBody>
              <ModalFooter className="bg-bg-primary">
                <Button
                  onPress={onClose}
                  size="sm"
                  radius="full"
                  className="bg-jaris-blue text-bg-text text-xl"
                  isIconOnly
                >
                  <IoClose />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Modal Ends */}
    </>
  );
};

export default NewsBanner;
