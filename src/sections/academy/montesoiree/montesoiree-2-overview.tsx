import { Image } from "@nextui-org/react";

const Montesoiree2Overview = () => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<h3 className="self-start subtitle text-jaris-blue font-bold mb-2 uppercase">
				Montesoiree 2
			</h3>
			<h2 className="self-start heading-secondary text-jaris-gold mb-10">
				Welcome to Montesoiree 2!
			</h2>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<p className="subtitle text-jaris-black">
						Montessori 2 level classrooms are especially designed for age 4
						groups. Montessori class teachers are professional and highly
						trained for teaching Montessori course prepared for this age group.
						The Montessori Method helps the child to build up his personality
						and to apply his/her abilities according to his intellectual age
						group. This method discards the fixed purely verbal teaching and
						opens the door to “Active education”.
					</p>
					<p className="subtitle text-jaris-black">
						As Montessori-2 children have already been through Montessori 1 they
						are ready to learn while being active and will learn better if their
						activities are spontaneous and free, being creative and within the
						limits. Therefore the Montessori apparatus for the age group of 4 is
						divided into 4 groups.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/montesoiree2.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-[600px] h-[400px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Montesoiree2Overview;
