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
        <div className="w-full h-[30vh] flex justify-center items-center bg-tertiary-800 rounded-3xl">
          <div className="w-full p-[2rem] text-tertiary-50 pb-4 flex justify-between  items-center">
            <div className=" flex flex-col">
              <h1 className="text-[5vw] md:text-[4vw] lg:text-[3vw] leading-normal">
                Reach out
              </h1>
              <h1 className="text-[5vw] md:text-[4vw] lg:text-[1vw] text-tertiary-300 leading-normal">
                info@nicerecruitment.org
              </h1>
            </div>

            <p className="w-[50%] text-end text-tertiary-200 text-[1.2vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              perferendis, odio at in dolores recusandae natus aliquam ut
              inventore repellendus.
            </p>
          </div>
        </div>

        {/* links  */}
        <div className="w-full mx-auto  py-[5vh] grid-cols-2 grid gap-x-5 gap-y-5">
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

          <img className="w-[6vw]" src="/public/logo/nice-logo.png" alt="" />

          <div className="flex w-full text-nowrap  text-[3vw] md:text-[2.5vw] lg:text-[0.9vw] text-tertiary-700 font-semibold gap-5 justify-end items-center">
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
