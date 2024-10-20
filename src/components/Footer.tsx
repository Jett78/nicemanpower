import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isActive = (href: string) => {
    return (
      location.pathname === href || location.pathname.startsWith(`${href}/`)
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full mt-[5vh]"
    >
      <div className="w-11/12 relative lg:w-9/12 mx-auto flex flex-col">
        <div className="w-full  flex justify-center items-center bg-zinc-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-3xl">
          <div className="w-full p-5 lg:p-8 lg:px-16">
            <div className="w-full md:gap-20 gap-10 text-zinc-800  h-full flex flex-col lg:flex-row justify-between  items-center">
              <div className="w-full flex gap-2 flex-col">
                <h1 className="text-[8vw] md:text-[4vw] hero font-medium lg:text-[3vw] leading-normal">
                  Reach out
                </h1>
                <h1 className="text-[3.5vw] sm:text-[2vw] lg:text-[1vw] text-zinc-600 leading-normal pb-2">
                  info@nicerecruitment.org
                </h1>
                <h1 className="text-[3.5vw] sm:text-[2vw] lg:text-[1vw] text-zinc-600 leading-normal pb-2 ">
                9708906858/9706414359
                </h1>
                <h1 className="text-[3.5vw] sm:text-[2vw] lg:text-[1vw] text-zinc-600 leading-normal pb-2 ">
                  Samakhusi Town Planning, Kathmandu, Nepal.
                </h1>

                <div className="flex gap-4 items-center lg:text-[1.5vw] text-xl">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://www.facebook.com/profile.php?id=61563009514672"
                  >
                    <Icon icon="logos:facebook" />
                  </Link>
                  <Icon
                    icon="fa6-brands:square-x-twitter"
                    style={{ color: "black" }}
                  />
                  <Icon icon="skill-icons:instagram" />
                  <Icon icon="devicon:linkedin" />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <p className="w-full text-start  italic text-zinc-600 text-[3.5vw] sm:text-[2vw] lg:text-[0.9vw]">
                  Partner with us to access skilled manpower tailored to meet
                  your industry’s unique demands. Our expertise spans a wide
                  range of sectors, ensuring you get the right talent, every
                  time."
                </p>

                <p className="md:text-[1.4vw] mt-2 font-semibold text-black/75 ">
                  Ready to strengthen your workforce?
                </p>

                <button className=" md:px-[2vw] md:py-[1vw] px-3 py-2 text-[3vw] lg:text-lg text-xs w-fit mt-4 font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 ">
                  <Link to="/contact">Contact Us Today </Link>
                </button>
              </div>
            </div>

            <div className="border-t-[2px] text-zinc-600 pt-6 flex flex-wrap md:justify-between justify-center items-center border-zinc-200 mt-5 lg:mt-10 md:text-[0.8vw] text-xs">
              <span className="">© Copyright 2024 | All rights reserved</span>
              <div>
                Designed & Developed by{" "}
                <span className="font-semibold hover:scale-105 duration-300 cursor-pointer">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://webxnep.com/"
                  >
                    WebX
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* links  */}
        <div className="w-full mx-auto  py-[5vh] lg:grid-cols-2 lg:grid hidden gap-x-5 gap-y-5">
          <img
            className="w-[15vw] lg:w-[6vw]"
            src="/public/logo/nice-logo.png"
            alt=""
          />

          <div className="flex w-full text-nowrap  text-[3vw] md:text-[2.5vw] lg:text-[0.9vw] text-tertiary-500 font-semibold gap-5 justify-end items-center">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.href}
                  className={`transition-all hover:text-green-500 font-medium duration-300 ${
                    isActive(item.href)
                      ? "text-green-500"
                      : "text-tertiary-700 "
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* <span className="text-[2.6vw] flex lg:justify-end md:text-[2.5vw] lg:text-[1vw] text-tertiary-700">
            <span>Designed & Developed by:</span> <br />{" "}
            <span className="font-semibold cursor-pointer">WebX</span>
          </span> */}
        </div>
      </div>
    </motion.div>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/jobs", label: "Jobs" },
];
