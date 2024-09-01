import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
type Props = {};

export default function HomeServices({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="pb-[5rem] min-h-screen flex justify-center items-center flex-col w-full"
    >
      <div className="w-full justify-center items-center text-center">
        <h1 className="hero text-[8vw] lg:text-[4.5vw]  lg:text-center font-semibold ">
          Why Choose <span className="">Us</span>
        </h1>
        <p className="w-6/12 mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          delectus accusantium a non nemo impedit?
        </p>
      </div>

      {/* cards */}
      <div className="grid mt-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {workData.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer border border-tertiary-100 bg-tertiary-100/10 shadow-sm duration-300 group 
   w-full flex flex-col justify-start items-start gap-8 p-10 rounded-3xl "
          >
            <div className="w-full flex justify-between items-center">
              <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12  rounded-full bg-tertiary-100  p-2 lg:p-3 flex justify-center items-center ">
                <Icon
                  icon={item.icon}
                  className="w-full h-full text-secondary-400 group-hover:rotate-[360deg] duration-500"
                />
              </div>
              <span className="text-[4vw] lg:text-[1.5vw] text-tertiary-400 font-semibold duration-300">
                0{item.id}.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[4vw] md:text-[3.5vw] lg:text-[1.3vw]">
                {item.title}
              </h3>
              <p className="text-[3.5vw] md:text-[2vw] lg:text-[1vw] text-tertiary-700">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const workData = [
  {
    id: 1,
    icon: "carbon:search",
    imgSrc: "/service-img/service-1.png",
    title: "Expert Recruiters",
    description:
      "Our seasoned recruiters bring deep industry knowledge to find the best talent.",
  },
  {
    id: 2,
    icon: "mdi:tick-circle-outline",
    imgSrc: "/service-img/service-2.png",
    title: "Tailored Job Matches",
    description:
      "We align job opportunities with your unique skills and career goals.",
  },
  {
    id: 3,
    icon: "ph:globe",
    imgSrc: "/service-img/service-3.png",
    title: "Wide Reach",
    description:
      "Our extensive network connects you with top employers worldwide.",
  },
  {
    id: 4,
    icon: "system-uicons:graph-increase",
    imgSrc: "/service-img/service-4.png",
    title: "High Success Rate",
    description:
      "Our proven process ensures successful placements for both clients and candidates.",
  },
];
