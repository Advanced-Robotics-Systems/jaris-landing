import { Button, Image } from "@nextui-org/react";
import React from "react";

const AdmissionProcedure = () => {
  return (
    <div className="relative h-full lg:h-screen bg-[url('/images/admission/admission-procedure-bg.jpg')] bg-cover bg-center padding md:py-40 lg:px-56 xl:px-72">
      <div className="absolute inset-0 bg-bg-primary/90" />

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-left max-w-lg">
          <span className="text-jaris-blue text-base sm:text-lg md:text-xl font-semibold uppercase">
            Admission Procedure
          </span>
          <h2 className="heading-md text-jaris-gold mt-2">
            Admission Procedure
          </h2>
          <p className="text-jaris-blue-dark subtitle mt-4 leading-6 md:leading-8">
            The school registers interested candidates who can easily apply
            online via the link{" "}
            <span className="underline-animated-small">online admission</span>.
            After clicking the registration/admission icon and providing
            information by the parents, the admin office follows up using the ID
            number already allotted to the candidates through SMS.
          </p>
          <Button
            as="a"
            href="http://admissionform.jawahirschool.com/"
            size="lg"
            radius="full"
            className="mt-6 bg-jaris-red-dark text-white"
          >
            Admission form
          </Button>
        </div>

        <div className="hidden xl:block">
          <Image
            src="/images/admission/admission-procedure-image.jpeg"
            alt="Library Image"
            width={450}
            height={500}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedure;
