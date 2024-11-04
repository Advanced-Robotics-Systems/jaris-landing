import { Image } from "@nextui-org/react";

const SpNeedsOverview2 = () => {
	return (
		<div className="padding bg-bg-text lg:px-36 xl:px-48 2xl:px-62">
			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src="/images/academy/nursery.jpeg"
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>

				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<h2 className="self-start heading-secondary text-jaris-gold font-semibold mb-10">
						Reach their fullest potential
					</h2>
					<p className="subtitle text-jaris-blue">
						The Special Needs Academy at JARIS is dedicated to supporting every
						student’s journey toward growth, offering them the resources and
						encouragement to thrive both academically and socially. Our
						experienced educators work closely with each child, ensuring they
						reach their fullest potential in a nurturing and compassionate
						setting.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SpNeedsOverview2;
