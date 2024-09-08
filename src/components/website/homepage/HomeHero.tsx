// import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

type Props = {};

export default function HomeHero({}: Props) {
  return (
    <div className="w-full   overflow-hidden h-[70vh]  lg:pt-[10vw] pb-[6vw] flex flex-col lg:flex-row gap-5 justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full   duration-300  overflow-hidden">
        <img
          src="/public/hero-img/hero2.png"
          alt=""
          className="w-full h-full brightness-[0.7] object-cover object-center"
        />
      </div>
      {/* <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[2]">
        <div className=" bg-secondary-500 min-w-[50vw] rotate-6 h-[150vh]"></div>
        <div className=" bg-primary-400 min-w-[50vw] rotate-6 h-[150vh]"></div>
        <div className=" bg-orange-300 min-w-[50vw] rotate-6 h-[150vh]"></div>
      </div> */}
      {/* Background sections */}
      {/* <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[2]">
        <div className="bg-gradient-to-r from-secondary-300 to-primary-300 min-w-[50vw] rotate-6 h-[150vh]"></div>
        <div className="bg-gradient-to-r from-primary-300 to-orange-300 min-w-[50vw] rotate-6 h-[150vh]"></div>
        <div className="bg-gradient-to-r from-orange-300 to-secondary-300 min-w-[50vw] rotate-6 h-[150vh]"></div>
      </div> */}
      {/* Content */}

      <div className="flex flex-col w-full h-full justify-center z-[2] relative items-center">
        {/* <div
          className="p-[0.6vw] my-5 text-[0.8vw] px-[2vw] font-medium  rounded-full border-2 border-tertiary-50
"
        >
          <div className="flex justify-center items-center text-tertiary-500">
            <span className="font-semibold text-tertiary-500">
              Low Digital Marketing ROI
            </span>
            <span className="px-2">|</span>
            <div className="flex group justify-center items-center">
              <span className="text-secondary-600 cursor-pointer font-semibold">
                Work with us
              </span>
              <span className="ml-1 group-hover:ml-2 duration-200">
                <Icon
                  icon="gg:arrow-right-o"
                  className="w-5 h-5 text-tertiary-500 mt-[2px]"
                />
              </span>
            </div>
          </div>
        </div> */}

        <h1 className="text-[9vw] lg:text-[3vw] relative   hero uppercase  font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-50 to-zinc-100 text-center leading-none">
          <span className="">
            {/* Find Job <br /> You Deserve */}
            Connecting You with the Right Talent, <br /> Every Time
          </span>
          {/* <div className="absolute top-0 right-[100%] w-[15vw] h-[22vw] hover:scale-95 duration-300 -translate-x-10 rotate-2 rounded-3xl overflow-hidden">
            <img
              src="/public/hero-img/hero1.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute top-0 left-[100%]  w-[15vw] h-[22vw] hover:scale-95 duration-300 translate-x-10 -rotate-2 rounded-3xl overflow-hidden">
            <img
              src="/public/hero-img/hero2.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div> */}
        </h1>
        <p className="text-[3.5vw] lg:text-[1.2vw]  text-zinc-50 w-11/12 mx-auto  lg:w-5/12 text-center">
          We are manpower recruiting agency. We are experts in this field and we
          know how to{" "}
          <span className="text-orange-500 italic">
            connect you with the skilled talents
          </span>{" "}
          all over the world.
        </p>
        <div className="flex gap-5 mt-[3rem] justify-center items-center">
          {/* <Link to="">
            <button className="px-[2vw] py-[1vw] text-[1vw] font-semibold rounded-full text-tertiary-800 border border-tertiary-500">
              Contact
            </button>
          </Link> */}
          <Link to="">
            <button className="px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 ">
              I need skilled talents
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
