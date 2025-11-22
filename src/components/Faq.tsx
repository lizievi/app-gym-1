import type { FC } from "react";

// import data
import { faq } from "../data";
import { Accordion } from "./Accordion";

export const Faq: FC = () => {
  const { icon, title, accordions } = faq;
  return (
    <section className="section pt-[480px] lg:pt-[280px] mb-20 lg:mb-0">
      <div className="max-w-3xl mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:min-h-[1160px] lg:pt-6">
        {/* section title */}
        <div className="section-title-group justify=startt lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0">
          <img className="lg:hidden" src={icon} alt="" />
          <h2 className="h2 section-title inline lg:mt-[100px]">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* accordion list */}
        <div className="flex flex-col gap-y-4 px-4">
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};
