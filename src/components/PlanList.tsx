import { useState} from "react";
// import icons
import { BsCheckCircleFill } from "react-icons/bs";

interface PricingListItem {
  name: string;
}
interface PricingPlan {
  name: string;
  price: string;
  list: PricingListItem[];
  delay: number;
}

interface PlanListProps {
  plans: PricingPlan[];
}

export const PlanList = ({ plans }: PlanListProps ) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-y-4">
      {plans.map((plan, currentIndex) => {
        const { name, price, list } = plan;
        return (
          <div
            className="w-full md:max-w-151 lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]"
            key={currentIndex}
          >
            <div
              onClick={() => setIndex(currentIndex)}
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-10 px-7.5 lg:min-h-[550px] transition duration-100`}
            >
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">
                {/* name & price wrapper */}
                <div>
                  {/* name */}
                  <div className={`${currentIndex === index ? 'bg-white text-neutral-500': 'bg-neutral-500 text-white'} h-[26px] font-primary text-sm font-semibold min-w-min mx-auto px-3.5 flex items-center justify-center mb-8`}>{name}</div>
                  {/* price */}
                  <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                    <div className="leading-none">
                      <span className="text-[30px] font-extrabold">S/ </span>
                      <span className="tracking-[0.1px]">{price}</span>
                    </div>
                    <span className="text-sm font-medium">mensual</span>
                    {/* <span className="text-sm font-medium">/month</span> */}
                  </div>
                </div>
                {/* list & btn wrapper */}
                <div>
                  {/* list */}
                  <ul className="flex flex-col gap-y-4 mb-8">
                    {list.map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-center gap-x-2.5">
                          <BsCheckCircleFill className="text-lg" />
                          <div>{item.name}</div>
                        </li>
                      );
                    })}
                  </ul>
                  {/* btn */}
                  <button
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "border border-neutral-500"
                    } btn btn-lg rounded-[1px] lg:mx-auto`}
                  >
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
