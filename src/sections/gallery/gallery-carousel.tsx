"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import { useState } from "react";
import { News } from "@/sections";

const GalleryCarousel = ({ carouselItems }: { carouselItems: any }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Carousel Starts */}
      <div className="relative w-full padding-y lg:pb-36 bg-jaris-blue ">
        {/* Slider Starts */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center gap-44">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={70}
            loop={true}
            pagination={false}
            modules={[Autoplay]}
            className="mySwiper cta-swiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            {/* Each Slide Render Starts */}
            {carouselItems.map((item: any, index: number) => (
              <SwiperSlide
                key={index}
                className="!w-[90%] md:!w-[55%] !h-[85%] md:!h-[90%]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <div
                    className="absolute inset-0 bg-cover filter brightness-75 rounded-xl scale-110"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(177, 34, 31, 0.1) 10%, rgba(28, 64, 111, 1) 100%), url(${item.imgUrl})`,
                    }}
                  />
                  <div className="relative z-20 h-full padding flex flex-col items-center justify-end gap-5">
                    <h1 className="title font-bold text-bg-text uppercase">
                      {item.title}
                    </h1>
                    <p className="subtitle text-bg-primary text-center">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Each Slide Render Ends */}
          </Swiper>
        </div>
        {/* Slider Ends */}
        {/* Horizontal Buttons Start */}
        <div className="absolute bottom-4 lg:bottom-20 flex flex-row w-full h-28 sm:h-48 items-center justify-around z-30">
          {/* First Button Starts */}
          <div
            className={`basis-[22.5%] h-full rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer ${
              active == 0
                ? "bg-jaris-gold hover:bg-jaris-gold/60"
                : "bg-jaris-gold-dark hover:bg-jaris-gold-dark/60"
            }`}
            onClick={() => setActive(0)}
          >
            <span className="mt-3 sm:mt-7 text-white/60 uppercase sm:tracking-[2px] text-[9px] sm:text-xs sm:font-bold">
              About Us
            </span>
            <span className="mt-3 sm:mt-8 text-white sm:tracking-[0.75px] text-xs sm:text-sm font-medium">
              A History of
            </span>
            <h1 className="text-white uppercase lg:tracking-[4px] text-sm sm:text-xl lg:text-2xl font-bold">
              Gallery
            </h1>
          </div>
          {/* First Button Ends */}
          {/* Second Button Starts */}
          <div
            className={`basis-[22.5%] h-full rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer ${
              active == 1
                ? "bg-jaris-gold hover:bg-jaris-gold/60"
                : "bg-jaris-gold-dark hover:bg-jaris-gold-dark/60"
            }`}
            onClick={() => setActive(1)}
          >
            <span className="mt-3 sm:mt-7 text-white/60 uppercase sm:tracking-[2px] text-[9px] sm:text-xs sm:font-bold">
              Learning
            </span>
            <span className="mt-3 sm:mt-8 text-white tracking-[0.75px] text-xs sm:text-sm font-medium">
              Our
            </span>
            <h1 className="text-white uppercase lg:tracking-[4px] text-sm sm:text-xl lg:text-2xl font-bold">
              News
            </h1>
          </div>
          {/* Second Button Ends */}
          {/* Third Button Starts */}
          <div
            className={`basis-[22.5%] h-full rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer ${
              active == 2
                ? "bg-jaris-gold hover:bg-jaris-gold/60"
                : "bg-jaris-gold-dark hover:bg-jaris-gold-dark/60"
            }`}
            onClick={() => setActive(2)}
          >
            <span className="mt-3 sm:mt-7 text-white/60 uppercase sm:tracking-[2px] text-[9px] sm:text-xs sm:font-bold">
              Enroll Online
            </span>
            <span className="mt-3 sm:mt-8 text-white tracking-[0.75px] text-xs sm:text-sm font-medium">
              Join Our
            </span>
            <h1 className="text-white uppercase lg:tracking-[4px] text-sm sm:text-xl lg:text-2xl font-bold">
              Events
            </h1>
          </div>
          {/* Third Button Ends */}
          {/* Fourth Button Starts */}
          <div
            className={`basis-[22.5%] h-full rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer ${
              active == 3
                ? "bg-jaris-gold hover:bg-jaris-gold/60"
                : "bg-jaris-gold-dark hover:bg-jaris-gold-dark/60"
            }`}
            onClick={() => setActive(3)}
          >
            <span className="mt-3 sm:mt-7 text-white/60 uppercase sm:tracking-[2px] text-[9px] sm:text-xs sm:font-bold">
              News & Events
            </span>
            <h1 className="mt-5 sm:mt-10 text-white uppercase lg:tracking-[2px] xl:tracking-[4px] text-[9px] sm:text-lg lg:text-xl font-bold">
              Announcements
            </h1>
          </div>
          {/* Fourth Button Ends */}
        </div>
        {/* Horizontal Buttons End */}
      </div>
      {active == 1 && <News />}
    </>
  );
};

export default GalleryCarousel;
