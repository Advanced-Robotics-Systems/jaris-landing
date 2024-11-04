"use client";
import {
	artOverview,
	artSubjects,
	extracurricularHeroCarouselItems,
	extracurricularNavItems,
} from "@/data";
import { ExtracurricularOverview, ExtracurriculurSubjects, Footer, Header, HeroCarouselNav, NavbarPlaceholder } from "@/sections";
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
							key="nursery"
							variants={animationVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<ExtracurricularOverview overview={artOverview} />
							<ExtracurriculurSubjects subjects={artSubjects} />
						</motion.div>
					)}
				</AnimatePresence>
			</main>
			<Footer />
		</>
	);
};

export default Extracurriculur;
