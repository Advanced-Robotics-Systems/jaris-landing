import { sJarisCurriculumImages } from "@/data";
import { Button, Image, Link } from "@nextui-org/react";
import React from "react";

const AboutSJaris = () => {
	return (
		<div
			className="relative padding lg:px-32 md:py-32 lg:py-48 xl:py-56 flex flex-col lg:flex-row justify-between items-start gap-8 bg-cover bg-center"
			style={{
				backgroundImage: "url(/images/about/sjaris-bg.jpeg)",
			}}
		>
			<div className="absolute inset-0 bg-jaris-gold opacity-50 " />
			<div className="absolute inset-0 bg-black opacity-40 " />

			<div className="relative z-10 lg:w-2/3">
				<h1 className="heading-md font-bold text-white">2nd JARIS</h1>
				<h2 className="text-jaris-gold heading-secondary font-semibold mt-2">
					American curriculums
				</h2>
				<p className="text-bg-text mt-4 subtitle font-light">
					Girls section: Boys grade KG-5, Girls grade KG-12 <br />
					Boys section: Only boys 6-12
				</p>
				<p className="text-bg-text mt-4 leading-7 subtitle">
					Second Jawahir Al-Riyadh International School (SJARIS), an educational
					powerhouse established in 1998 with the Saudi Ministry of Education.
					Our commitment to excellence is showcased through our affiliation with
					Advance-Ed, an American Affiliation , since December 2015, SJARIS
					proudly serves as an Examination Center for College Board.
				</p>

				<div className="flex gap-4 mt-6 flex-wrap">
					<Link href="/schools/sjaris">
						<Button
							size="lg"
							variant="bordered"
							className="border-jaris-gold border-3 rounded-md lg:px-8"
						>
							<span className="subtitle text-jaris-gold font-semibold">
								Explore JARIS
							</span>
						</Button>
					</Link>

					<Link href="/schools/sjaris">
						<Button
							size="lg"
							variant="bordered"
							className="border-jaris-gold border-3 rounded-md lg:px-8"
						>
							<span className="subtitle text-jaris-gold font-semibold">
								Visit Site
							</span>
						</Button>
					</Link>

					<Link href="/contact">
						<Button
							size="lg"
							variant="solid"
							className="bg-jaris-gold rounded-md lg:px-8"
						>
							<span className="subtitle text-jaris-blue font-semibold">
								Contact Us
							</span>
						</Button>
					</Link>

					<Link href="http://admissionform.jawahirschool.com/">
						<Button
							size="lg"
							variant="solid"
							className="bg-jaris-red rounded-md lg:px-8"
						>
							<span className="subtitle text-jaris-white font-semibold">
								Apply Now
							</span>
						</Button>
					</Link>
				</div>
			</div>

			{/* Right Curriculum Section */}
			<div className="relative z-10 lg:w-1/3 flex flex-col lg:flex-row gap-4 lg:justify-end">
				<div className="p-4 flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-lg">
					<h3 className="text-white font-semibold text-lg heading-secondary uppercase">
						Curriculum
					</h3>
					<hr className="left-1/2 w-full mt-2 border-t-[1px] border-white opacity-60" />
					<div className="flex lg:flex-col gap-6 mt-4 items-center justify-center flex-wrap">
						{sJarisCurriculumImages.map((curriculum, index) => (
							<Image
								key={index}
								src={curriculum.imgSrc}
								alt={curriculum.title}
								width={90}
								className={`h-auto ${curriculum.title === 'Jawahir' ? 'rounded-full' : 'rounded-none'}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSJaris;
