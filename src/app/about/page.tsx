import { AboutExploreSchool, AboutFJaris, AboutFounder, AboutMission, CoreValues, Facilities, Header } from "@/sections";
import React from "react";

const About = () => {
	return (
		<>
			<Header />
			<main>
				<AboutMission />
				<AboutFounder />
				<CoreValues />
        <Facilities />
        <AboutExploreSchool />
        <AboutFJaris />
			</main>
		</>
	);
};

export default About;
