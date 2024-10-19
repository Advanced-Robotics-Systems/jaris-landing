import { aboutHeroCarouselItems } from "@/data";
import {
	AboutExploreSchool,
	AboutFJaris,
	AboutFounder,
	AboutMission,
	AboutSJaris,
	AboutTJaris,
	CoreValues,
	DiscoverJaris,
	Explore,
	Facilities,
	Footer,
	Header,
	HeroCarousel,
	NavbarPlaceholder,
} from "@/sections";
import React from "react";

const About = () => {
	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
				<HeroCarousel carouselItems={aboutHeroCarouselItems} />
				<AboutMission />
				<AboutFounder />
				<CoreValues />
				<Facilities />
				<AboutExploreSchool />
				<AboutFJaris />
				<AboutSJaris />
				<AboutTJaris />
				<Explore />
				<DiscoverJaris />
			</main>
			<Footer />
		</>
	);
};

export default About;
