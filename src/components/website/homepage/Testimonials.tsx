import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="pb-[2rem] min-h-screen overflow-hidden flex justify-center items-center flex-col w-full"
    >
      <div className="w-full justify-center items-center text-center">
        <h1 className="text-[4vw] font-bold text-transparent bg-clip-text bg-gradient-to-br from-tertiary-200 to-tertiary-600 text-center leading-none hero">
          Voice Of Our <span className="">Clients</span>
        </h1>
        <p className="w-6/12 text-[1.3vw] text-tertiary-200 mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          delectus accusantium a non nemo impedit?
        </p>
      </div>

      <div className="w-full mt-10 flex justify-start items-center">
        <div className="relative overflow-hidden bg-transparent w-full flex">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r w-[20vw] from-tertiary-900 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full bg-gradient-to-l w-[20vw] from-tertiary-900 to-transparent z-10"></div>

          <motion.div
            className="flex gap-5"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: reviewsData.length * 30, // Adjust this value to control scroll speed
              ease: "linear",
            }}
          >
            {reviewsData.concat(reviewsData).map((review, index) => (
              <div
                key={index}
                className="bg-tertiary-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-5 py-[5vw] lg:py-[1.5vw] cursor-pointer  w-[70vw] md:w-[50vw] m-1 lg:w-[25vw] h-auto rounded-3xl   duration-300  flex justify-start flex-col gap-5 items-start"
              >
                <div className="flex text-yellow-400 justify-center items-center">
                  <Icon
                    icon="material-symbols-light:star"
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 object-cover object-center"
                  />
                  <Icon
                    icon="material-symbols-light:star"
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 object-cover object-center"
                  />
                  <Icon
                    icon="material-symbols-light:star"
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 object-cover object-center"
                  />
                  <Icon
                    icon="material-symbols-light:star"
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 object-cover object-center"
                  />
                  <Icon
                    icon="material-symbols-light:star"
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 object-cover object-center"
                  />
                </div>
                <h3 className="font-medium text-[4vw] text-tertiary-200 md:text-[3vw] lg:text-[1vw]">
                  <span className="text-secondary-400">&quot;</span>
                  {review.reviewDescription}
                  <span className="text-secondary-400">&quot;</span>
                </h3>
                {/* <p className="text-[3.5vw] lg:text-[0.8vw] text-zinc-300">
                  {review.reviewDescription}
                </p> */}

                <div className="flex justify-start items-center gap-2">
                  <div
                    className="w-10 h-10 lg:w-16 lg:h-16 bg-white rounded-full"
                    style={{
                      backgroundImage: `url(${review.icon})`,
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div className="flex flex-col text-[3.5vw] md:text-[2.5vw] lg:text-[1vw]">
                    <span className="font-medium">{review.name}</span>
                    <span className="text-[3vw] md:text-[1.8vw] lg:text-[0.8vw] text-tertiary-300">
                      {review.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const reviewsData = [
  {
    id: 1,
    reviewText: "Their AI-development consulting report was eye-opening",
    reviewDescription:
      "Nebula's chatbot is an absolute game-changer for our customer service, absolutely amazing!",
    name: "John Doe",
    position: "CEO at TechCorp",
    icon: "/public/team/ceo.png",
  },
  {
    id: 2,
    reviewText: "Fantastic collaboration on our AI project",
    reviewDescription:
      "The team at Nebula went above and beyond to meet our expectations, delivering stellar results.",
    name: "Jane Smith",
    position: "CTO at InnovateX",
    icon: "/public/team/ceo.png",
  },
  {
    id: 3,
    reviewText: "Insightful and professional AI consultation",
    reviewDescription:
      "Nebula's AI solutions have significantly improved our operational efficiency.",
    name: "Michael Brown",
    position: "COO at FutureVision",
    icon: "/public/team/ceo.png",
  },
  {
    id: 4,
    reviewText: "Exceptional support throughout the project",
    reviewDescription:
      "Nebula's team provided continuous support, ensuring our AI system was implemented flawlessly.",
    name: "Emily White",
    position: "Head of IT at AlphaTech",
    icon: "/public/team/ceo.png",
  },
];
