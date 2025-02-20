const CTACommunity = () => {
  return (
    <div className="relative h-screen bg-bg-text max-md:h-[60vh] padding-y md:py-28 lg:px-32 z-20">
      <div className="relative h-full w-[calc(100%-16px)] mx-auto flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/home/IMG_4985.jpeg')] bg-cover bg-[center_45%] bg-no-repeat filter brightness-75 rounded-lg" />
        <div className="relative z-20 mt-28 flex flex-col items-center justify-center gap-5">
          <div className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold">
            <span className="uppercase">Make new friends</span>
          </div>

          <div className="relative inline-block overflow-hidden rounded-lg transition hover:brightness-90 active:scale-95 ">
            <button className="bg-jaris-blue py-2 lg:py-4 px-6 lg:px-10 pr-12 lg:pr-16 relative">
              <span className="text-white text-xl lg:text-2xl font-semibold">
                JOIN OUR COMMUNITY
              </span>
            </button>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[170%] w-10 lg:w-12 bg-jaris-gold clip-path-yellow" />
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[140%] w-8 lg:w-10 bg-jaris-white clip-path-polygon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTACommunity;
