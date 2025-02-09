"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { HomeHeroSlide } from "@/components";
import { homeCarouselItems } from "@/data";

const Hero = () => {
	return (
		<div className="relative h-[calc(100vh-70px)]">
			<Swiper
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				speed={2500}
				pagination={{
					dynamicBullets: true,
				}}
				// allowTouchMove={false}
				loop={true}
				modules={[Pagination, Autoplay]}
				className="relative mySwiper h-full"
			>
				{homeCarouselItems.map((item: any, index: number) => (
					<SwiperSlide key={index} className="h-full">
						<HomeHeroSlide
							subtitle={item.subtitle}
							subtitleColored={item.subtitleColored}
							title={item.title}
							imgUrl={item.imgUrl}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Hero bottom texts */}
			<div className="absolute w-full bottom-2 md:bottom-4 lg:bottom-8 max-sm:right-2 px-6 lg:px-10 z-10 flex items-start justify-between">
				<div className="small-text md:subtitle text-jaris-white w-[40%] lg:w-[20%]">
					An independent, college preparatory day school for grades KG to 12,
					with separate campuses for boys and girls.
				</div>
				<div className="small-text md:subtitle text-jaris-white w-[30%] text-end">
					#INSPIRING_FUTURES
				</div>
			</div>
		</div>
	);
};

export default Hero;
