"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardBody } from "@nextui-org/react";

const HeroCarouselNav = ({
	carouselItems,
  carouselNavItems,
  active,
	setActive,
}: {
	carouselItems: any;
  carouselNavItems: any;
  active: number;
	setActive: (index: number) => void;
}) => {


	return (
		<div className="relative w-full lg:h-[calc(100vh-70px)] padding-y lg:pb-36 bg-jaris-blue">
			<div className="relative z-20 w-full flex flex-col items-center justify-center gap-44">
				<Swiper
					slidesPerView={"auto"}
					centeredSlides={true}
					speed={1500}
					autoplay={{
						delay: 4500,
						disableOnInteraction: true,
					}}
					spaceBetween={70}
					loop={true}
					modules={[Autoplay, Pagination]}
					className="mySwiper cta-swiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
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

			{/* Yellow clickable cards */}
			<div className="absolute w-full padding-x lg:px-36 xl:px-48 bottom-8 lg:bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center flex-wrap gap-4 z-30">
				{carouselNavItems.map((item: any, index: number) => (
					<Card
						key={index}
						className={`${active===index ? "bg-jaris-gold-dark" : "bg-jaris-gold"} text-jaris-blue max-sm:min-w-36 flex-1 md:p-4 lg:p-6 lg:h-[140px] xl:h-[180px] hover:bg-jaris-gold/70`}
						isPressable
						onPress={() => setActive(index)}
					>
						<CardBody className="items-center justify-center overflow-hidden">
              <p className="small-text text-white">{item.subtitle}</p>
              <p className="subtitle xl:heading-secondary font-semibold text-jaris-white">{item.title}</p>
            </CardBody>
					</Card>
				))}
			</div>
		</div>
	);
};

export default HeroCarouselNav;
