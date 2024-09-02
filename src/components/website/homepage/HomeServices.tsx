import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";

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
      <div className="grid grid-cols-2 gap-20 h-full relative">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full justify-end items-start sticky top-[50%] left-0 flex flex-col text-end"
          >
            <p className="w-full mx-auto flex gap-10 justify-end items-center text-[1.3vw] leading-relaxed">
              <span className="w-[5vw] h-[1.5px] bg-secondary-500"></span>{" "}
              Excellence across multiple disciplines
            </p>
            <h1 className="hero text-[8vw] lg:text-[4.5vw] leading-none w-full font-semibold">
              We Specialize
            </h1>
          </motion.div>
        </div>
        {/* cards */}
        <div className="grid place-content-start place-items-start h-full mx-auto grid-cols-1 gap-20">
          {workData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer duration-300 group w-full flex flex-col justify-start items-start"
            >
              <div className="w-full flex justify-between items-center">
                {/* Uncomment and use the icon if needed */}
                {/* <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-tertiary-100 p-2 lg:p-3 flex justify-center items-center">
                  <Icon
                    icon={item.icon}
                    className="w-full h-full text-secondary-400 group-hover:rotate-[360deg] duration-500"
                  />
                </div> */}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1"
              >
                <h3 className="font-semibold flex gap-5 items-center relative text-[4vw] md:text-[3.5vw] lg:text-[1.3vw]">
                  <span className="text-[3.5vw] md:text-[2vw] lg:text-[1.2vw] text-primary-500 font-semibold duration-300">
                    0{item.id}.
                  </span>
                  {item.title}
                </h3>
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.2vw] font-medium text-tertiary-200">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
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
