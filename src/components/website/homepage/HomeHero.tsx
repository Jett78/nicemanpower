import { Link } from "react-router-dom";

type Props = {};

export default function HomeHero({}: Props) {
  return (
    <div className="w-full lg:pt-[2rem] bg-tertiary-900 overflow-hidden h-[100vh] flex flex-col lg:flex-row gap-5 justify-center items-center relative">
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
        <div className="p-[0.6vw] my-5 text-[0.8vw] px-[2vw] font-medium rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="flex text-tertiary-100">
            <span className="font-semibold text-tertiary-100">
              Low Digital Marketing ROI
            </span>
            <span className="px-2">|</span>
            <span className="text-secondary-500 cursor-pointer font-semibold">
              Work with us
            </span>
          </div>
        </div>
        <h1 className="text-[8vw] font-bold text-transparent bg-clip-text bg-gradient-to-br from-tertiary-200 to-tertiary-600 text-center leading-none">
          Find Job <br /> You Deserve
        </h1>
        <p className="text-[1.3vw] text-tertiary-300">
          Your dream job is closer than you think—
          <span>let us help you find it.</span>
        </p>
        <div className="flex gap-5 mt-[3rem] justify-center items-center">
          {/* <Link to="">
            <button className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold rounded-full text-tertiary-800 border border-tertiary-500">
              Contact
            </button>
          </Link> */}
          <Link to="">
            <button className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold bg-primary-500 rounded-full text-tertiary-50 border-primary-500">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
