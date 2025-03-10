"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LangButton = () => {
  const locale = useLocale();

  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(/\/(en|ar)/, `/${newLocale}`);

    router.push(newPathname);
  };

  return (
    <span
      className="inline-block flex-grow cursor-pointer text-xl text-jaris-blue font-medium px-10"
      onClick={changeLocale}
    >
      {locale === "en" ? "العربية" : "EN"}
    </span>
  );
};

export default LangButton;
