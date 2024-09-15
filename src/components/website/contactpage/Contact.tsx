import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[4rem]  lg:pt-[8rem] pb-[4rem] w-11/12 lg:w-9/12 mx-auto"
    >
      <h1 className="text-[8vw] lg:text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Reach Out To Us
      </h1>
      <p className="mt-4 text-[3.5vw] lg:text-[1.2vw] lg:text-center mx-auto lg:w-8/12 leading-relaxed text-zinc-700">
        Search all the open positions on the web. Get your own personalized
        salary estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <div className="grid w-full   md:grid-cols-5 gap-x-[8vw]">
        <div className="flex col-span-2 justify-center items-start flex-col gap-2">
          {/* office */}
          <div className="w-full flex flex-col gap-1 py-5 border-b-2 border-zinc-200">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-700">
              Office
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-500">
              Samakhusi Town Planning, Kathmandu, Nepal.
            </h3>
          </div>

          {/* EMAIL */}
          <div className="w-full flex flex-col gap-1 py-5 border-b-2 border-zinc-200">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-700">
              Email
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-500">
              info@nicerecruitment.org
            </h3>
          </div>

          {/* office */}
          <div className="w-full flex flex-col gap-1 py-5 border-b-2 border-zinc-200">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-700">
              Phone
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-500">
              +977 01-4354297
            </h3>
          </div>

          {/* social */}
          <div className="w-full flex flex-col gap-1 py-5 border-b-2 border-zinc-200">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-700">
              Social
            </span>
            <div className="flex gap-4 items-center text-[2vw]">
              <Icon icon="logos:facebook" />
              <Icon
                icon="fa6-brands:square-x-twitter"
                style={{ color: "black" }}
              />
              <Icon icon="skill-icons:instagram" />
              <Icon icon="devicon:linkedin" />
            </div>
          </div>
        </div>

        {/* form  */}
        <form
          action=""
          className="col-span-3  py-5 mt-5 grid grid-cols-2 gap-5"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-500 lg:text-[0.9vw]"
            >
              First Name <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="p-2 py-3 lg:py-5 border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Last Name <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="p-2 py-3 lg:py-5 border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Email <span className="text-blue-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 py-3 lg:py-5 border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Phone <span className="text-blue-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2 py-3 lg:py-5 border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
              required
            />
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Message <span className="text-blue-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              //   rows="4"
              className="p-2 py-3 lg:py-5 border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex justify-start">
            <button className="px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.8089545489173!2d85.32167295054035!3d27.718339218365184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ef724448ef%3A0x3a3a57d9bf6a4146!2sNice%20Recruiting%20Agency!5e0!3m2!1sen!2snp!4v1726401289263!5m2!1sen!2snp"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl mt-[4vw]"
      ></iframe>
    </motion.div>
  );
}
