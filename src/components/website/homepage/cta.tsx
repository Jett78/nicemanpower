// import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Props = {};

// Array of image data
const images = [
  { src: "/public/hero-img/hero1.png", alt: "Hero Image 1" },
  { src: "/public/hero-img/hero2.png", alt: "Hero Image 2" },
  { src: "/public/hero-img/hero3.png", alt: "Hero Image 3" },
  { src: "/public/hero-img/hero4.png", alt: "Hero Image 4" },
  { src: "/public/hero-img/hero5.png", alt: "Hero Image 5" },
  { src: "/public/hero-img/hero6.png", alt: "Hero Image 6" },
];

export default function Cta({}: Props) {
  const { scrollYProgress } = useScroll();
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 400]);

  const smoothXLeft = useSpring(xLeft, { stiffness: 60, damping: 20 });
  const smoothXRight = useSpring(xRight, { stiffness: 60, damping: 20 });

  return (
    <div className="w-full lg:pt-[6rem]  overflow-hidden flex justify-center items-center">
      <div className="flex flex-col relative gap-4">
        <div className="flex-col absolute hero top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] lg:w-[15vw] h-[40vw] lg:h-[15vw] rounded-full  bg-gradient-to-tr from-green-600 to-green-400 text-white z-10 flex justify-center items-center">
          <span className="text-[4vw] lg:text-[2vw]  hero text-center font-semibold">
            100+ <br /> JOBS
          </span>
          <Icon
            icon="icon-park-outline:correct"
            className="w-10 lg:w-20 h-10 lg:h-20 text-zinc-50"
          />
        </div>

        {/* Scrolls to the left */}
        <motion.div
          className="flex justify-center items-center gap-3 lg:gap-5"
          style={{ x: smoothXLeft }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[70vw] lg:w-[30vw] h-[50vw] lg:h-[15vw] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full rounded-3xl brightness-90 object-cover object-center"
              />
            </div>
          ))}
        </motion.div>

        {/* Scrolls to the right */}
        <motion.div
          className="flex justify-center items-center gap-3 lg:gap-5"
          style={{ x: smoothXRight }}
        >
          {images
            .slice()
            .reverse()
            .map((image, index) => (
              <div
                key={index}
                className="w-[70vw] lg:w-[30vw] h-[50vw] lg:h-[15vw] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full rounded-3xl brightness-90 object-cover object-center"
                />
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
