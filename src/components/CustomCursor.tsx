"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        stiffness: 300, // Adjust the stiffness for responsiveness
        damping: 30, // Adjust the damping for smoothness
        mass: 0.2, // Adjust the mass for better follow behavior
      },
    });
  }, [mousePosition, controls]);

  return (
    <motion.div
      className="custom-cursor mix-blend-difference hidden pointer-events-none z-[50] lg:block fixed top-0 left-0 w-[0.8vw] h-[0.8vw] rounded-full bg-white"
      animate={controls}
    />
  );
};

export default CustomCursor;
