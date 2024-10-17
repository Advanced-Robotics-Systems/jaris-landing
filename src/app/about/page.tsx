import { AboutExploreSchool, AboutFJaris, AboutFounder, AboutMission, AboutSJaris, CoreValues, Facilities, Header, NavbarPlaceholder } from "@/sections";
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
			</main>
		</>
	);
};

export default About;
