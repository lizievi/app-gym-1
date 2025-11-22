import type { FC } from "react"

// import data
import {join} from '../data'

export const Join: FC = () => {
  // destructure join data
  const {image, subtitle, btnText} = join;
  return (
    <section className="bg-neutral-500 min-h-[537px]">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:space-y-0">
          {/* image */}
          <div className="-mt-20 max-w-[276px] md:max-w-[442px] lg:max-w-full " >
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="max-w-[350px] lg:max-w-[492px] ml-[30px]">
            <h2 className="h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 text-white">
              Quieres unirte <span className="text-primary-200">y</span> divertirte?
              {/* Wanna join <span className="text-primary-200">&</span> have fun? */}
            </h2>
            <p className="text-body-sm md:text-body-md text-white mb-4 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">{subtitle}</p>
            <button className="btn btn-secondary btn-lg">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}