import { admissionHeroCarouselItems } from "@/data";
import { Header, HeroCarousel, NavbarPlaceholder } from "@/sections";
import React from "react";

const Admission = () => {
	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
				<HeroCarousel carouselItems={admissionHeroCarouselItems} />
			</main>
		</>
	);
};

export default Admission;
