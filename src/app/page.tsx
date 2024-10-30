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

export default function Home() {
	return (
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
	);
}
