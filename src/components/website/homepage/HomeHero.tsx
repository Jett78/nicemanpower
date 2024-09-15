// import { Icon } from "@iconify/react/dist/iconify.js";
import Ctaform from "./Ctaform";
import { useEffect, useState } from "react";

export default function HomeHero() {
  const [active, Setactive] = useState(false);
  // Overlay click handler
  const closeDropdown = () => {
    Setactive(false);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <div className="w-full   overflow-hidden h-screen  lg:pt-[10vw] pb-[6vw] flex flex-col lg:flex-row gap-5 justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full   duration-300  overflow-hidden">
        <img
          src="/public/hero-img/hero8.webp"
          alt=""
          className="w-full h-full brightness-50 object-cover object-center"
        />
      </div>
     
      <div className="flex flex-col w-full h-full justify-center z-[2] relative items-center">
   

        <h1 className=" md:text-[3vw] relative z-[10]    hero   font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-zinc-50 to-zinc-100 text-center leading-none">
          {/* Find Job <br /> You Deserve */}
          Connecting You with the{" "}
          <span className="relative text-white z-[200]">Right Talent</span>{" "}
          {/* paintbrush */}
          <img
            src="./public/brush.png"
            alt="brush"
            className="absolute -top-4 right-0 z-[1] w-[21vw] h-[5vw]"
          />
          , <br /> Every Time
        </h1>
        {/* --Dark overlay-- */}
        <div className="z-[999] relative" data-lenis-prevent>
          {active && (
            <div
              className="fixed inset-0 bg-black bg-opacity-85 "
              onClick={closeDropdown}
            ></div>
          )}
          <div className="relative flex justify-center items-center">
            <div className={`${active ? "fixed" : "hidden"} z-[200] fixed `}>
              <Ctaform closeDropdown={closeDropdown} />
            </div>
          </div>
        </div>

        <p className="text-[4vw] sm:text-[1.2vw] py-4 font-semibold  text-zinc-50 w-11/12 mx-auto  lg:w-6/12 text-center">
          We are manpower recruiting agency. We are experts in this field and we
          know how to{" "}
          <span className="text-orange-500 italic">
            connect you with the skilled talents
          </span>{" "}
          all over the world.
        </p>
        <div className="flex gap-5 mt-[1.5rem] justify-center items-center">
     
          <div>
            <button
              onClick={() => Setactive(!active)}
              className=" px-6 sm:px-[2vw] sm:py-[2vw] py-4 lg:py-[0.8vw]   sm:text-[2rem] md:text-[1vw]  font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 "
            >
              I need skilled talents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
