
import { Button, Card, Image } from "@nextui-org/react";

const ExtracurricularCTA = ({description, imgSrc} : {description: string, imgSrc: string}) => {
	return (
		<div className="bg-bg-primary padding lg:px-36 xl:px-48">
			<Card className=" bg-jaris-blue text-jaris-white shadow-lg flex-row flex-wrap h-full lg:pl-10">
				{/* Left Side: Text and Button */}
				<div className="flex flex-col justify-between w-2/3 p-6">
					<div>
						<h3 className="heading-secondary font-semibold">Join us</h3>
						<p className="subtitle mt-4">
							{description}
						</p>
					</div>
					<div className="mt-6 flex gap-4">
						<Button
							size="lg"
							as="a"
							href="/contact"
							radius="full"
							className="bg-jaris-gold text-jaris-white"
						>
							Contact Us
						</Button>
					</div>
				</div>
				{/* Right Side: Image */}
				<div className="w-1/3 flex justify-center items-center p-4">
					<Image
						src={imgSrc}
						alt="Join Us Placeholder Image"
						width={120}
						height={120}
						className="rounded-lg object-cover"
					/>
				</div>
			</Card>
		</div>
	);
};

export default ExtracurricularCTA;
