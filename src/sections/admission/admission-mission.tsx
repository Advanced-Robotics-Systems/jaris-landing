import { ICONS } from "@/utils/icons";

const AdmissionMission = () => {
	const missionItems = [
		"A Completed Admission Form",
		"Mother's & Father's valid Passport (copy)",
		"Student's valid Passport (copy)",
		"Mother's & Father's valid Iqama (copy)",
		"Student's valid Iqama (copy). (Present original for verification)",
		"Copy of Birth Certificate. (Present original for verification)",
		"Copy of the vaccination Certificate. (Present original for verification)",
		"An owing letter from the sponsor",
		"A Statement from the Guardian mentioning Reasons for Admission in the School",
		"Five copies of the very recent color photographs",
		"Residence Map. (Location)",
		"School Leaving Certificate & All Previous years Progress Reports (Results Cards) starting grade I from the previous School & duly attested from the Ministry of Foreign Affairs and Saudi Embassy if the student is coming from abroad",
	];

	return (
		<div className="lg:min-h-screen padding lg:px-64 xl:px-80 2xl:px-96 bg-bg-primary flex flex-col gap-12 justify-center">
			{/* Title */}
			<div>
				<h3 className="subtitle text-jaris-gold font-semibold">
					Admission Procedure
				</h3>
				<h2 className="heading-md text-jaris-blue font-semibold">
					Admission Checklist
				</h2>
			</div>

			{/* Mission Items */}
			<ul className="space-y-4 text-jaris-black">
				{missionItems.map((item, index) => (
					<li key={index} className="flex items-start gap-3">
						<div className="flex-shrink-0 text-jaris-gold">
							{ICONS.check_circle}
						</div>
						<span className="subtitle">{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AdmissionMission;
