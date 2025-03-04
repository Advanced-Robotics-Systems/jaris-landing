import { WhatsappWidget } from "@/components";
import { admissionHeroCarouselItems } from "@/data";
import { AdmissionFees, Explore, Footer, Header, HeroCarousel, NavbarPlaceholder, SchoolAdmissionCTA, SJarisOverview } from "@/sections";

const SJARIS = () => {
	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<WhatsappWidget />
			<main>
				<HeroCarousel carouselItems={admissionHeroCarouselItems} />
				<SJarisOverview />
				<SchoolAdmissionCTA />
				<AdmissionFees />
				<Explore />
			</main>
			<Footer />
		</>
	);
};

export default SJARIS;
