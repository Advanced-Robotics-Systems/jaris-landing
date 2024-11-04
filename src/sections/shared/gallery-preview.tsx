import { galleryPhotos } from "@/data";
// import { Image } from "@nextui-org/react";
import Gallery from "react-photo-gallery";

const GalleryPreview = () => {
	// const renderImage = ({ photo }: { photo: any }) => (
	// 	<div className="p-1">
	// 		<Image
	// 			src={photo.src}
	// 			alt={photo.alt}
	// 			width={360}
	// 			height={230}
	// 			className="rounded-lg object-cover w-[1/3]"
	// 			loading="lazy"
	// 		/>
	// 	</div>
	// );

	return (
		<section className="h-screen bg-jaris-blue flex flex-col items-center justify-center padding lg:px-36 xl:px-48 2xl:px-62">
			<h2 className="heading-secondary font-bold mb-2 text-jaris-gold">Our Memories</h2>
			<p className="subtitle mb-6 text-center text-jaris-yellow">
				Take a look through our warm memories here. Join us and let&apos;s make more!
			</p>
			<div className="w-full max-w-6xl overflow-y-scroll h-[calc(100vh-200px)] p-4 scrollbar-custom">
				<Gallery photos={galleryPhotos} />
			</div>
		</section>
	);
};

export default GalleryPreview;
