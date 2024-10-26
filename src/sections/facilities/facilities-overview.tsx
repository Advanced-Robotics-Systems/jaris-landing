import { Image } from "@nextui-org/react";

const FacilitiesOverview = () => {
  return (
    <div className="w-full padding bg-bg-primary flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-36 lg:px-36 xl:px-52 2xl:px-72">
      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="heading-secondary font-semibold text-jaris-gold">Our Facilities</h2>
        <p className="subtitle text-jaris-black mt-4">
          At our school, we provide state-of-the-art facilities to ensure a holistic learning experience for every student. Our campus is equipped with modern labs, spacious classrooms, advanced technology, and a wide range of resources to support both academic and extracurricular pursuits. We are committed to creating a conducive environment where students can explore, learn, and grow to their fullest potential.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/images/facilities/facilities-overview-image.jpeg"
          alt="Facilities Overview"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default FacilitiesOverview;
