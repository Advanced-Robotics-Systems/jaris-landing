import { Image, Input } from "@nextui-org/react";
import { footerLinks, footerSocials } from "@/data";
import { Link } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
import { linkHelper } from "@/utils/link-helper";

const InnerFooter = ({ t, locale }: { t: any; locale: string }) => {
  return (
    <footer className="w-full bg-jaris-blue padding lg:px-36 text-bg-text flex flex-col gap-16 lg:gap-32">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="flex flex-col gap-10 max-sm:items-center">
          <Image
            src="/logos/jawahir-logo-full-white.png"
            alt="JAWAHIR AL-RIYADH INTERNATIONAL SCHOOL"
            className="w-60 lg:w-80 h-auto"
          />

          <div className="flex flex-col gap-6 bg-jaris-blue-light/30 backdrop-blur-lg p-6 rounded-lg lg:p-10">
            <p className="subtitle">{t("joinNewsletter")}</p>
            <div className="relative w-full lg:w-96 rounded-lg">
              <Input
                disabled
                size="lg"
                placeholder={t("soon")}
                className="w-full bg-jaris-white text-jaris-black pr-10 rounded-lg"
              />

              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
                {ICONS.arrow_right}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between lg:justify-end gap-10 lg:gap-14 w-full lg:w-2/3">
          {/* First column */}
          <div>
            <h4 className="text-medium md:text-lg mb-8 font-semibold">
              {t("contactTitle")}
            </h4>
            <ul className="list-none flex flex-col gap-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <Link
                    href={linkHelper(locale, item.link)}
                    className="text-jaris-white text-sm md:text-medium"
                  >
                    {t(`links.contact.${item.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second column */}
          <div>
            <h4 className="text-medium md:text-lg mb-8 font-semibold">
              {t("exploreTitle")}
            </h4>
            <ul className="list-none flex flex-col gap-4">
              {footerLinks.explore.map((item, index) => (
                <li key={index}>
                  <Link
                    href={linkHelper(locale, item.link)}
                    className="text-jaris-white text-sm md:text-medium"
                  >
                    {t(`links.explore.${item.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h4 className="text-medium md:text-lg mb-8 font-semibold">
              {t("loginTitle")}
            </h4>
            <ul className="list-none flex flex-col gap-4">
              {footerLinks.login.map((item, index) => (
                <li key={index}>
                  <Link
                    href={linkHelper(locale, item.link)}
                    className="text-jaris-white text-sm md:text-medium"
                  >
                    {t(`links.login.${item.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <p className="text-xs text-jaris-white/60">
          &copy; 2025 {t("bottom.copyright")}
        </p>
        <div className="flex gap-4 text-center">
          {/* School Names */}
          <Link href="/schools/fjaris">
            <span className="text-bg-text font-light">1st JARIS</span>
          </Link>
          <Link href="/schools/sjaris">
            <span className="text-bg-text font-light">2nd JARIS</span>
          </Link>
          <Link href="/schools/tjaris">
            <span className="text-bg-text font-light">3rd JARIS</span>
          </Link>
        </div>
        <div className="flex gap-4">
          {footerSocials.map((item, index) => (
            <Link
              isExternal
              size="lg"
              key={index}
              href={item.link}
              className="text-bg-text"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default InnerFooter;
