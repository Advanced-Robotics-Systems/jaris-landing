"use client";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { faqContents } from "./faq-contents-data";
import { ICONS } from "@/utils/icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const VIEW_COUNT = 5;
const FAQContents = () => {
  const faqData = faqContents;
  const [visibleFAQs, setVisibleFAQs] = useState(VIEW_COUNT);
  const allFAQsVisible = visibleFAQs === faqData.length;

  const handleToggleFAQs = () => {
    setVisibleFAQs(allFAQsVisible ? VIEW_COUNT : faqData.length);
  };

  const initialFaqs = faqData.slice(0, VIEW_COUNT);
  const additionalFAQs = faqData.slice(VIEW_COUNT);

  return (
    <div className="padding bg-[#FFEEED9] text-jaris-blue ">
      <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 ">
        <h5 className="text-xs md:text-sm lg::text-base">JARIS SUPPORT</h5>
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
          FAQs
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="px-0 lg:px-20 xl:px-32 2xl:px-40 mt-8 md:mt-12 lg:mt-16 "
      >
        <Accordion showDivider={false}>
          {initialFaqs.map((item) => (
            <AccordionItem
              className="mb-8 border-t border-bg-text "
              key={item.id}
              // title={`Q: ${item?.question}`}
              title={
                <div className="flex gap-1 text-jaris-blue text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                  <p>Q:</p>
                  <p>{item?.question}</p>
                </div>
              }
              content={item?.answer}
              indicator={({ isOpen }) =>
                isOpen ? (
                  <div className="flex items-center justify-center text-lg md:text-2xl lg:text-3xl xl:text-4xl text-jaris-yellow ">
                    {ICONS.right_arrow_circle}
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-lg md:text-2xl lg:text-3xl xl:text-4xl text-jaris-yellow ">
                    {ICONS.plus_circle}
                  </div>
                )
              }
            >
              <div className="bg-bg-primary px-3 md:px-4 lg:px-5 py-6 md:py-8 lg:py-10  text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-5  lg:leading-6 xl:leading-7">
                {item?.answer}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
      <AnimatePresence>
        {visibleFAQs > VIEW_COUNT && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            className="px-0 lg:px-20 xl:px-32 2xl:px-40 "
          >
            <Accordion showDivider={false}>
              {additionalFAQs.map((item) => (
                <AccordionItem
                  className="mb-8 border-t border-bg-text "
                  key={item.id}
                  // title={`Q: ${item?.question}`}
                  title={
                    <div className="flex gap-1 text-jaris-blue text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                      <p>Q:</p>
                      <p>{item?.question}</p>
                    </div>
                  }
                  content={item?.answer}
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <div className="flex items-center justify-center text-lg md:text-2xl lg:text-3xl xl:text-4xl text-jaris-yellow ">
                        {ICONS.right_arrow_circle}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-lg md:text-2xl lg:text-3xl xl:text-4xl text-jaris-yellow ">
                        {ICONS.plus_circle}
                      </div>
                    )
                  }
                >
                  <div className="bg-bg-primary px-3 md:px-4 lg:px-5 py-6 md:py-8 lg:py-10  text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-5  lg:leading-6 xl:leading-7">
                    {item?.answer}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </AnimatePresence>

      <div className=" flex justify-center items-center mt-8 md:mt-12 lg:mt-16">
        <Button
          variant="bordered"
          size={
            window.innerWidth >= 1024
              ? "lg"
              : window.innerWidth >= 768
              ? "md"
              : "sm"
          }
          disableRipple
          onPress={handleToggleFAQs}
          className="  border-jaris-blue text-jaris-blue font-medium hover:bg-jaris-blue hover:text-white "
        >
          {!allFAQsVisible ? "See more" : "See less"}
        </Button>
      </div>
    </div>
  );
};

export default FAQContents;
