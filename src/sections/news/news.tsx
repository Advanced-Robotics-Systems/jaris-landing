import { newsBannerItems } from "@/data";
import { NewsBanner } from "@/sections";

const News = () => {
  return (
    <div className="bg-bg-primary">
      {/* Heading Starts */}
      <div className="flex flex-col gap-y-2 px-6 sm:px-20 md:px-40 py-8">
        <h1 className="text-2xl sm:text-4xl text-jaris-blue font-semibold">
          Explore Our Latest News
        </h1>
        <div className="text-base text-jaris-blue font-normal">
          Discover more of JARIS
        </div>
      </div>
      {/* Heading Ends */}
      {/* News Banners Start */}
      <div className="flex flex-wrap justify-center md:justify-between px-6 sm:px-12 lg:px-24 xl:px-48 gap-y-10 mt-4 sm:mt-8 pb-16 sm:pb-32">
        {newsBannerItems.map((item: any, index: number) => (
          <NewsBanner
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            key={index}
          />
        ))}
      </div>
      {/* News Banners End */}
    </div>
  );
};

export default News;