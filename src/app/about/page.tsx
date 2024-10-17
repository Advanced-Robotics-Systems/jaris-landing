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
	Header,
	NavbarPlaceholder,
} from "@/sections";
import React from "react";

const About = () => {
	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
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
		</>
	);
};

export default About;
