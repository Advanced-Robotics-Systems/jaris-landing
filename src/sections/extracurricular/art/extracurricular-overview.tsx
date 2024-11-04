import { Image } from "@nextui-org/react";

const ExtracurricularOverview = ({overview} : {overview: any}) => {
	return (
		<div className="padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62">
			<h2 className="self-start heading-secondary text-jaris-gold mb-10 font-semibold">
				{overview.title}
			</h2>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-20">
				{/* Text Section */}
				<div className="flex-1 lg:flex-3">
					<p className="subtitle text-jaris-blue">
						{overview.description}
					</p>
				</div>

				{/* Image Section */}
				<div className="flex-1 lg:flex-2">
					<Image
						src={overview.imgSrc}
						alt="Academy Nursery Overview"
						className="rounded-lg object-cover w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default ExtracurricularOverview;
