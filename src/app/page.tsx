"use client";

import SplashScreen from "@/components/splash-screen/splash-screen";
import {
	Discover,
	Hero,
	JoinUs,
	// Mission,
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
import Head from "next/head";
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

	return (
		<>
			<Head>
				<title>Jawahir Al Riyadh | Home</title>
				<meta
					name="description"
					content="Jawahir Al Riyadh International School"
				/>
				<meta
					name="keywords"
					content="Jawahir Al Riyadh, Jaris, International School, Riyadh, Saudi Arabia"
				/>
				<meta property="og:title" content="Jawahir Al Riyadh | Home" />
				<meta
					property="og:description"
					content="Jawahir Al Riyadh International School"
				/>
				<meta property="og:url" content="https://jawahirschool.com" />
				<meta property="og:site_name" content="Jawahir Al Riyadh" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "EducationalOrganization",
							name: "Jawahir Al Riyadh",
							url: "https://jawahirschool.com",
							address: {
								"@type": "PostalAddress",
								addressLocality: "Riyadh",
								addressCountry: "Saudi Arabia",
							},
						}),
					}}
				/>
			</Head>

			{showContent ? (
				<>
					<Header />
					<NavbarPlaceholder />
					<main className="">
						<Hero />
						<Discover />
						<JoinUs />
						{/* <Mission /> */}
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
			)}
		</>
	);
}
