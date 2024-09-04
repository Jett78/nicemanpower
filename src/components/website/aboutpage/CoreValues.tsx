import { motion } from "framer-motion";
import { useState } from "react";

type Props = {};

export default function CoreValues({}: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-[2rem] w-full relative">
      <h1 className="text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Our Core Values
      </h1>
      <p className="text-[1.2vw] text-zinc-700 w-8/12 mx-auto text-center">
        Discover the principles and standards that drive our commitment to
        excellence, integrity, and innovation in everything we do.
      </p>

      <div className="grid w-full  grid-cols-2 mt-10 gap-5">
        {CoreValuesData.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer bg-zinc-100 flex justify-start  items-center px-5 py-10 rounded-lg relative"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className={`text-[3.5vw] md:text-[2.5vw] font-medium lg:text-[1.2vw] ${
                hovered === index
                  ? "relative z-40 text-secondary-400"
                  : "text-zinc-700"
              }`}
            >
              {item.name}
            </span>

            {hovered === index && (
              <motion.img
                src={item.img}
                alt={item.name}
                className="absolute rounded-lg z-50 hidden lg:block top-[0] mt-[-15%] right-0 w-[20vw] h-[20vw] object-cover brightness-70 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8, x: "-50%", rotate: 0 }}
                animate={{ opacity: 1, scale: 1, x: "0%", rotate: -6 }}
                exit={{ opacity: 0 }}
                transition={{
                  // type: "spring",
                  // stiffness: 300,
                  // damping: 20,
                  duration: 0.4,
                }}
                style={{
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const CoreValuesData = [
  { id: 1, name: "Excellence", img: "/public/values/value1.png" },
  { id: 2, name: "Honesty", img: "/public/values/value2.png" },
  { id: 3, name: "Loyalty", img: "/public/values/value3.png" },
  { id: 4, name: "Respect", img: "/public/values/value4.png" },
  { id: 5, name: "Dedication", img: "/public/values/value5.png" },
  { id: 6, name: "Team work", img: "/public/values/value6.png" },
  {
    id: 7,
    name: "Empowerment",
    img: "/public/values/value7.png",
  },
  {
    id: 8,
    name: "Environment Responsibility",
    img: "/public/values/value8.png",
  },
];
