"use client";
import {
	basketballCTADescription,
	basketballOverview,
	basketballSchedule,
	basketballSubjects,
	footballCTADescription,
	footballOverview,
	footballSchedule,
	footballSubjects,
	karateCTADescription,
	karateOverview,
	karateSchedule,
	karateSubjects,
	sportsHeroCarouselItems,
	sportsNavItems,
	swimmingCTADescription,
	swimmingOverview,
	swimmingSchedule,
	swimmingSubjects,
} from "@/data";
import { CTASchools, ExtracurricularCTA, ExtracurricularOverview, ExtracurricularSchedule, ExtracurriculurSubjects, Footer, Header, HeroCarouselNav, NavbarPlaceholder } from "@/sections";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Sports = () => {
	const [active, setActive] = useState(0);

	const animationVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
	};

	const contentMap = [
		{
			overview: footballOverview,
			subjects: footballSubjects,
			schedule: footballSchedule,
			cta: {
				description: footballCTADescription,
				imgSrc: footballOverview.imgSrc,
			},
		},
		{
			overview: basketballOverview,
			subjects: basketballSubjects,
			schedule: basketballSchedule,
			cta: {
				description: basketballCTADescription,
				imgSrc: basketballOverview.imgSrc,
			},
		},
		{
			overview: karateOverview,
			subjects: karateSubjects,
			schedule: karateSchedule,
			cta: { description: karateCTADescription, imgSrc: karateOverview.imgSrc },
		},
		{
			overview: swimmingOverview,
			subjects: swimmingSubjects,
			schedule: swimmingSchedule,
			cta: {
				description: swimmingCTADescription,
				imgSrc: swimmingOverview.imgSrc,
			},
		},
	];

	return (
		<>
			<Header />
			<NavbarPlaceholder />
			<main>
				<HeroCarouselNav
					carouselItems={sportsHeroCarouselItems}
					carouselNavItems={sportsNavItems}
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

export default Sports;
