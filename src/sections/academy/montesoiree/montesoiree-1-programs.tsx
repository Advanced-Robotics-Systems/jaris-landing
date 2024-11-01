import { montesoiree1Programs } from "@/data";

const Montesoiree1Programs = () => {
	return (
		<div className="padding bg-jaris-blue lg:px-36 xl:px-48 2xl:px-62 flex flex-col lg:flex-row gap-10">
			{/* Left Section */}
			<div className="lg:w-1/3">
				<h3 className="heading-secondary text-jaris-gold font-bold uppercase mb-4">
					Programs
				</h3>
				<p className="text-jaris-white subtitle leading-relaxed">
					Montessori program is well-rounded and the child has the opportunity
					to do many activities alone or with the companionship of others. There
					are many opportunities for self-expression including rhythmic
					exercises, clay, crayons, scissors, paste, and paper.
				</p>
			</div>

			{/* Right Section - Programs List */}
			<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
				{montesoiree1Programs.map((program, index) => (
					<div key={index} className="text-jaris-white">
						<h4 className="text-jaris-gold font-semibold subtitle mb-2">
							{program.title}
						</h4>
						<p className="subtitle leading-relaxed">
							{program.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Montesoiree1Programs;
