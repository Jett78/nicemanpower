import { Link } from "react-router-dom";

type Props = {};

export default function HomeHero({}: Props) {
  return (
    <div className="w-full lg:pt-[2rem] h-[100vh]  flex flex-col lg:flex-row gap-5 justify-center items-center relative">
      <div className="flex flex-col justify-center items-center">
        <div className="p-[0.6vw] my-5 text-[0.8vw] px-[2vw] font-medium rounded-full border">
          <div className="flex">
            <span className="font-medium text-tertiary-800">Low Digital Marketing ROI</span>
            <span className="px-2">|</span>
            <span className="text-secondary-500 font-semibold">
              Work with us
            </span>
          </div>
        </div>
        <h1 className="text-[8vw] font-medium text-tertiary-800  hero text-center leading-none">
          Find Job <br /> You Deserve
        </h1>
        <p className="text-[1.5vw] text-tertiary-700">
          Your dream job is closer than you think—
          <span className="">let us help you find it.</span>
        </p>{" "}
        <div className="flex gap-5 mt-[3rem]  justify-center items-center">
          {/* <Link to="">
            <button className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold  rounded-full text-tertiary-800 border border-tertiary-500">
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

// const items = [
//   { id: 1, image: "/public/hero-img/hero1.png" },
//   { id: 2, image: "/public/hero-img/hero2.png" },
//   { id: 3, image: "/public/hero-img/hero5.png" },
//   { id: 4, image: "/public/hero-img/hero4.png" },
//   { id: 5, image: "/public/hero-img/hero3.png" },
//   { id: 6, image: "/public/hero-img/hero6.png" },
// ];
