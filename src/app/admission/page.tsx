import { admissionHeroCarouselItems } from "@/data";
import {
	AdmissionCTA,
	AdmissionFees,
	AdmissionMission,
	AdmissionProcedure,
	AdmissionProcedureKindergarten,
	AdmissionProcedureNotice,
	AdmissionProcedureSteps,
	Header,
	HeroCarousel,
	NavbarPlaceholder,
} from "@/sections";
import React from "react";

const Admission = () => {
	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
				<HeroCarousel carouselItems={admissionHeroCarouselItems} />
				<AdmissionProcedure />
				<AdmissionProcedureNotice />
				<AdmissionProcedureSteps />
				<AdmissionFees />
				<AdmissionMission />
				<AdmissionProcedureKindergarten />
				<AdmissionCTA />
			</main>
		</>
	);
};

export default Admission;
