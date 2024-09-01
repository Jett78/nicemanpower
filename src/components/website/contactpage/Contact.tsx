import { motion } from "framer-motion";
type Props = {};

export default function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[6rem]  lg:pt-[7rem] pb-[4rem] w-9/12 lg:w-9/12 mx-auto"
    >
      {" "}
      <h1 className="hero text-[8vw] lg:text-[3vw]  lg:text-center font-semibold ">
        <span className="text-secondary-400">Reach Out</span> to Us
      </h1>
      <div className="grid w-full   md:grid-cols-5 gap-x-[8vw]">
        <div className="flex col-span-2 justify-center items-start flex-col gap-2">
          {/* office */}
          <div className="w-full flex flex-col gap-1 py-5 border-b border-zinc-800">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-400">
              Office
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-200">
              Samakhusi Town Planning, Kathmandu, Nepal.
            </h3>
          </div>

          {/* EMAIL */}
          <div className="w-full flex flex-col gap-1 py-5 border-b border-zinc-800">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-400">
              Email
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-200">
              info@nicerecruitment.org
            </h3>
          </div>

          {/* office */}
          <div className="w-full flex flex-col gap-1 py-5 border-b border-zinc-800">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-400">
              Phone
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-200">
              +977 01-4354297
            </h3>
          </div>
        </div>

        {/* form  */}
        <form
          action=""
          className="col-span-3  py-5 mt-5 grid grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-200 lg:text-[1.1vw]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="p-2 py-5 border border-zinc-800 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-200 lg:text-[1.1vw]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="p-2 py-5 border border-zinc-800 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-200 lg:text-[1.1vw]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 py-5 border border-zinc-800 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-200 lg:text-[1.1vw]"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2 py-5 border border-zinc-800 outline-none bg-transparent"
              required
            />
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-200 lg:text-[1.1vw]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              //   rows="4"
              className="p-2 py-5 border border-zinc-800 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex justify-start">
            <button className="border border-black dark:border-white px-8 py-3 rounded-lg text-[3.5vw] md:text-[2.5vw] lg:text-[1vw] leading-none flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
