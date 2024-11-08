"use client";

import SplashScreen from "@/components/splash-screen/splash-screen";
import {
	Discover,
	Hero,
	JoinUs,
	Mission,
	CTACommunity,
	Experience,
	Counts,
	CTASchools,
	HomeGallery,
	Explore,
	DiscoverJaris,
	Header,
	NavbarPlaceholder,
	Footer,
} from "@/sections";
import { useState, useEffect } from "react";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const splashTimer = setTimeout(() => {
			setIsLoading(false);
			setTimeout(() => setShowContent(true), 500);
		}, 300);

		return () => clearTimeout(splashTimer);
	}, []);

	return showContent ? (
		<>
			<Header />
			<NavbarPlaceholder />
			<main className="">
				<Hero />
				<Discover />
				<JoinUs />
				<Mission />
				<CTACommunity />
				<Experience />
				<Counts />
				<CTASchools />
				<HomeGallery />
				<Explore />
				<DiscoverJaris />
			</main>
			<Footer />
		</>
	) : (
		<SplashScreen isLoading={isLoading} />
	);
}
