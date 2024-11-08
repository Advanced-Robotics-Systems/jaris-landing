"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroCarousel = ({carouselItems} : {carouselItems: any}) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: any) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<div className='relative w-full lg:h-[calc(100vh-70px)] padding-b pt-10 bg-jaris-blue '>
			{/* <div className="absolute inset-0 bg-jaris-blue opacity-75" /> */}
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
					pagination={pagination}
					modules={[Autoplay, Pagination]}
					className="mySwiper cta-swiper w-full h-full"
				>
					{carouselItems.map((item: any, index: number) => (
						<SwiperSlide
							key={index}
							className="!w-[90%] md:!w-[55%] !h-[90%] md:!h-[93%]"
						>
							<div className="relative h-full w-full overflow-hidden rounded-xl">
								<div
									className="absolute inset-0 bg-cover filter brightness-75 rounded-xl scale-110"
									style={{ backgroundImage: `linear-gradient(180deg, rgba(177, 34, 31, 0.1) 10%, rgba(28, 64, 111, 1) 100%), url(${item.imgUrl})`, }}
								/>
								<div className="relative z-20 h-full padding flex flex-col items-center justify-end gap-5">
									<h1 className="title font-bold text-bg-text uppercase">{item.title}</h1>
									<p className="subtitle text-bg-primary text-center">
										{item.subtitle}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default HeroCarousel;
