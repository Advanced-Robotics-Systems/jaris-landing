import { Image } from "@nextui-org/react";

const AcademyNurseryOverview = () => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<h3 className="self-start subtitle text-jaris-blue font-bold mb-2 uppercase">
				Policies
			</h3>
			<h2 className="self-start heading-secondary text-jaris-gold mb-10">
				Examination system in JARIS
			</h2>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<p className="subtitle text-jaris-black">
						Nursery Classrooms are especially designed for the 3 years old kids.
						The classrooms incorporate themes and ideas to make the environment
						comfortable and suitable for this age group and the children don’t
						feel away from home once they enter the classes. Besides, the rooms
						are equipped with the most advanced aiding technology to support the
						stress-free educational activities.
					</p>
					<p className="subtitle text-jaris-black mt-4">
						Children’s delicate nature, their physical and emotional well-being
						require expert babysitters and remains top priority for the
						teachers. The professional teachers develop a strong rapport with
						the students through offering a motherly care and the children start
						feeling safe and secure with the teachers. This gives same feeling
						as if they are with their mothers and siblings.
					</p>
					<p className="subtitle text-jaris-black mt-4">
						Our well-structured curriculum involves them in the activities that
						hone their fine motor skills, widen their exposure, provoke their
						natural curiosity and drive the fragile minds towards critical
						thinking, exploring and learning. Less paper work and more
						engagement of minds, hearts and limbs develop the young learners
						into inquirers, knowledgeable, thinkers, communicators, principled,
						open-minded, caring, risk takers and reflective individuals.
					</p>
					<p className="subtitle text-jaris-black mt-4">
						The teaching instructions are blended with the use of English
						language so the students become familiarized with a language which
						will ultimately take over prime position and consolidate their
						understanding capability for future educational programs.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/nursery.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default AcademyNurseryOverview;
