import { Button, Card, CardBody } from "@nextui-org/react";

const SchoolAdmissionCTA = () => {
  return (
    <div className="padding bg-jaris-white grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:px-64 xl:px-80 2xl:px-96">
      <Card className="bg-jaris-white shadow-lg p-6">
        <div className="flex flex-col items-start gap-4">
          <h3 className="heading-secondary text-jaris-blue font-semibold">Interested?</h3>
          <p className="subtitle text-jaris-black">
            To learn about the admission procedure, check Admission. Or you can apply now online.
          </p>
          <div className="flex flex-wrap gap-4 w-full">
            <Button
              size="lg"
              as="a"
              href="#"
              radius="full"
              className="flex-1 min-w-[150px] border border-jaris-gold text-jaris-gold bg-jaris-gold/20"
            >
              Admission Procedure
            </Button>
            <Button
              size="lg"
              as="a"
              href="#"
              radius="full"
              className="flex-1 min-w-[150px] bg-jaris-gold text-jaris-white"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Card>

      <Card className="bg-jaris-blue text-jaris-white shadow-lg p-6">
        <CardBody className="flex flex-col items-start gap-4">
          <h3 className="heading-secondary font-semibold">We are available!</h3>
          <ul className="subtitle">
            <li className="flex justify-between w-full">
              <span>Sunday</span>
              <span>6:30 AM – 12:30 PM</span>
            </li>
            <li className="flex justify-between w-full">
              <span>Monday</span>
              <span>6:30 AM – 12:30 PM</span>
            </li>
            <li className="flex justify-between w-full">
              <span>Tuesday</span>
              <span>6:30 AM – 12:30 PM</span>
            </li>
            <li className="flex justify-between w-full">
              <span>Wednesday</span>
              <span>6:30 AM – 12:30 PM</span>
            </li>
            <li className="flex justify-between w-full">
              <span>Thursday</span>
              <span>6:30 AM – 12:30 PM</span>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default SchoolAdmissionCTA;
