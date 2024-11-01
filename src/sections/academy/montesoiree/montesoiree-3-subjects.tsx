import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { montesoiree3Subjects } from "@/data";

const Montesoiree3Subjects = () => {
	return (
		<div className="padding bg-jaris-blue lg:px-36 xl:px-48 2xl:px-62">
			<h3 className="heading-secondary text-jaris-gold font-bold uppercase mb-10">
				Subjects
			</h3>
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{montesoiree3Subjects.map((subject, index) => (
					<Card key={index} className="bg-jaris-white/70 rounded-lg shadow-md min-h-[150px]">
						<CardHeader className="text-jaris-gold-dark font-semibold subtitle">
							{subject.title}
						</CardHeader>
						<CardBody className="text-jaris-blue subtitle leading-relaxed">
							{subject.description}
						</CardBody>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Montesoiree3Subjects;
