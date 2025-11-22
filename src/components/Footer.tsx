import type { FC } from "react"

// import data
import { footer } from '../data'

export const Footer: FC = () => {

  //  destructure footer data
  const { logo, copyrightText} = footer;

  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px] px-5">
      <div className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]">
        <a href="">
          <img src={logo} className="w-[70px]" alt="" />
        </a>
        <p className="text-neutral-300 text-sm">{copyrightText}</p>

      </div>
    </footer>
  )
}