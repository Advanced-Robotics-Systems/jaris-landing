"use client";
import { motion } from "framer-motion";

const Mission = () => {
	return (
		<div className="h-screen max-md:h-[70vh] padding bg-bg-text flex items-center justify-center">
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				viewport={{once: true}}
				className="w-full md:w-[80%] lg:w-[60%] text-jaris-blue text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-wide"
			>
				JARIS strives to cultivate a community where integrity, enthusiasm, and
				collaboration are at the heart of both teaching and learning, preparing
				our students for meaningful lives and purposeful futures beyond the
				classroom.
			</motion.p>
		</div>
	);
};

export default Mission;
