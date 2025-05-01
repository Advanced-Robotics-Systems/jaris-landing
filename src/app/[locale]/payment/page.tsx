"use client";
import { WhatsappWidget } from "@/components";
import {
  Footer,
  Header,
  NavbarPlaceholder,
  PaymentContact,
  PaymentOnline,
} from "@/sections";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Payment = () => {
  const locale = useLocale();
  const t = useTranslations("paymentPage");

  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget />
      <main>
        <PaymentOnline t={t} locale={locale} />
        <PaymentContact t={t} locale={locale} />
      </main>
      <Footer />
    </>
  );
};

export default Payment;
