import { AboutExploreSchool, AboutFJaris, AboutFounder, AboutMission, AboutSJaris, CoreValues, Facilities, Header } from "@/sections";
import React from "react";

const About = () => {
	return (
		<>
			<Header />
      <div className="h-[70px]" />
			<main>
				<AboutMission />
				<AboutFounder />
				<CoreValues />
        <Facilities />
        <AboutExploreSchool />
        <AboutFJaris />
        <AboutSJaris />
			</main>
		</>
	);
};

export default About;
