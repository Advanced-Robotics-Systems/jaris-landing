"use client"
import { WhatsappWidget } from "@/components";
import { examPolicyHeroCarouselItems } from "@/data";
import {
  CTASchools,
	CurriculumDistribution,
	ExamNotice,
	ExamPolicies,
	ExamPolicyOverview,
	ExamRules,
	Footer,
	Header,
	HeroCarousel,
	NavbarPlaceholder,
} from "@/sections";
import React from "react";

const ExamPolicy = () => {
	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<WhatsappWidget />
			<main>
				<HeroCarousel carouselItems={examPolicyHeroCarouselItems} />
				<ExamNotice />
				<ExamPolicyOverview />
				<ExamPolicies />
				<ExamRules />
				<CurriculumDistribution />
        <CTASchools />
			</main>
			<Footer />
		</>
	);
};

export default ExamPolicy;
