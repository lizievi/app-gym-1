import type { FC } from "react";

// import data
import { pricing } from "../data";
import { PlanList } from "./PlanList";

export const Pricing: FC = () => {
  // destructure pricing data
  const { icon, title, plans } = pricing;
  return (
    <section className="section">
      {/* section title */}
      <div className="section-title-group max-w-135 mx-auto px-4 lg:px-0">
        <img src={icon} alt="" />
        <h2 className="h2 section-title inline">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  );
};
