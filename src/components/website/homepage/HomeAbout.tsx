import { Link } from "react-router-dom";
import JobsFeature from "./JobsFeature";

export default function HomeAbout() {
  return (
    <div className="md:py-[2rem]  w-full lg:pb-[7rem]  flex flex-col justify-center items-center">
      {/* experience  */}
      <div className="md:py-[5rem] py-[5rem] grid  lg:grid-cols-3 md:grid-cols-2 w-full gap-2 lg:gap-10">
        {/* <div className="bg-[#c3f5d2] rounded-xl w-full h-[25vw] text-center lg:h-[15vw] p-10  flex flex-col gap-2 justify-center items-center">
          <span className="font-semibold text-[4vw] lg:text-[2vw] hero">
            800+
          </span>
          <span className="text-[3vw] lg:text-[1vw] text-zinc-700">
            Successful Placements
          </span>
        </div>
        <div className="bg-[#f6cfb9] rounded-xl w-full h-[25vw] text-center lg:h-[15vw] p-10 flex flex-col gap-2 justify-center items-center">
          <span className="font-semibold text-[4vw] lg:text-[2vw] hero">
            20+
          </span>
          <span className="text-[3vw] lg:text-[1vw] text-zinc-700">
            Industries Served
          </span>
        </div>
        <div className="bg-[#bbe1fb] rounded-xl w-full h-[25vw] text-center lg:h-[15vw] p-10 flex flex-col gap-2 justify-center items-center">
          <span className="font-semibold text-[4vw] lg:text-[2vw] hero">
            17+
          </span>
          <span className="text-[3vw] lg:text-[1vw] text-zinc-700">
            Years of Experience
          </span>
        </div> */}
        <img src="./public/cards/img1.png" alt="card" />
        <img src="./public/cards/img2.png" alt="card" />
        <img src="./public/cards/img3.png" alt="card" />
      </div>
      <JobsFeature />

      <div className="flex mt-12 flex-col lg:flex-row justify-center items-center gap-[1rem] lg:gap-[6rem]">
        {/* image  */}
        <div className="flex justify-center items-center h-full">
          <div className="relative w-[90vw] h-[50vw] lg:w-[25vw] lg:h-[30vw]  ">
            <img
              src="/public/hero-img/hero5.png"
              alt=""
              className="w-full h-full object-cover rounded-xl  object-center"
            />
            <img
              src="/public/hero-img/hero1.png"
              alt=""
              className="w-[14vw] absolute top-[18vw] left-[14vw] h-[16vw] object-cover object-center rounded-xl"
            />
          </div>
        </div>

        {/* right desc  */}
        <div className="flex flex-col justify-center items-start gap-1 text-left h-full lg:w-[50%]">
          <h2 className="text-[3vw] lg:text-[1vw]  font-semibold text-orange-500 hero">
            Millions of jobs. Find the one that's right for you.
          </h2>

          <p className="text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] text-zinc-700 leading-relaxed">
            Explore millions of job opportunities across industries and find the
            perfect match for your skills and goals. Whether starting your
            career or advancing, we connect you with the right opportunity.
          </p>

          <Link to="/jobs" className="mt-5">
            <button className=" md:px-[2vw] md:py-[1vw] px-3 py-2 text-[3vw] lg:text-lg text-xs font-semibold text-zinc-50  rounded-full bg-orange-500 hover:bg-orange-600 duration-300">
              Explore Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
