import { Image } from "@nextui-org/react";

const SpNeedsOverview1 = () => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<h2 className="self-start heading-secondary text-jaris-gold font-semibold mb-10">
						We are Dedicated
					</h2>
					<p className="subtitle text-jaris-blue">
						At the Special Needs Academy, we are dedicated to creating an
						inclusive, supportive, and empowering environment for students with
						diverse learning needs. Our goal is to provide personalized
						educational plans and resources that cater to each child&apos;s
						unique abilities. With a focus on both academic and social
						development, we offer specialized programs that encourage
						independence, confidence, and skill development.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/nursery.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default SpNeedsOverview1;
