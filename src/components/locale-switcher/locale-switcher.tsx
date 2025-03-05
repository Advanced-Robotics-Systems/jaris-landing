"use client";

import { Button } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const localeSwitcher = () => {
    let newPath;
    if (locale === "en") {
      newPath = pathname.replace(/^\/(en|ar)/, "/ar");
    } else {
      newPath = pathname.replace(/^\/(en|ar)/, "/en");
    }

    router.push(newPath);
  };

  console.log(pathname);

  return (
    <Button
      onPress={localeSwitcher}
      size="sm"
      radius="full"
      className="fixed bottom-5 left-5 z-50"
    >
      {locale === "en" ? "AR" : "EN"}
    </Button>
  );
};

export default LocaleSwitcher;
