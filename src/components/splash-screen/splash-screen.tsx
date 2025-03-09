import { AnimatePresence, motion } from "framer-motion";

interface SplashScreenProps {
  isLoading: boolean;
  t: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isLoading, t }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative h-screen bg-jaris-blue flex items-center justify-center padding overflow-hidden"
        >
          <div className="absolute inset-0 -bottom-3/4 bg-[url(/images/home/splash-bg.png)] bg-cover bg-center opacity-10" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h3 className="heading-secondary text-jaris-white font-semibold mb-4">
              {t("splashScreen.head")}
            </h3>
            <h1 className="title text-jaris-white font-bold mb-2 text-center">
              {t("splashScreen.main")}
            </h1>
            <h3 className="heading-md text-jaris-gold font-semibold">
              {t("splashScreen.footer")}
            </h3>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
