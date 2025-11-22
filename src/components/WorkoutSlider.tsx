import type { FC } from "react";
//import data
import { workouts } from "../data";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";

// import requires modules
import { Navigation } from "swiper/modules";

export const WorkoutSlider: FC = () => {
  // desctructure workout data
  const { programs } = workouts;
  return (
    <div className="relative">
      <Swiper
        slidesPerView={2}
        spaceBetween={32}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
        className="workoutSlider "
      >
        {programs.map((program, idx) => {
          // destructure program
          const { image, name } = program;
          return (
            <SwiperSlide key={idx} className="max-w-80 max-h-80 relative">
              <img src={image} alt="" className="w-full h-full object-cover" />
              <div className="absolute left-5 bottom-5 bg-white h-[26px] px-3.5 flex items-center rounded-[1px]">
                <div className="font-primary font-semibold text-sm text-neutral-500 ">
                  {name}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
