import { Image } from "@nextui-org/react";

const AcademyLKGOverview = () => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<h3 className="self-start subtitle text-jaris-blue font-bold mb-2 uppercase">
				Lower Kindergarten
			</h3>
			<h2 className="self-start heading-secondary text-jaris-gold mb-10">
				Welcome to LKG
			</h2>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<p className="subtitle text-jaris-black">
						Lower Kindergarten (LKG) classrooms are also especially designed for
						age 4 group. LKG class teachers are professional, highly trained and
						specialized for teaching kindergarten courses prepared for this age
						group. High quality early age teaching program helps children to
						think creatively so they may succeed in this complex and advancing
						world. Learning environment supports the development of free
						thinking and a place where children can let their imagination roam
						while feeling reassured and protected.
					</p>
					<p className="subtitle text-jaris-black mt-4">
						The philosophy of teaching kinders (LKG) is to keep the curriculum
						simple and at the same time develop strong basics. The LKG English
						program takes Nursery students to one step advance level as they
						become familiar with routine words of daily usage. They start
						conversing with the teachers and multi-national fellows in English
						language. Most of the following listed are LKG skills and a few are
						straight up for Scope and Sequences later.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/lkg.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default AcademyLKGOverview;
