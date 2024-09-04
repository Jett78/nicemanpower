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
      <h1 className="text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Reach Out Us
      </h1>
      <p className="text-[1.2vw] lg:text-center mx-auto w-8/12 leading-relaxed text-zinc-700">
        Search all the open positions on the web. Get your own personalized
        salary estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <div className="grid w-full mt-5   md:grid-cols-5 gap-x-[8vw]">
        <div className="flex col-span-2 justify-center items-start flex-col gap-2">
          {/* office */}
          <div className="w-full flex flex-col gap-1 py-5 border-b-2 border-zinc-200">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-700">
              Office
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-700">
              Samakhusi Town Planning, Kathmandu, Nepal.
            </h3>
          </div>

          {/* EMAIL */}
          <div className="w-full flex flex-col gap-1 py-5 border-b-2 border-zinc-200">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-700">
              Email
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-700">
              info@nicerecruitment.org
            </h3>
          </div>

          {/* office */}
          <div className="w-full flex flex-col gap-1 py-5 border-b-2 border-zinc-200">
            <span className="text-[3vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-700">
              Phone
            </span>
            <h3 className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-tertiary-700">
              +977 01-4354297
            </h3>
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
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="p-2 py-5 border-2 rounded-xl border-zinc-600 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="p-2 py-5 border-2 rounded-xl border-zinc-600 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 py-5 border-2 rounded-xl border-zinc-600 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2 py-5 border-2 rounded-xl border-zinc-600 outline-none bg-transparent"
              required
            />
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              //   rows="4"
              className="p-2 py-5 border-2 rounded-xl border-zinc-600 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex justify-start">
            <button className="px-[2vw] py-[0.6vw] text-[1vw] font-semibold bg-orange-500 rounded-full text-zinc-50 border-2 border-zinc-600 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
