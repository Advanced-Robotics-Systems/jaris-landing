import { Image } from "@nextui-org/react";

const Montesoiree1Overview = () => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<h3 className="self-start subtitle text-jaris-blue font-bold mb-2 uppercase">
      Montesoiree 1
			</h3>
			<h2 className="self-start heading-secondary text-jaris-gold mb-10">
				Welcome to Montesoiree 1!
			</h2>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<p className="subtitle text-jaris-black">
						“Montessori” has become a household word today. In the Montessori
						school/classroom teachers’/directress’ task is to “stimulate life”
						in the child, leaving him/her free to develop in a selected
						environment. In other words, the child is helped to teach himself,
						unlike the task of the normal teachers who imparts knowledge only.
						From the age of 2 ½ years onwards child is forming his basic
						personality, he is forming his will, his memory and his habits. At
						this age his muscular coordination has been brought under the
						control of the will. In Montessori classrooms, children find their
						satisfaction from learning, this is play to them.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/montesoiree1.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Montesoiree1Overview;
