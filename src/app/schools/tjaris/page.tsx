import { admissionHeroCarouselItems } from "@/data";
import {
	AdmissionFees,
	Explore,
	Footer,
	Header,
	HeroCarousel,
	NavbarPlaceholder,
	SchoolAdmissionCTA,
	TJarisOverview,
} from "@/sections";

const TJARIS = () => {
	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
				<HeroCarousel carouselItems={admissionHeroCarouselItems} />
				<TJarisOverview />
				<SchoolAdmissionCTA />
				<AdmissionFees />
				<Explore />
			</main>
			<Footer />
		</>
	);
};

export default TJARIS;