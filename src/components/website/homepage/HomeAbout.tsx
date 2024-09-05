import { Link } from "react-router-dom";

type Props = {};

export default function HomeAbout({}: Props) {
  return (
    <div className="py-[5rem] pb-[7rem]  flex flex-col justify-center items-center">
      {/* experience  */}
      <div className="pb-[5rem] grid  grid-cols-3 gap-10">
        <div className="bg-[#D8FCE3] rounded-xl h-[15vw] p-10  flex flex-col gap-2 justify-center items-center">
          <span className="font-semibold text-[2vw] hero">800+</span>
          <span className="text-[1vw] text-zinc-700">
            Successful Placements
          </span>
        </div>
        <div className="bg-[#FDE7DB] rounded-xl h-[15vw] p-10 flex flex-col gap-2 justify-center items-center">
          <span className="font-semibold text-[2vw] hero">20+</span>
          <span className="text-[1vw] text-zinc-700">Industries Served</span>
        </div>
        <div className="bg-[#D2EDFF] rounded-xl h-[15vw] p-10 flex flex-col gap-2 justify-center items-center">
          <span className="font-semibold text-[2vw] hero">17+</span>
          <span className="text-[1vw] text-zinc-700">Years of Experience</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[6rem]">
        {/* image  */}
        <div className="flex justify-center items-center h-full">
          <div className="relative w-[25vw] h-[30vw]  ">
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
        <div className="flex flex-col justify-center items-start gap-1 text-left h-full w-[50%]">
          <h2 className="text-[1vw]  font-semibold text-orange-500 hero">
            Millions of jobs. Find the one that's right for you.
          </h2>

          <p className="text-[1.2vw] text-zinc-700 leading-relaxed">
            We are Nice Recruiting Agency, established in 2007 in Kathmandu. We
            provide skilled workers across various sectors, with branches and
            training centers throughout Nepal, adhering to international hiring
            standards.
          </p>

          <Link to="" className="mt-5">
            <button className="px-[2vw] py-[0.8vw] text-[1vw] font-semibold text-zinc-50  rounded-full bg-orange-500 hover:bg-orange-600 duration-300">
              Let me know the sectors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
