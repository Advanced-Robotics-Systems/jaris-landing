"use client";
import { academyNurseryNavItems, admissionHeroCarouselItems } from "@/data";
import {
	AcademyLKGOverview,
	AcademyNurseryOverview,
	AcademyUKGOverview,
	Footer,
	Header,
	HeroCarouselNav,
	LKGSubjects,
	NavbarPlaceholder,
} from "@/sections";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Academy = () => {
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
					carouselItems={admissionHeroCarouselItems}
					carouselNavItems={academyNurseryNavItems}
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
						<AcademyNurseryOverview />
					</motion.div>
				)}
				{active === 1 && (
					<motion.div
						key="lkg"
						variants={animationVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<AcademyLKGOverview />
						<LKGSubjects />
					</motion.div>
				)}
				{active === 2 && (
					<motion.div
						key="ukg"
						variants={animationVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<AcademyUKGOverview />
					</motion.div>
				)}
        </AnimatePresence>
			</main>
			<Footer />
		</>
	);
};

export default Academy;
