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
		<div className="relative w-full h-[42vh] lg:h-[calc(100vh-70px)]  pb-10 sm:pb-20 lg:pb-36 bg-jaris-blue pt-10">
			<div className="relative z-20 w-full h-full flex flex-col items-center justify-center gap-44">
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
					className="mySwiper cta-swiper w-full h-full"
				>
					{carouselItems.map((item: any, index: number) => (
						<SwiperSlide
							key={index}
							className="!w-[90%] md:!w-[55%] !h-[80%] md:!h-[85%]"
						>
							<div className="relative h-full w-full overflow-hidden rounded-xl">
								<div
									className="absolute inset-0 bg-cover filter brightness-75 rounded-xl scale-110"
									style={{
										backgroundImage: `linear-gradient(180deg, rgba(177, 34, 31, 0.1) 10%, rgba(28, 64, 111, 1) 100%), url(${item.imgUrl})`,
									}}
								/>
								<div className="relative z-20 h-full padding flex flex-col items-center justify-end gap-0 md:gap-5">
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

			{/* Button cards */}
			<div className="absolute w-full h-[30%] md:h-[23%] bottom-4 md:bottom-10 lg:bottom-16 xl:bottom-20 flex items-center justify-around z-30">
				{carouselNavItems.map((item: any, index: number) => (
					<Card
						key={index}
						className={`basis-[22.5%] ${active===index ? "bg-jaris-gold" : "bg-jaris-gold-dark"} h-full text-jaris-blue md:p-4 lg:p-6 hover:bg-jaris-gold-dark/70 rounded-md`}
						isPressable
						onPress={() => setActive(index)}
					>
						<CardBody className="items-center justify-center overflow-hidden px-1">
              <p className="small-text text-white text-center">{item.subtitle}</p>
              <p className="w-full text-center subtitle xl:heading-secondary font-semibold text-jaris-white">{item.title}</p>
            </CardBody>
					</Card>
				))}
			</div>
		</div>
	);
};

export default HeroCarouselNav;
