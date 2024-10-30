"use client";
import { academyNurseryNavItems, admissionHeroCarouselItems } from "@/data";
import {
	AcademyLKGOverview,
	AcademyNurseryOverview,
	AcademyUKGOverview,
	Footer,
	Header,
	HeroCarouselNav,
	NavbarPlaceholder,
} from "@/sections";
import { useState } from "react";

const Academy = () => {
	const [active, setActive] = useState(0);

	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
				<HeroCarouselNav
					carouselItems={admissionHeroCarouselItems}
					carouselNavItems={academyNurseryNavItems}
					active={active}
					setActive={setActive}
				/>
				{active === 0 && (
					<>
						<AcademyNurseryOverview />
					</>
				)}
				{active === 1 && (
					<>
						<AcademyLKGOverview />
					</>
				)}
				{active === 2 && (
					<>
						<AcademyUKGOverview />
					</>
				)}
			</main>
			<Footer />
		</>
	);
};

export default Academy;
