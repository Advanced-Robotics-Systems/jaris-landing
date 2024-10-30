const UKGSubjects = () => {
	return (
		<div className="padding-y bg-jaris-blue-light px-6 md:px-18 lg:px-36 xl:px-48 2xl:px-62">
			<h2 className="heading-secondary font-bold text-jaris-gold mb-6 uppercase">
				Subjects
			</h2>

			{/* Table Section */}
			<div className="mb-6 lg:mb-16 bg-white/60 rounded-lg p-3 lg:p-6">
				<h2 className="heading-secondary text-jaris-gold-dark mb-3 lg:mb-6">
					General Knowledge
				</h2>
				<p className="subtitle text-jaris-blue">
					Family socialization, community help, neighborhood, healthy and
					un-healthy food, activities and sports, classroom ethics and
					discipline.
				</p>
			</div>

			<div className="flex max-lg:flex-col gap-6 lg:gap-16">
				<div className="flex-1 flex flex-col p-3 lg:p-6 bg-white/60 shadow-lg rounded-lg gap-3 lg:gap-8">
					<h3 className="heading-secondary text-jaris-gold-dark">
						English and Mathematics
					</h3>
					<ol className="list-decimal pl-5 text-jaris-blue">
						<li className="subtitle">
							Blending sounds of consonant and vowels
						</li>
						<li className="subtitle">Punctuation and sentence making</li>
						<li className="subtitle">
							Reading practice and additional vocabulary
						</li>
						<li className="subtitle">
							Fully comprehending numbers, addition and subtraction up to two
							digits
						</li>
					</ol>
				</div>

				<div className="flex-1 flex flex-col p-3 lg:p-6 bg-white/60 shadow-lg rounded-lg gap-3 lg:gap-8">
					<h3 className="heading-secondary text-jaris-gold-dark">
						Arabic and Islamic Studies
					</h3>
					<ol className="list-decimal pl-5 text-jaris-blue">
						<li className="subtitle">
							Blending of 3-5 letters words. Reading and basics of sentence
							making.
						</li>
						<li className="subtitle">Simple supplications</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default UKGSubjects;
