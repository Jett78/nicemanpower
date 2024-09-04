import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";

type Props = {};

export default function HomeServices({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="pb-[5rem] min-h-screen flex justify-center items-center flex-col w-full"
    >
      <div className="grid w-full grid-cols-2 gap-16 h-full relative">
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full justify-end items-start sticky top-[50%] left-0 flex flex-col text-end"
          >
            <p className="w-full mx-auto flex gap-1 justify-end items-center text-[1.3vw] leading-relaxed">
              <span className="w-[5vw] text-zinc-700 h-[1.5px] bg-secondary-500 mr-3"></span>{" "}
              Excellence across
              <span className="text-orange-500 italic">
                multiple disciplines
              </span>
            </p>
            <h1 className="hero text-[4vw]  font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800 text-right w-full leading-none">
              We Specialize
            </h1>
          </motion.div>
        </div>
        {/* cards */}
        <div className="grid place-content-start place-items-start h-full mx-auto grid-cols-1 gap-20">
          {servicesData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.85 }}
              whileInView={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer relative duration-300 bg-zinc-100 border-2 border-zinc-600 rounded-3xl p-16 group w-full flex flex-col justify-start items-start"
            >
              <div className="absolute top-3 right-3 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-green-200 p-2 lg:p-3 flex justify-center items-center">
                <Icon
                  icon={item.icon}
                  className="w-full h-full text-zinc-700 group-hover:rotate-[360deg] duration-500"
                />
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
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.2vw]  text-zinc-700">
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

const servicesData = [
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

// const servicesData = [
//   {
//     id: 1,
//     icon: "carbon:search",
//     imgSrc: "/service-img/service-1.png",
//     title: "Permanent Staffing",
//     description:
//       "We match businesses with skilled professionals for long-term roles, aligning company culture with employee skills.",
//   },
//   {
//     id: 2,
//     icon: "mdi:tick-circle-outline",
//     imgSrc: "/service-img/service-2.png",
//     title: "Contract Staffing",
//     description:
//       "Offering flexible staffing solutions for project-based or temporary needs, helping businesses scale their workforce as required.",
//   },
//   {
//     id: 3,
//     icon: "ph:globe",
//     imgSrc: "/service-img/service-3.png",
//     title: "Executive Search",
//     description:
//       "Specialized recruitment for leadership positions, finding executives who align with company vision and goals.",
//   },
//   {
//     id: 4,
//     icon: "system-uicons:graph-increase",
//     imgSrc: "/service-img/service-4.png",
//     title: "Skill Development & Training",
//     description:
//       "Providing training programs to enhance the skills of employees, ensuring they are equipped to meet industry demands.",
//   },
//   {
//     id: 5,
//     icon: "system-uicons:graph-increase",
//     imgSrc: "/service-img/service-4.png",
//     title: "Outsourcing Solutions",
//     description:
//       "Managing various business processes to help companies focus on their core activities while we handle the rest.",
//   },
//   {
//     id: 6,
//     icon: "system-uicons:graph-increase",
//     imgSrc: "/service-img/service-4.png",
//     title: "Training and Development",
//     description:
//       "Providing training and workshops to improve employee skills and support career advancement.",
//   },
// ];
