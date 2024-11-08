"use client";
import { academyHeroCarouselItems, academyNavItems } from "@/data";
import {
	AcademyLKGOverview,
	AcademyNurseryOverview,
	AcademyUKGOverview,
	CTASchools,
	Footer,
	GalleryPreview,
	Header,
	HeroCarouselNav,
	LKGSubjects,
	Montesoiree1Overview,
	Montesoiree1Programs,
	Montesoiree2Overview,
	Montesoiree2Subjects,
	Montesoiree3Overview,
	Montesoiree3Subjects,
	NavbarPlaceholder,
	UKGSubjects,
} from "@/sections";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Academy = () => {
	const [active, setActive] = useState(0);
	const router = useRouter();
	const isRouteAccessible = false;

	useEffect(() => {
		if (!isRouteAccessible) {
			router.replace("/");
		}
	}, [isRouteAccessible, router]);

	const animationVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
	};

	return (
		isRouteAccessible && (
			<>
				<Header />
				<NavbarPlaceholder />
				<main>
					<HeroCarouselNav
						carouselItems={academyHeroCarouselItems}
						carouselNavItems={academyNavItems}
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
								<UKGSubjects />
							</motion.div>
						)}
						{active === 3 && (
							<motion.div
								key="montesoiree"
								variants={animationVariants}
								initial="initial"
								animate="animate"
								exit="exit"
							>
								<Montesoiree1Overview />
								<Montesoiree1Programs />
								<Montesoiree2Overview />
								<Montesoiree2Subjects />
								<Montesoiree3Overview />
								<Montesoiree3Subjects />
							</motion.div>
						)}
					</AnimatePresence>
					<GalleryPreview />
					<CTASchools />
				</main>
				<Footer />
			</>
		)
	);
};

export default Academy;
