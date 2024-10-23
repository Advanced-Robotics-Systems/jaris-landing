"use client";
import { admissionKindergartenAgeGroups } from "@/data";
import { ICONS } from "@/utils/icons";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
	Image,
} from "@nextui-org/react";

const tableColumns = [
	{
		key: "grade",
		label: "Grade",
	},
	{
		key: "age",
		label: "Age",
	},
];

const AdmissionProcedureKindergarten = () => {
	return (
		<div className="padding bg-jaris-white flex flex-col gap-16 lg:px-64 xl:px-80 2xl:px-96">
			{/* Top Section */}
			<div className="flex flex-col xl:flex-row gap-8 items-center justify-between">
				{/* Text Content */}
				<div className="xl:w-1/2">
					<h3 className="subtitle text-jaris-blue font-semibold">
						Admission Procedure
					</h3>
					<h2 className="heading-secondary text-jaris-gold font-semibold">
						Admission in Kindergarten
					</h2>
					<p className="subtitle text-jaris-black mt-4">
						As Jawahir Al-Riyadh International School pursues an International
						Curriculum, we prefer and encourage parents to enroll students at an
						early age. Our system of education requires at least 3 years of
						pre-schooling in order for students to be adequately fluent in
						English language prior to promoting to grade I (one).
					</p>
					<p className="subtitle text-jaris-black mt-4">
						The parents interested to admit their children in Nursery or
						Montessori grades need to bring their children directly for
						interview and physical assessment at the time of admission along
						with the copies of birth certificate (in order to verify the date of
						birth) and vaccination card.
					</p>
				</div>

				{/* Image */}
				<div className="lg:w-1/2 flex justify-center">
					<Image
						src="/images/admission/admission-kindergarten-img.jpeg"
						alt="Admission in Kindergarten"
						width={400}
						height={300}
						className="rounded-lg"
					/>
				</div>
			</div>

			{/* Table Section */}
			<Table
				aria-label="Kindergarten Grades and Ages"
				removeWrapper
				className="rounded-lg overflow-hidden bg-bg-primary xl:w-2/3 self-center"
			>
				<TableHeader columns={tableColumns}>
					{(column) => (
						<TableColumn
							key={column.key}
							className="bg-bg-text text-jaris-blue font-bold p-4"
						>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>
				<TableBody items={admissionKindergartenAgeGroups}>
					{(item) => (
						<TableRow
							key={item.grade}
							className="border-b-[0.01rem] border-[#93C5FD99]"
						>
							{(columnKey) => (
								<TableCell className="bg-bg-primary text-jaris-blue p-4 ">
									<span className="lg:text-base">
										{getKeyValue(item, columnKey)}
									</span>
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			{/* Important Notes */}
			<ul className="space-y-4 text-jaris-black mt-6">
				<li className="flex items-start gap-3">
					<div className="flex-shrink-0 text-jaris-gold">
						{ICONS.check_circle}
					</div>
					<span className="subtitle">
						A screening interview with the Principal, (if needed) will be
						conducted by the Principal himself and his decision will be final.
					</span>
				</li>
				<li className="flex items-start gap-3">
					<div className="flex-shrink-0 text-jaris-gold">
						{ICONS.check_circle}
					</div>
					<span className="subtitle">
						JARIS cannot guarantee the admission if the documents mentioned
						above are not presented.
					</span>
				</li>
			</ul>

			{/* Caution Section */}
			<div className="bg-[#FFF3E1] p-6 mt-8 rounded-lg border border-[#DD8F27]">
				<div className="flex items-start gap-3">
					<span className="text-red-600 font-semibold subtitle">{ICONS.caution}</span>
					<div className="flex flex-col gap-2">
						<div className="font-semibold text-jaris-red subtitle">CAUTION:</div>
						<div className="text-jaris-blue small-text">
							JARIS reserves the right to deny enrolments to any applicants at
							any time during the process in case there are reasons to believe
							that enrolment would not be in the best interest of the applicant
							or the school. As soon as the above documents are received along
							with the prescribed fee, JARIS will take up the matter with the
							concerned authorities in the Education Department (Ministry of
							Education) and in case the admission is not approved, JARIS will
							not be obligated to grant the admission and in this case the fee
							will be refunded.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdmissionProcedureKindergarten;
