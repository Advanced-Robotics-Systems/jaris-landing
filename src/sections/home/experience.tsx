import { ExperienceCard } from "@/components";
import { homeExperiences, homePartnerSlides } from "@/data";
import { Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

const Experience = () => {
  return (
    <section className="relative lg:min-h-screen bg-jaris-blue padding-y flex flex-col items-center justify-center gap-28">
      <div className="flex flex-col items-center justify-center gap-4 padding-x">
        <div className="text-jaris-white text-3xl md:text-4xl lg:text-5xl font-bold">
          Educational Experience
        </div>
        <div className="text-jaris-white subtitle tracking-wide lg:w-[85%] text-center">
          Unlock boundless potential through our immersive educational
          experience, fostering intellect, creativity, and character in every
          student.
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap padding-x">
        {homeExperiences.map((experience: any, index: number) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            subtitle={experience.subtitle}
          />
        ))}
      </div>

      <div className="w-full">
        <Marquee pauseOnHover className="flex items-center justify-around">
          {homePartnerSlides.map((partner: any, index: number) => (
            <div
              key={index}
              className="h-14 lg:h-28 min-w-14 lg:min-w-28 flex items-center justify-center px-4 py-2 bg-[rgba(26,25,24,0.10)] mx-12 rounded-lg"
            >
              <Image
                src={partner.imgUrl}
                alt={partner.title}
                className="h-10 lg:h-20 w-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Experience;
