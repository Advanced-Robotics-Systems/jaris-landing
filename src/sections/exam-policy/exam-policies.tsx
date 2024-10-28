import { Card, CardBody } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
import { examPolicies } from "@/data";

const ExamPolicies = () => {
	return (
		<div className="padding bg-bg-primary lg:min-h-screen flex flex-col gap-6 lg:px-64 xl:px-72 2xl:px-80">
			<div className="flex flex-col gap-1">
				<h4 className="subtitle font-semibold text-jaris-blue uppercase tracking-wider">
					Examination Policy
				</h4>
				<h2 className="heading-secondary text-jaris-gold font-semibold">
					Main features of the current examination policy
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-4">
				{examPolicies.map((policy, index) => (
					<Card key={index} className="bg-white rounded-md shadow-lg">
						<CardBody className="flex flex-row items-center p-6 gap-6">
							<div className="text-jaris-gold text-2xl flex-shrink-0">
								{ICONS.check_circle}
							</div>
							<p className="subtitle text-jaris-black">{policy.description}</p>
						</CardBody>
					</Card>
				))}
			</div>
		</div>
	);
};

export default ExamPolicies;
