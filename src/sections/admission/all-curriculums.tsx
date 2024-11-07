"use client";
import { Card, Button, CardBody, Image } from "@nextui-org/react";
import { curriculums } from "@/data";
import { motion } from "framer-motion";

const AllCurriculums = () => {
	return (
		<section className="bg-bg-primary padding lg:px-56 xl:px-72 flex flex-col items-center">
			<h2 className="self-start heading-md font-bold text-jaris-blue mb-2">
				Our Curriculums
			</h2>
			<p className="self-start subtitle text-jaris-blue-dark mb-10 lg:mb-20">
				Find exactly what you need from JARIS
			</p>
			<div className="flex flex-col items-center gap-6 lg:gap-12 w-full max-w-7xl">
				{curriculums.map((curriculum: any) => (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.1,
							ease: "easeInOut",
						}}
						viewport={{ once: true }}
						key={curriculum.id}
						className="w-full"
					>
						<Card
							isBlurred
							className="border-none bg-bg-primary/60 max-w-[1210px] m-auto"
							shadow="sm"
						>
							<CardBody>
								<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
									<div className="relative col-span-6 md:col-span-3">
										<Image
											alt="Curriculum Image"
											className="object-cover"
											height={240}
											shadow="md"
											src={curriculum.image}
											width="100%"
										/>
									</div>
									<div className="flex flex-col col-span-6 md:col-span-8">
										<h3 className="heading-secondary font-semibold text-jaris-gold mb-2">
											{curriculum.title}
										</h3>
										<p className="subtitle text-jaris-blue mb-4">
											{curriculum.description}
										</p>
										<Button
											size="lg"
											className="max-w-40 bg-jaris-blue text-jaris-white"
										>
											View Curriculum
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default AllCurriculums;
