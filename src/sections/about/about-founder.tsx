const AboutFounder = ({ t }: { t: any }) => {
  return (
    <div className="bg-bg-primary padding lg:px-32 lg:py-24 flex flex-col items-center justify-center gap-12 lg:min-h-screen">
      {/* Top Text Section */}
      <div className="w-full max-container text-center">
        <h3 className="text-jaris-blue-dark text-xl md:text-2xl font-semibold">
          {t("founder.ourFounders")}
        </h3>
        <h2 className="text-jaris-gold text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mt-4">
          {t("founder.title")}
        </h2>
      </div>

      {/* Background Image Section */}
      <div
        className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] max-w-[1035px] mx-auto rounded-lg"
        style={{
          backgroundImage:
            "url('/images/gallery/new-gallery-pictures/about-founder.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-jaris-blue opacity-20 rounded-lg" />
      </div>

      {/* Bottom Text Section */}
      <div className="w-full max-container text-center text-base md:text-lg text-jaris-blue-light">
        <p>{t("founder.details")}</p>
      </div>
    </div>
  );
};

export default AboutFounder;
