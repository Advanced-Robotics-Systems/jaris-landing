import { AboutExploreSchool, AboutFJaris, AboutSJaris, AboutTJaris, DiscoverJaris, Explore, Footer, Header, NavbarPlaceholder } from "@/sections";
import React from "react";

const School = () => {
	return (
		<>
			<Header />
      <NavbarPlaceholder />
			<main>
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

export default School;
