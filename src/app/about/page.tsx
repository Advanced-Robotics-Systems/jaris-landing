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
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "About Us | Jawahir Al Riyadh",
	description: "Learn more about Jawahir Al Riyadh International School",
	keywords: ["Jawahir Al Riyadh", "Jaris", "International School", "Riyadh", "Saudi Arabia"],
	openGraph: {
		title: "About Us | Jawahir Al Riyadh",
		description: "Learn more about Jawahir Al Riyadh International School",
		url: "https://jawahirschool.com/about",
		siteName: "Jawahir Al Riyadh",
	},
};

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
