import Image from "next/image";
import Link from "next/link";
import resultImage from "@/../public/images/gallery/announcements/online-result-image.jpeg";

const OnlineResult = () => {
  return (
    <div className="relative flex justify-between bg-bg-primary padding md:px-20 lg:px-28 xl:px-40 2xl:px-[15%]">
      <div className="relative w-full sm:w-3/5 h-[405px] lg:h-[610px] z-0">
        <Image
          src={resultImage}
          alt="Background Image"
          objectFit="cover"
          className="rounded-lg"
          fill
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#B1721F0F] to-[#1C406F99]" />
      </div>
      {/* Right Side Starts */}
      <div className="absolute left-12 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-16 md:-translate-x-20 lg:-translate-x-28 xl:-translate-x-40 2xl:-translate-x-[30%] bg-jaris-white flex flex-col w-[calc(100%-96px)] sm:w-1/2 h-fit px-6 py-4 sm:px-12 sm:py-8 gap-y-2 md:gap-y-3 lg:gap-y-4 rounded z-10">
        <span className="text-sm sm:text-lg text-jaris-blue">Examination</span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-jaris-red-light font-extrabold">
          Online Result
        </h1>
        <p className="text-xs sm:text-base text-jaris-blue text-justify">
          The result of mid-term for session 2017-2018 uploaded on the website.
          You will check your result by login from the student code. From the
          following link:{" "}
          <Link
            href={"http://result.jawahirschool.com/"}
            target="_blank"
            className="underline text-jaris-red"
          >
            Online Result
          </Link>
        </p>
      </div>
      {/* Right Side Ends */}
    </div>
  );
};

export default OnlineResult;
