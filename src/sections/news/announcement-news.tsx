import { Button } from "@nextui-org/react";
import Image from "next/image";
import rightImage from "@/../public/images/gallery/announcements/announcement-news-image.jpeg";

const AnnouncementNews = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between padding max-lg:gap-y-6">
      {/* Left Side Starts */}
      <div className="basis-2/5 flex flex-col gap-y-20 max-lg:order-2">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-jaris-gold font-semibold">
            News
          </h1>
          <p className="text-jaris-blue text-sm sm:text-base text-justify">
            We have recently developed & uploaded our new website which is
            available for your review. We would very much appreciate your
            sharing the views about the school and sending them to the concerned
            VP&apos;s which will be posted on our website. The space is limited
            and the writing should not exceed 200 words. We will be uploading
            all views in a series and please do not be disappointed if it does
            not appear immediately but definitely it will find its place in due
            course of time.
          </p>
        </div>
        <Button
          size="lg"
          radius="sm"
          className="bg-jaris-gold text-lg text-bg-text font-bold w-3/5 sm:w-1/2"
        >
          Explore News
        </Button>
      </div>
      {/* Left Side Ends */}
      {/* Right Side Starts */}
      <div className="basis-1/2 min-h-60 sm:min-h-72 md:min-h-96 relative max-lg:order-1">
        <Image
          src={rightImage}
          alt="Computer Image"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AnnouncementNews;
