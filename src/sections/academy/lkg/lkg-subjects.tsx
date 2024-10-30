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
		<div className="padding bg-jaris-blue-light lg:px-36 xl:px-48 2xl:px-62">
			<h2 className="heading-secondary font-bold text-jaris-gold mb-6 uppercase">
				Subjects
			</h2>

			{/* Table Section */}
			<div className="mb-8 bg-white/60 rounded-lg p-2 lg:p-10">
				<h2 className="heading-secondary text-jaris-gold-dark mb-6">
					English and Mathematics
				</h2>
				<Table
					aria-label="LKG Subjects"
					hideHeader
					className="w-full lg:w-[70%] m-auto"
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
				<div className="flex-1 flex flex-col p-1 lg:p-6 bg-white/60 shadow-lg rounded-lg">
					<h3 className="heading-secondary text-jaris-gold-dark">
						Arabic and Islamic Studies
					</h3>
					<ol className="list-decimal pl-5 mt-4">
						<li className="subtitle">Recognize and read Arabic alphabet</li>
						<li className="subtitle">Simple supplications</li>
					</ol>
				</div>

				<div className="flex-1 flex flex-col p-1 lg:p-6 bg-white/60 shadow-lg rounded-lg">
					<h3 className="heading-secondary text-jaris-gold-dark">
						General Knowledge
					</h3>
					<p className="subtitle mt-4">
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
