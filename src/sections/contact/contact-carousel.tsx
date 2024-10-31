"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import { useState } from "react";
import { ContactGetInTouch, StaffContactDetails } from "@/sections";

const ContactCarousel = ({ carouselItems }: { carouselItems: any }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="relative w-full padding-y lg:pb-36 bg-jaris-blue ">
        {/* <div className="absolute inset-0 bg-jaris-blue opacity-75" /> */}
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
          </Swiper>
        </div>
        <div className="absolute bottom-4 lg:bottom-20 flex flex-row w-full h-28 sm:h-48 items-center justify-around z-30">
          <div
            className={`basis-[30%] sm:basis-1/4 h-full rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer ${
              active
                ? "bg-jaris-gold-dark hover:bg-jaris-gold-dark/60"
                : "bg-jaris-gold hover:bg-jaris-gold/60"
            }`}
            onClick={() => setActive(false)}
          >
            <span className="mt-3 sm:mt-7 text-white/60 uppercase sm:tracking-[2px] text-[9px] sm:text-xs font-bold">
              Join Us
            </span>
            <span className="mt-3 sm:mt-8 text-white tracking-[0.75px] text-xs sm:text-sm font-medium">
              JARIS
            </span>
            <h1 className="text-white uppercase md:tracking-[4px] text-sm sm:text-xl md:text-2xl font-bold">
              Contact Us
            </h1>
          </div>
          <div
            className={`basis-[30%] sm:basis-1/4 h-full rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer ${
              !active
                ? "bg-jaris-gold-dark hover:bg-jaris-gold-dark/60"
                : "bg-jaris-gold hover:bg-jaris-gold/60"
            }`}
            onClick={() => setActive(true)}
          >
            <span className="mt-3 sm:mt-7 text-white/60 uppercase sm:tracking-[2px] text-[9px] sm:text-xs font-bold">
              Find
            </span>
            <span className="mt-3 sm:mt-8 text-white tracking-[0.75px] text-xs sm:text-sm font-medium">
              Contact
            </span>
            <h1 className="text-white uppercase md:tracking-[4px] text-sm sm:text-xl md:text-2xl font-bold">
              Staff
            </h1>
          </div>
          <div className="basis-[30%] sm:basis-1/4 h-full rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer bg-jaris-gold-dark hover:bg-jaris-gold-dark/60">
            <span className="mt-3 sm:mt-7 text-white/60 uppercase sm:tracking-[2px] text-[9px] sm:text-xs font-bold">
              Find Your
            </span>
            <span className="mt-3 sm:mt-8 text-white tracking-[0.75px] text-xs sm:text-sm font-medium">
              Access
            </span>
            <h1 className="text-white uppercase md:tracking-[4px] text-sm sm:text-xl md:text-2xl font-bold">
              My Email
            </h1>
          </div>
        </div>
      </div>
      {active ? <StaffContactDetails /> : <ContactGetInTouch />}
    </>
  );
};

export default ContactCarousel;
