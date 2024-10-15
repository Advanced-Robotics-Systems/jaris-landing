import { AboutFounder, AboutMission, CoreValues, Header } from "@/sections";
import React from "react";

const About = () => {
	return (
		<>
			<Header />
			<main>
				<AboutMission />
				<AboutFounder />
				<CoreValues />
			</main>
		</>
	);
};

export default About;
