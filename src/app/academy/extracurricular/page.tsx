"use client";
import {
	aerobicsOverview,
	aerobicsSchedule,
	aerobicsSubjects,
	artOverview,
	artSchedule,
	artSubjects,
	bakingOverview,
	bakingSchedule,
	bakingSubjects,
	botanicOverview,
	botanicSchedule,
	botanicSubjects,
	extracurricularHeroCarouselItems,
	extracurricularNavItems,
} from "@/data";
import { ExtracurricularOverview, ExtracurricularSchedule, ExtracurriculurSubjects, Footer, Header, HeroCarouselNav, NavbarPlaceholder } from "@/sections";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Extracurriculur = () => {
	const [active, setActive] = useState(0);

	const animationVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
	};

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
					{active === 0 && (
						<motion.div
							key="art"
							variants={animationVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<ExtracurricularOverview overview={artOverview} />
							<ExtracurriculurSubjects subjects={artSubjects} />
							<ExtracurricularSchedule schedule={artSchedule}/>
						</motion.div>
					)}
					{active === 1 && (
						<motion.div
							key="botanic"
							variants={animationVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<ExtracurricularOverview overview={botanicOverview} />
							<ExtracurriculurSubjects subjects={botanicSubjects} />
							<ExtracurricularSchedule schedule={botanicSchedule}/>
						</motion.div>
					)}
					{active === 2 && (
						<motion.div
							key="botanic"
							variants={animationVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<ExtracurricularOverview overview={bakingOverview} />
							<ExtracurriculurSubjects subjects={bakingSubjects} />
							<ExtracurricularSchedule schedule={bakingSchedule}/>
						</motion.div>
					)}
					{active === 3 && (
						<motion.div
							key="botanic"
							variants={animationVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<ExtracurricularOverview overview={aerobicsOverview} />
							<ExtracurriculurSubjects subjects={aerobicsSubjects} />
							<ExtracurricularSchedule schedule={aerobicsSchedule}/>
						</motion.div>
					)}
				</AnimatePresence>
			</main>
			<Footer />
		</>
	);
};

export default Extracurriculur;
