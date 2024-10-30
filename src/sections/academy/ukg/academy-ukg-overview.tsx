import { Image } from "@nextui-org/react";

const AcademyUKGOverview = () => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<h3 className="self-start subtitle text-jaris-blue font-bold mb-2 uppercase">
				Upper Kindergarten
			</h3>
			<h2 className="self-start heading-secondary text-jaris-gold mb-10">
				Welcome to UKG
			</h2>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<p className="subtitle text-jaris-black">
						Upper Kindergarten Section receives the children with the assumption
						that the children have already been through the early age
						kindergarten program prepared for last two years (Nursery and LKG)
						and are ready to receive new dimensions of education and life. The
						teachers for Upper Kindergarten Section (UKG) got special training
						for handling year 5 age group. They may help and assist some average
						students coming from lower grades but their main specialization lies
						with UKG specialty of program.
					</p>
					<p className="subtitle text-jaris-black mt-4">
						The UKG program is cognitive based, learning through active
						exploration in an environment which is fully equipped with the
						materials, provides opportunities to play, converse and negotiate
						with other fellows in English language. The classrooms are designed
						to encourage curiosity, exploration and problem solving in an
						atmosphere of warmth, affection, and respect for each child.
					</p>
					<p className="subtitle text-jaris-black mt-4">
						The children are encouraged to socialize with total exposure to
						freedom of expression in a friendly atmosphere. They are encouraged
						to work individually or collaboratively and participate actively in
						experiences which include math, science, social studies, creative
						art etc etc. All interrelated problems of the child&apos;s growth and
						development are considered whether it is intellectual, social,
						emotional, physical and creative. The UKG program of instructions
						guarantees to cover the following skills at the end of the academic
						year but not limited to these only.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/ukg.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default AcademyUKGOverview;
