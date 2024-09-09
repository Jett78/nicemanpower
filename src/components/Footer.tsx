import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
type Props = {};

export default function Footer({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full mt-[5vh]"
    >
      <div className="w-11/12 relative lg:w-8/12 mx-auto flex flex-col">
        <div className="w-full  flex justify-center items-center bg-zinc-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-3xl">
          <div className="w-full p-5 lg:p-8 lg:px-16">
            <div className="w-full gap-20 text-zinc-800  h-full flex flex-col lg:flex-row justify-between  items-center">
              <div className="w-full flex gap-3 flex-col">
                <h1 className="text-[8vw] md:text-[4vw] hero font-medium lg:text-[3vw] leading-normal">
                  Reach out
                </h1>
                <h1 className="text-[4vw] md:text-[4vw] lg:text-[1vw] text-zinc-600 leading-normal pb-2 border-b-[2px] border-zinc-200">
                  info@nicerecruitment.org
                </h1>
                <h1 className="text-[4vw] md:text-[4vw] lg:text-[1vw] text-zinc-600 leading-normal pb-2 border-b-[2px] border-zinc-200">
                  +977 01-4354297
                </h1>
                <h1 className="text-[4vw] md:text-[4vw] lg:text-[1vw] text-zinc-600 leading-normal pb-2 border-b-[2px] border-zinc-200">
                  Samakhusi Town Planning, Kathmandu, Nepal.
                </h1>

                <div className="flex mt-2 gap-3 items-center text-zinc-700  duration-300">
                  <Icon
                    icon="ic:baseline-facebook"
                    className="w-6 h-6 hover:scale-95 duration-300 hover:text-zinc-900"
                  />
                  <Icon
                    icon="ri:instagram-fill"
                    className="w-6 h-6 hover:scale-95 duration-300 hover:text-zinc-900"
                  />
                  <Icon
                    icon="ri:twitter-fill"
                    className="w-6 h-6 hover:scale-95 duration-300 hover:text-zinc-900"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <p className="w-full text-start  italic text-zinc-600 text-[3.5vw] lg:text-[0.9vw]">
                  Partner with us to access skilled manpower tailored to meet
                  your industry’s unique demands. Our expertise spans a wide
                  range of sectors, ensuring you get the right talent, every
                  time."
                </p>

                <p className="text-[1.2vw] mt-2 font-medium text-blue-500">
                  Ready to strengthen your workforce?
                </p>
                <Link to="/contact">
                  <button className="px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 ">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>

            <div className="border-t-[2px] text-zinc-600 pt-4 flex justify-between items-center border-zinc-200 mt-5 lg:mt-10 text-[0.8vw]">
              <span className="">© Copyright 2024 | All rights reserved</span>
              <div>
                Designed & Developed by{" "}
                <span className="font-semibold hover:scale-105 duration-300 cursor-pointer">
                  webX
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* links  */}
        <div className="w-full mx-auto  py-[5vh] lg:grid-cols-2 grid gap-x-5 gap-y-5">
          {/* <div
            className="flex flex-col text-[3vw]   md:text-[2.5vw] lg:text-[1vw] text-tertiary-700 gap-2 
           justify-start items-start"
          >
            <span>info@nicerecruitment.org</span>
            <span>+977 01-4354297</span>
            <span>At : Samakhusi Town Planning, Kathmandu, Nepal.</span>
            <span className="text-[3vw] md:text-[2.5vw]  lg:text-[0.8vw]">
              ©️ 2024 | All Rights Reserved
            </span>
          </div> */}

          <img
            className="w-[15vw] lg:w-[6vw]"
            src="/public/logo/nice-logo.png"
            alt=""
          />

          <div className="flex w-full text-nowrap  text-[3vw] md:text-[2.5vw] lg:text-[0.9vw] text-tertiary-500 font-semibold gap-5 justify-end items-center">
            <Link to="" className="hover:text-secondary-500">
              Home
            </Link>
            <Link to="" className="hover:text-secondary-500">
              About
            </Link>
            <Link to="" className="hover:text-secondary-500">
              Services
            </Link>
            <Link to="" className="hover:text-secondary-500">
              Blogs
            </Link>
            <Link to="" className="hover:text-secondary-500">
              Contact
            </Link>
            <Link to="" className="hover:text-secondary-500">
              Find Jobs
            </Link>
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
