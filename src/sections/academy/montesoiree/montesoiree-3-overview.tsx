import { Image } from "@nextui-org/react";

const Montesoiree3Overview = () => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<h3 className="self-start subtitle text-jaris-blue font-bold mb-2 uppercase">
				Montesoiree 3
			</h3>
			<h2 className="self-start heading-secondary text-jaris-gold mb-10">
				Welcome to Montesoiree 3!
			</h2>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<p className="subtitle text-jaris-black">
						The Montessori prepared environment is designed to help the child in
						learning language at his own rhythm. The materials help the child
						develop an expression of organization and classification and the
						development of thought.
					</p>
					<p className="subtitle text-jaris-black">
						Montessori-3 level classrooms are especially designed for age 5
						group. Children joining Montessori-3 have already been through
						Montessori-1 and Montessori-2 and are ready to receive new
						dimensions of education.
					</p>
					<p className="subtitle text-jaris-black">
						The children coming from lower grades who are below the average
						level are being helped and assisted by Montessori teachers.
						Generally the age of the children joining Montessori -3 is 5-6
						years. This is the age, when child has a conscious mind and the
						child can touch and see materials.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/montesoiree3.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Montesoiree3Overview;
