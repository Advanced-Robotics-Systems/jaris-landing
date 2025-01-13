"use client";
import { motion } from "framer-motion";

const JoinUs = () => {
	return (
		<div className="relative md:h-[60vh] lg:h-[75vh] flex items-center justify-center overflow-hidden">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-110"
				src="/videos/discover-jaris-bg.mp4"
				autoPlay
				loop
				muted
			/>
			<div className="absolute inset-0 bg-jaris-blue opacity-75 " />
			<div className="relative z-20 title font-bold flex gap-3 md:gap-5">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
					className="text-jaris-gold"
				>
					JOIN US AT
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
					className="text-white"
				>
					JARIS
				</motion.div>
			</div>
		</div>
	);
};

export default JoinUs;
