import { useState } from "react";
import { motion} from "framer-motion";


const steps = [
  { number: 1, text: "Bahrain", image: "/public/client/Bahrain.png" },
  { number: 2, text: "UAE", image: "/public/client/Uae.png" },
  { number: 3, text: "Saudi Arabia", image: "public/client/Saudi.png" },
  { number: 4, text: "Qatar", image: "/public/client/Qatar.png" },
  { number: 5, text: "Malaysia", image: "/public/client/Malaysia.png" },
];

export default function OurClientele() {
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [lastHoveredImage, setLastHoveredImage] = useState<string | null>(
    steps[0].image
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-[2rem] w-full"
    >
      <h1 className="text-[8vw]  lg:text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Our Clientele
      </h1>
      <p className="my-10 text-[3.5vw] lg:text-[1.2vw] text-zinc-700 w-full lg:w-8/12 mx-auto text-left lg:text-center">
        We have already worked with 200+ clients all over the world and they are
        pretty satisfied with our work.
      </p>

      <div className="w-full mt-5 lg:mt-10 lg:grid grid-cols-1 gap-x-10">
        {/* Steps List */}
        <div className="col-span-1 relative  flex flex-col gap-4">
          <div className="sticky flex justify-around gap-5 mb-10   items-center top-[4rem]">
            {steps.map(({ number, text, image }) => (
              <motion.div
                key={number}
                onClick={() => {
                  setActiveStep(number);
                  setLastHoveredImage(image);
                }}
                className={`w-full hover:scale-105 duration-300 transition-all px-5 p-3 lg:p-3  rounded-full border-2  flex justify-around cursor-pointer ${
                  activeStep === number
                    ? "border-white bg-[#2088ca] scale-105 text-white"
                    : "border-zinc-400"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className={`font-semibold whitespace-nowrap text-[3.5vw] md:text-[3vw] lg:text-[1.2vw] leading-none duration-300 transition-colors ${
                    activeStep === number ? "text-white" : "text-zinc-500 "
                  }`}
                >
                  {text}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        {/* <div className="h-[60vh] overflow-scroll bg-red-200 relative">
          <AnimatePresence>
            <motion.div
              key={activeStep || lastHoveredImage}
              className="absolute inset-0"
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
            >
              <img
                src={
                  steps.find((step) => step.number === activeStep)?.image ||
                  lastHoveredImage ||
                  "/dummy-work.png"
                }
                alt="work"
                className="w-full "
              />
            </motion.div>
          </AnimatePresence>
        </div> */}

        <div className="h-[50vh] overflow-y-scroll overflow-auto cursor-pointer">
        <img
                src={
                  steps.find((step) => step.number === activeStep)?.image ||
                  lastHoveredImage ||
                  "/dummy-work.png"
                }
                alt="work"
                className="w-full "
              />
        </div>
      </div>
    </motion.div>
  );
}
