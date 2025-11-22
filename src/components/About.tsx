import type { FC } from "react";

// import data
import { about } from "../data";

// importt icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";

//Animation
import { Animation } from "../animation/Animation";

export const About: FC = () => {
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (
    <section className="py-20 md:py-[110px] lg:pt-35 lg:pb-[180]">
      <motion.div
        variants={Animation}
        initial="initialDown"
        whileInView="animateToUp"
        viewport={{ once: true }}
        className="container mx-auto px-5 lg:px-[135px]"
      >
        {/* section title */}
        <div className="section-title-group justify-start">
          <img src={icon} alt="" />
          <h2 className="h2 section-title inline">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* subtitle 1 */}
        <p className="md:text-body-md mb-12">{subtitle1}</p>
        {/* subtitle 2 */}
        <p className="md:text-body-md mb-8">{subtitle2}</p>
        {/* link */}
        <div>
          <a
            className="link flex items-center gap-x-4 hover:gap-x-6 transition-all"
            href="#"
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
