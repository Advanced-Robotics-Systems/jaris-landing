import { ContactExperience, ContactForm } from "@/sections";
import Image from "next/image";
import mapImage from "../../../public/images/contact/contact-map-image.jpg";

const ContactGetInTouch = () => {
  return (
    <div className="padding bg-bg-primary">
      <div className="flex flex-col items-center">
        <div className="text-jaris-gold text-3xl sm:text-5xl md:text-7xl font-medium">
          Contact
        </div>
        <div className="text-jaris-gold text-sm sm:text-xl md:text-3xl font-normal mt-3">
          Have questions? We&apos;re ready to help!
        </div>
      </div>
      <div className="mt-16">
        <div className="text-[#586A86] text-[10px] sm:text-base md:text-lg font-bold uppercase">
          Communications
        </div>
        <div className="text-jaris-blue-dark text-base sm:text-4xl md:text-5xl font-medium mt-3">
          Get in Touch - We&apos;re Here to Help!
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8">
        <div className="w-full md:w-1/2 flex flex-col bg-bg-text px-2 pt-3 pb-8">
          <Image
            src={mapImage}
            alt="Map Image"
            width={586}
            height={502}
            // objectFit="cover"
          />
          <div className="flex gap-1 h-12">
            <div className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background">
              JARIS
            </div>
            <div className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background">
              SJARIS
            </div>
            <div className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background">
              TJARIS
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <ContactExperience />
    </div>
  );
};

export default ContactGetInTouch;
