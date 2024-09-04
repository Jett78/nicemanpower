import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
type Props = {};

export default function JobDetail({}: Props) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleOpenForm = () => {
    setIsOpenForm(true);
    document.body.style.overflowY = "hidden";
  };
  const handleCloseForm = () => {
    setIsOpenForm(false);
    document.body.style.overflowY = "auto";
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[6rem]  lg:pt-[8rem]"
    >
      <div className="w-11/12 lg:w-7/12 mx-auto border-2 border-zinc-500 p-3 lg:p-16 rounded-xl">
        {/* top  */}
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex items-center  justify-between">
            <h2 className="font-semibold text-[5vw] md:text-[3vw] lg:text-[1.3vw]">
              Construction Laborer
            </h2>
            {/* company logo  */}

            <div className="rounded-full object-cover md:hidden object-center w-[4vw] h-[4vw] md:w-[10vw] p-6 md:h-[10vw] bg-white">
              <img
                alt="company-logo"
                src="/public/company-logo.png"
                className="w-full h-full object-center object-contain"
              ></img>
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 gap-x-5">
            <div className="flex w-full flex-wrap mt-2 justify-start items-start">
              {jobData.map((job, index) => (
                <div
                  key={index}
                  className="flex items-start  flex-col gap-2 w-full"
                >
                  <div className="flex justify-center items-center gap-2">
                    <span>{job.icons.location}</span>
                    <span className="text-[15px] md:text-lg lg:text-sm font-medium">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span>{job.icons.date}</span>
                    <span className="text-[15px] md:text-lg lg:text-sm font-medium">
                      {job.date}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span>{job.icons.type}</span>
                    <span className="text-[15px] md:text-lg lg:text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span>{job.icons.salary}</span>
                    <span className="text-[15px] md:text-lg lg:text-sm font-medium">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span>{job.icons.overtime}</span>
                    <span className="text-[15px] md:text-lg lg:text-sm font-medium">
                      {job.overtime}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span>{job.icons.workdays}</span>
                    <span className="text-[15px] md:text-lg lg:text-sm font-medium">
                      {job.workdays}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span>{job.icons.benefits}</span>
                    <span className="text-[15px] md:text-lg lg:text-sm font-medium">
                      {job.benefits}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* company logo  */}
            <div className="md:flex hidden justify-center items-center">
              <div className="rounded-full object-cover object-center md:w-[19vw] p-6 md:h-[19vw] lg:w-[10vw] lg:h-[10vw] bg-white">
                <img
                  alt="company-logo"
                  src="/public/company-logo.png"
                  className="w-full h-full object-center object-contain"
                ></img>
              </div>
            </div>
          </div>

          {/* detail text  */}
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex flex-col gap-2">
              {/* title  */}
              <h3 className="font-semibold text-[4vw] md:text-[3vw]  lg:text-[1.2vw]">
                About company
              </h3>
              {/* desc  */}
              <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[0.8vw] leading-relaxed text-zinc-700">
                We are a leading construction firm based in Dubai, UAE,
                specializing in large-scale infrastructure projects. With a
                commitment to quality and innovation, we pride ourselves on
                delivering exceptional results while fostering a collaborative
                and supportive work environment.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {/* title  */}
              <h3 className="font-semibold text-[4vw] md:text-[3vw]  lg:text-[1.2vw]">
                Job Details and Responsibilities
              </h3>
              {/* desc  */}
              <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[0.8vw] leading-relaxed text-zinc-700">
                As a Construction Laborer, you will be responsible for
                supporting various construction projects by performing manual
                tasks such as digging, lifting, and transporting materials.
                Duties include assisting with site preparation, ensuring safety
                protocols are followed, and collaborating with other workers to
                complete projects efficiently and on schedule.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {/* title  */}
              <h3 className="font-semibold text-[4vw] md:text-[3vw]  lg:text-[1.2vw]">
                Skills and experience
              </h3>
              {/* desc  */}
              <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[0.8vw] leading-relaxed text-zinc-700">
                {` As a Construction Laborer, you will be responsible for
                supporting various construction projects by performing manual
                tasks such as digging, lifting, and transporting materials.
                Duties include assisting with site preparation, ensuring safety
                protocols are followed, and collaborating with other workers to
                complete projects efficiently and on schedule." The ideal
                candidate will have previous experience in a labor-intensive
                role, preferably in construction. Strong physical stamina and
                the ability to work in various weather conditions are essential.
                Candidates should have a good understanding of safety
                regulations and be able to follow instructions accurately.
                Experience with operating basic construction tools and machinery
                is a plus.`}
              </p>
            </div>
          </div>

          <div className="flex justify-start mt-5">
            <button
              onClick={handleOpenForm}
              className="px-[2vw] py-[0.6vw] text-[1vw] font-semibold bg-orange-500 rounded-full text-zinc-50 border-2 border-zinc-600 "
            >
              Apply now
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpenForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-[105] backdrop-blur-md bg-white/40 h-screen flex items-center justify-center"
          >
            <Link
              onClick={handleCloseForm}
              to="/jobs"
              className="w-full absolute top-[10%] left-[10%] flex justify-start"
            >
              <div className="text-zinc-700 z-40 hover:scale-105 duration-300 hover:text-zinc-800 flex  justify-center items-center">
                <div className="overflow-hidden title flex justify-center items-center">
                  <Icon
                    icon="ic:outline-arrow-left"
                    className="w-[1.5rem] h-[1.5rem]"
                  />
                </div>
                <div className="font-medium">Back</div>
              </div>
            </Link>
            {/* form  */}
            <form
              action=""
              className="py-5 w-11/12 md:w-9/12 lg:w-5/12 max-w-3xl mt-5 grid grid-cols-2 gap-5"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[1vw]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  className="p-2 py-4 border-2 rounded-xl border-zinc-800 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[1vw]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="p-2 py-4 border-2 rounded-xl border-zinc-800 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[1vw]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+977 **********"
                  className="p-2 py-4 border-2 rounded-xl border-zinc-800 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="address"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[1vw]"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Kathmandu"
                  className="p-2 py-4 border-2 rounded-xl border-zinc-800 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[1vw]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  //   rows="4"
                  placeholder="Write something here..."
                  className="p-2 py-4 border-2 rounded-xl border-zinc-800 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-[2vw] py-[0.6vw] text-[1vw] font-semibold bg-orange-500 rounded-full text-zinc-50 border-2 border-zinc-600 "
                >
                  Apply
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const jobData = [
  {
    companyName: "Emirates Gas Pvt. Ltd",
    jobTitle: "Construction Laborer",
    description:
      "Seeking hardworking Construction Laborers for various projects in Dubai.",
    location: "Dubai, UAE",
    date: "August 31, 2024",
    type: "Full-Time",
    salary: "100 AED",
    overtime: "Overtime Available",
    workdays: "6 days/week (8hrs)",
    benefits: "Food & Accommodation",
    icons: {
      location: "🏙️",
      date: "📅",
      type: "⏰",
      salary: "💰",
      overtime: "⏳",
      workdays: "🗓️",
      benefits: "🏨",
    },
  },
];
