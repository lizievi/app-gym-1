import type { FC } from "react";

// import data
import { community } from "../data";

// import components
import { CommunitySlider } from "./CommunitySlider";

export const Community: FC = () => {
  // destructure community data
  const { icon, title, testimonials } = community;
  return (
    <section className="section relative left-0">
      <div className="container mx-auto">
        <div className="flex">
          {/* section title */}
          <div className="section-title-group max-w-60 px-4 lg:px-0 lg:ml-0 mx-auto">
            <img src={icon} alt="" />
            <h2 className="h2 section-title inline">
              {title}
              <span className="text-primary-200">.</span>
            </h2>
          </div>
          {/* slider */}
          <div className="absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0">
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};
