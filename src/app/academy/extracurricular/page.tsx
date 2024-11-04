"use client";
import {
	aerobicsCTADescription,
	aerobicsOverview,
	aerobicsSchedule,
	aerobicsSubjects,
	artCTADescription,
	artOverview,
	artSchedule,
	artSubjects,
	bakingCTADescription,
	bakingOverview,
	bakingSchedule,
	bakingSubjects,
	botanicCTADescription,
	botanicOverview,
	botanicSchedule,
	botanicSubjects,
	extracurricularHeroCarouselItems,
	extracurricularNavItems,
} from "@/data";
import { CTASchools, ExtracurricularCTA, ExtracurricularOverview, ExtracurricularSchedule, ExtracurriculurSubjects, Footer, Header, HeroCarouselNav, NavbarPlaceholder } from "@/sections";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Extracurriculur = () => {
	const [active, setActive] = useState(0);

	const animationVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
	};

	// Content map containing all data needed for each section
	const contentMap = [
		{
			overview: artOverview,
			subjects: artSubjects,
			schedule: artSchedule,
			cta: { description: artCTADescription, imgSrc: artOverview.imgSrc }
		},
		{
			overview: botanicOverview,
			subjects: botanicSubjects,
			schedule: botanicSchedule,
			cta: { description: botanicCTADescription, imgSrc: botanicOverview.imgSrc }
		},
		{
			overview: bakingOverview,
			subjects: bakingSubjects,
			schedule: bakingSchedule,
			cta: { description: bakingCTADescription, imgSrc: bakingOverview.imgSrc }
		},
		{
			overview: aerobicsOverview,
			subjects: aerobicsSubjects,
			schedule: aerobicsSchedule,
			cta: { description: aerobicsCTADescription, imgSrc: aerobicsOverview.imgSrc }
		},
		// Add new section here as needed
	];

	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
				<HeroCarouselNav
					carouselItems={extracurricularHeroCarouselItems}
					carouselNavItems={extracurricularNavItems}
					active={active}
					setActive={setActive}
				/>
				<AnimatePresence mode="wait">
					<motion.div
						key={active}
						variants={animationVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<ExtracurricularOverview overview={contentMap[active].overview} />
						<ExtracurriculurSubjects subjects={contentMap[active].subjects} />
						<ExtracurricularSchedule schedule={contentMap[active].schedule} />
						<ExtracurricularCTA
							description={contentMap[active].cta.description}
							imgSrc={contentMap[active].cta.imgSrc}
						/>
					</motion.div>
				</AnimatePresence>
				<CTASchools />
			</main>
			<Footer />
		</>
	);
};

export default Extracurriculur;
