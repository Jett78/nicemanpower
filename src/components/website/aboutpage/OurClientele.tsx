import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const steps = [
  { number: 1, text: "Bahrain", image: "/public/client/bahrain.png" },
  { number: 2, text: "UAE", image: "/public/client/uae.png" },
  { number: 3, text: "Saudi Arabia", image: "public/client/saudi.png" },
  { number: 4, text: "Qatar", image: "/public/client/quatar.png" },
  { number: 5, text: "Malaysia", image: "/public/client/malaysia.png" },
];

export default function OurClientele({}: Props) {
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
      <h1 className="text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Our Clientele
      </h1>
      <p className="text-[1.2vw] text-zinc-700 w-8/12 mx-auto text-center">
        We have already worked with 200+ clients all over the world and they are
        pretty satisfied with our work.
      </p>

      <div className="w-full mt-10 lg:grid grid-cols-5 gap-x-10">
        {/* Steps List */}
        <div className="col-span-1 relative h-full flex flex-col gap-4">
          <div className="sticky top-[4rem]">
            {steps.map(({ number, text, image }) => (
              <motion.div
                key={number}
                onMouseEnter={() => {
                  setActiveStep(number);
                  setLastHoveredImage(image);
                }}
                onMouseLeave={() => {
                  if (activeStep === number) {
                    setActiveStep(null);
                  }
                }}
                className={`w-full duration-300 transition-all py-5 flex justify-between cursor-pointer ${
                  activeStep === number ? "border-tertiary-600" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className={`font-semibold text-[5vw] md:text-[3vw] lg:text-[1.5vw] duration-300 transition-colors ${
                    activeStep === number ? "text-zinc-700" : "text-zinc-500 "
                  }`}
                >
                  {text}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="col-span-4  h-auto relative overflow-hidden">
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
                className="w-[100%]   object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
