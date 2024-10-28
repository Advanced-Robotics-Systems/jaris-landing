import { Image } from "@nextui-org/react";

const ExamPolicyOverview = () => {
  return (
    <div className="w-full padding bg-bg-primary flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-36 lg:px-36 xl:px-52 2xl:px-72">
      {/* Text Section */}
      <div className="flex-1">
        <h3 className="subtitle font-semibold text-jaris-blue">Policies</h3>
        <h2 className="heading-secondary font-semibold text-jaris-gold">Examination system in JARIS</h2>
        <p className="subtitle text-jaris-black mt-4">
          The issue of standardizing examination is a chronic one and was being always discussed at different forums but the educationists always had different perceptions and paradigms to assess the students.
        </p>
        <p className="subtitle text-jaris-black mt-4">
          At the present time, summative type of examination is mostly in practice and international boards mainly depend on the results derived from summative examination. Jawahir Al-Riyadh International Schools (JARISs) have been engaged in preparing a feasibility study for the last several years in order to develop an absolute examination policy suiting to different levels and addressing all the issues which make the examination difficult, unexciting, fatiguing and horrible.
        </p>
        <p className="subtitle text-jaris-black mt-4">
          Our professionals conducted several surveys, interviews, and analyses prior to composing an applicable examination policy.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/images/exam/exam-policy-overview-image.jpeg"
          alt="Examination system in JARIS"
          width={500}
          height={300}
          className="rounded-lg object-cover hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ExamPolicyOverview;
