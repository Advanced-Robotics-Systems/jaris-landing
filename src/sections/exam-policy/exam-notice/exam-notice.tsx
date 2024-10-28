import { FaExclamationTriangle } from "react-icons/fa";
import { Image } from "@nextui-org/react";

const ExamNotice = () => {
  return (
    <div className="padding bg-bg-primary flex items-center justify-between">
      {/* Inner Notice Section */}
      <div className="flex items-center justify-between bg-jaris-red-dark rounded-lg p-6 w-full">
        {/* Left Section: Icon and Text */}
        <div className="flex items-center gap-4">
          <FaExclamationTriangle className="text-jaris-white text-3xl" />
          <div>
            <p className="text-white font-semibold subtitle">NOTIFICATION:</p>
            <p className="text-white">
              The examination policy is being revisited due to changes in semester systems by the MOE.
            </p>
          </div>
        </div>

        {/* Right Section: Image */}
        <div>
          <Image
            src="/images/exam/exam-notice.jpeg"
            alt="Notification Image"
            width={80}
            height={80}
            className="hidden lg:block rounded-lg object-cover flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ExamNotice;
