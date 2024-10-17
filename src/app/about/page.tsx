import {
	AboutExploreSchool,
	AboutFJaris,
	AboutFounder,
	AboutMission,
	AboutSJaris,
	AboutTJaris,
	CoreValues,
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
			</main>
		</>
	);
};

export default About;
