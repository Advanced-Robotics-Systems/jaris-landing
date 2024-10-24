import { Button, Image, Card } from "@nextui-org/react";

const AdmissionCTA = () => {
  return (
    <div className="padding bg-bg-primary grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:py-36 lg:px-64 xl:px-80 2xl:px-96">
      {/* Classera Section */}
      <Card className="bg-jaris-blue text-jaris-white shadow-lg flex-row h-full">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col justify-between w-2/3 p-6">
          <div>
            <h3 className="heading-secondary font-semibold">Classera</h3>
            <p className="subtitle mt-4">Login Classera Here</p>
          </div>
          <div className="mt-6">
            <Button
              size="lg"
              as="a"
              href="#"
              radius="full"
              className="border border-jaris-white text-jaris-white bg-jaris-white/20"
            >
              Login Classera
            </Button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-1/3 flex justify-center items-center p-4">
          <Image
            src="/images/admission/classera.png"
            alt="Classera Placeholder Image"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </Card>

      {/* Curriculum Section */}
      <Card className="bg-jaris-blue text-jaris-white shadow-lg flex-row flex-wrap h-full">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col justify-between w-2/3 p-6">
          <div>
            <h3 className="heading-secondary font-semibold">Curriculum</h3>
            <p className="subtitle mt-4">View comprehensive list of our curriculums</p>
          </div>
          <div className="mt-6">
            <Button
              size="lg"
              as="a"
              href="#"
              radius="full"
              className="border border-jaris-white text-jaris-white bg-jaris-white/20"
            >
              View Curriculum
            </Button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-1/3 flex justify-center items-center p-4">
          <Image
            src="/images/admission/curriculum.jpeg"
            alt="Curriculum Placeholder Image"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </Card>

      {/* Join Us Section */}
      <Card className="lg:col-span-2 bg-jaris-blue text-jaris-white shadow-lg flex-row flex-wrap h-full">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col justify-between w-2/3 p-6">
          <div>
            <h3 className="heading-secondary font-semibold">Join us</h3>
            <p className="subtitle mt-4">Explore JARIS and find your place with us.</p>
          </div>
          <div className="mt-6 flex gap-4">
            <Button
              size="lg"
              as="a"
              href="#"
              radius="full"
              className="border border-jaris-white text-jaris-white bg-jaris-white/20"
            >
              View FAQs
            </Button>
            <Button
              size="lg"
              as="a"
              href="#"
              radius="full"
              className="bg-jaris-gold text-jaris-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-1/3 flex justify-center items-center p-4">
          <Image
            src="/images/admission/curriculum.jpeg"
            alt="Join Us Placeholder Image"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
};

export default AdmissionCTA;
