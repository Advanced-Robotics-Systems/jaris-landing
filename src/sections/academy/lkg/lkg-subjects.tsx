import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";

const LKGSubjects = () => {
	return (
		<div className="padding-y bg-jaris-blue-light px-6 md:px-18 lg:px-36 xl:px-48 2xl:px-62">
			<h2 className="heading-secondary font-bold text-jaris-gold mb-6 uppercase">
				Subjects
			</h2>

			{/* Table Section */}
			<div className="mb-6 lg:mb-16 bg-white/60 rounded-lg py-2 lg:p-10">
				<h2 className="heading-secondary text-jaris-gold-dark mb-3 lg:mb-8 max-sm:px-3">
					English and Mathematics
				</h2>
				<Table
					aria-label="LKG Subjects"
					hideHeader
					className="w-full lg:w-[70%] m-auto text-jaris-blue"
				>
					<TableHeader>
						<TableColumn className="text-jaris-blue">
							Arabic and Islamic Studies
						</TableColumn>
						<TableColumn className="text-jaris-blue">English</TableColumn>
					</TableHeader>
					<TableBody>
						<TableRow className="border-b-1 border-jaris-blue-light/30">
							<TableCell className="text-base lg:text-lg">
								Name letters of the alphabet
							</TableCell>
							<TableCell className="text-base lg:text-lg">
								Phonics and blending of each letter
							</TableCell>
						</TableRow>
						<TableRow className="border-b-1 border-jaris-blue-light/30">
							<TableCell className="text-base lg:text-lg">
								Practice and write name
							</TableCell>
							<TableCell className="text-base lg:text-lg">
								Counting 20-50 objects
							</TableCell>
						</TableRow>
						<TableRow className="border-b-1 border-jaris-blue-light/30">
							<TableCell className="text-base lg:text-lg">
								Oral drill and write 1-50 and preferably up to 100
							</TableCell>
							<TableCell className="text-base lg:text-lg">
								Write phone number
							</TableCell>
						</TableRow>
						<TableRow className="border-b-1 border-jaris-blue-light/30">
							<TableCell className="text-base lg:text-lg">
								Write upper and lowercase alphabets
							</TableCell>
							<TableCell className="text-base lg:text-lg">
								Recognize and name sight words
							</TableCell>
						</TableRow>
						<TableRow className="border-b-1 border-jaris-blue-light/30">
							<TableCell className="text-base lg:text-lg">
								Name punctuation
							</TableCell>
							<TableCell className="text-base lg:text-lg">
								khalidiali@jawahirschool.com
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>

			<div className="flex max-lg:flex-col gap-6 lg:gap-16">
				<div className="flex-1 flex flex-col p-3 lg:p-6 bg-white/60 shadow-lg rounded-lg gap-3 lg:gap-8">
					<h3 className="heading-secondary text-jaris-gold-dark">
						Arabic and Islamic Studies
					</h3>
					<ol className="list-decimal pl-5 text-jaris-blue">
						<li className="subtitle">Recognize and read Arabic alphabet</li>
						<li className="subtitle">Simple supplications</li>
					</ol>
				</div>

				<div className="flex-1 flex flex-col p-3 lg:p-6 bg-white/60 shadow-lg rounded-lg gap-3 lg:gap-8">
					<h3 className="heading-secondary text-jaris-gold-dark">
						General Knowledge
					</h3>
					<p className="subtitle text-jaris-blue">
						The children are groomed to respect and be respected and valued and
						are also expected to be involved with both the school and the
						classroom. They are taught about self-care, cultural values, and
						socialize.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LKGSubjects;
