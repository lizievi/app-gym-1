import { useEffect, useState, type FC } from "react";

import { header } from "../data";
import { Nav } from "./Nav";
import { NavMovile } from "./NavMovile";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

export const Header: FC = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { logo, btnSignupText, btnLoginText } = header;
  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-4" : "bg-transparent py-5"
      } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-5 lg:px-20 transition-all duration-300`}
    >
      {/* logo */}
      <a href="">
        <img className="h-[70px]" src={logo} alt="" />
      </a>
      {/* nav - initial hidden - show on desktop */}
      <Nav />
      {/* btns - initially hidden - show on desktop */}
      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition">{btnLoginText}</button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>
      {/* nav menu btn - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />
        )}
      </div>
      {/* nav mobile - hide on desktop */}
      <NavMovile navMobile={navMobile} />
    </header>
  );
};
