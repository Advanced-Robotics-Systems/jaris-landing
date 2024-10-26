import { contactExperienceCards } from "@/data";
import { ContactExperienceCard } from "@/sections";

const ContactExperience = () => {
  return (
    <div className="bg-bg-text w-full rounded-lg px-4 md:px-7 py-8 md:py-16 mt-12">
      <div className="flex flex-col w-full sm:px-5">
        <div className="text-jaris-gold text-sm sm:text-xl md:text-3xl lg:text-5xl font-medium mb-3">
          Experience Seamless Communication
        </div>
        <p className="text-jaris-blue text-[10px] sm:text-sm md:text-base text-justify">
          Our new student management system facilitates effortless interaction
          among students, teachers, Admin, and parents. Accessible via student
          ID or parent credentials, it covers classwork, homework, and
          activities. Enjoy web and mobile access. Schedule meetings for
          important matters. Semester-based parent-teacher meetings held. Feel
          free to contact us via phone or email.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-8 w-full mt-10">
        {contactExperienceCards.map((item, index) => (
          <ContactExperienceCard
            key={index}
            index={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactExperience;
