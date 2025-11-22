import type { FC } from "react";

import { motion } from "framer-motion";
import { Animation } from "../animation/Animation";

// import data
import { workouts } from "../data";

//imporrt components
import { WorkoutSlider } from "./WorkoutSlider";

export const Workout: FC = () => {
  // destructure workouts data
  const { title, icon } = workouts;

  return (
    <motion.section
      variants={Animation}
      initial="initialDown"
      whileInView="animateToUp"
      viewport={{ once: true }}
      className="section"
    >
      <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
        <img src={icon} alt="" />
        <h2 className="h2 section-title inline">
          {title}
          <span className=" text-primary-200">.</span>
        </h2>
      </div>
      {/* slider */}
      <div>
        <WorkoutSlider />
      </div>
    </motion.section>
  );
};
