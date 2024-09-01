// import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Function to generate random positions for dots
// const generateDots = (count: number) => {
//   return Array.from({ length: count }).map(() => ({
//     x: Math.random() * 100 - 50, // Initial random x position
//     y: Math.random() * 100 - 50, // Initial random y position
//   }));
// };

export default function Hero() {
  // const [mouseX, setMouseX] = useState(0);
  // const [mouseY, setMouseY] = useState(0);
  // const dots = generateDots(30); // Number of dots

  // // Update mouse position (within the hero section)
  // const handleMouseMove = (e: any) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   const x = (e.clientX - rect.left) / rect.width - 0.5;
  //   const y = (e.clientY - rect.top) / rect.height - 0.5;
  //   setMouseX(x);
  //   setMouseY(y);
  // };

  return (
    <div
      className="w-full h-screen flex justify-center items-center relative overflow-hidden bg-black"
      // onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute w-[15rem] h-[15rem] md:w-[26vw] md:h-[26vw] rounded-full filter blur-[90px] opacity-[0.9]"
        style={{
          background: `conic-gradient(
      from 0deg,
      #9ae49a 0%,    /* Brighter Soft Green */
      #9ae49a 10%,   /* Brighter Soft Green */
      #f8b400 20%,   /* Bright Orange */
      #a2c9ff 30%,   /* Bright Sky Blue */
      #e5b88f 40%,   /* Bright Soft Brown */
      #a2c9ff 50%,   /* Bright Sky Blue */
      #e5b88f 60%,   /* Bright Soft Brown */
      #f8b400 70%,   /* Bright Orange */
      #9ae49a 80%,   /* Brighter Soft Green */
      #9ae49a 100%   /* Brighter Soft Green */
    )`,
          boxShadow: `0 0 80px rgba(100, 200, 100, 0.8)`, // Enhanced glowing effect
        }}
        animate={{
          rotate: [0, 360], // Continuous rotation
          scale: [1, 1.05, 1], // Slight pulsing effect
        }}
        transition={{
          rotate: {
            duration: 20, // Rotation duration
            ease: "linear", // Smooth linear transition
            repeat: Infinity, // Infinite rotation
          },
          scale: {
            duration: 3, // Pulse duration
            ease: "easeInOut", // Ease in and out for the pulse
            repeat: Infinity, // Infinite pulse
          },
        }}
      ></motion.div>

      <div className="relative w-11/12 mx-auto z-[2] flex justify-center items-center flex-col gap-2 text-white">
        <h1 className="text-[10vw] hero lg:text-[5vw] font-medium pointer-events-none leading-none lg:leading-tight">
          Find The Job You Deserve
        </h1>
        <p className="text-[4vw] lg:text-[1.2vw] pointer-events-none lg:leading-none">
          Your dream job is closer than you think—let us help you find it.
        </p>
        <div className="flex text-[1vw] mt-5 justify-start lg:justify-center w-full items-center gap-4">
          <Link
            to="/contact"
            className="border border-black dark:border-white px-8 py-3 rounded-lg text-[3.5vw] md:text-[3vw] lg:text-[1vw] leading-none flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            to="/jobs"
            className="bg-blue-500 text-white  px-8 py-3 rounded-lg text-[3.5vw] md:text-[3vw] lg:text-[1vw] leading-none flex justify-center items-center hover:bg-blue-600 transition-colors duration-300"
          >
            Find Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
