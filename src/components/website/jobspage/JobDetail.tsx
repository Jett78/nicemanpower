import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function JobDetail() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };
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
      className="pt-[4rem]  lg:pt-[8rem]"
    >
      <Link to="/jobs">
        <div className="text-zinc-500 z-40 fixed left-40 cursor-pointer  hover:scale-105 duration-300 hover:text-zinc-600 flex items-center">
          <div className="overflow-hidden title flex justify-center items-center">
            <Icon
              icon="ic:outline-arrow-left"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </div>
          <div className="font-medium">Back</div>
        </div>
      </Link>
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
                  className="grid grid-cols-2 place-content-start place-items-start whitespace-nowrap   gap-x-10 gap-y-3 w-full"
                >
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                      icon={job.icons.location}
                    ></Icon>
                    <span className="text-sm font-medium text-zinc-700">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                      icon={job.icons.date}
                    ></Icon>
                    <span className="text-sm font-medium text-zinc-700">
                      {job.date}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                      icon={job.icons.type}
                    ></Icon>
                    <span className="text-sm font-medium text-zinc-700">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                      icon={job.icons.salary}
                    ></Icon>
                    <span className="text-sm font-medium text-zinc-700">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                      icon={job.icons.overtime}
                    ></Icon>
                    <span className="text-sm font-medium text-zinc-700">
                      {job.overtime}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                      icon={job.icons.workdays}
                    ></Icon>
                    <span className="text-sm font-medium text-zinc-700">
                      {job.workdays}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                      icon={job.icons.benefits}
                    ></Icon>
                    <span className="text-sm font-medium text-zinc-700">
                      {job.benefits}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* company logo  */}
            <div className="md:flex hidden justify-center items-center">
              <div className="object-cover object-center w-full h-[15vw] bg-white">
                <img
                  alt="company-logo"
                  src="/public/vacancy.png"
                  className="cursor-pointer w-full h-full object-center object-contain"
                  onClick={() => openModal(0)}
                ></img>
              </div>
            </div>
          </div>

          {/* Fullscreen Image Modal */}
          <AnimatePresence>
            {isModalOpen && currentImageIndex !== null && (
              <motion.div
                className="fixed inset-0 z-50 pt-[4rem] flex items-center justify-center bg-black bg-opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <div className="relative w-11/12 h-auto max-w-3xl">
                  {/* <div className="absolute w-full flex justify-center items-center bottom-5 left-1/2 -translate-x-1/2">
                <span className="text-[3.5vw] md:text-[2vw] lg:text-[1vw] italic font-semibold text-zinc-100">
                  {documentsData[currentImageIndex].name}
                </span>
              </div> */}
                  <motion.img
                    alt="company-logo"
                    src="/public/vacancy.png"
                    className="w-[30vw] mx-auto rounded-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
              className="px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 "
            >
              Apply For The Position
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
            className="fixed top-0 left-0 w-full z-[105] backdrop-blur-md bg-black/40 h-screen flex items-center justify-center"
          >
            <Link
              onClick={handleCloseForm}
              to="/jobs"
              className="w-full absolute top-[10%] left-[10%] flex justify-start"
            >
              {/* <div className="text-zinc-100 z-40 hover:scale-105 duration-300 hover:text-zinc-50 flex  justify-center items-center">
                <div className="overflow-hidden title flex justify-center items-center">
                  <Icon
                    icon="ic:outline-arrow-left"
                    className="w-[1.5rem] h-[1.5rem]"
                  />
                </div>
                <div className="font-medium">Back</div>
              </div> */}
            </Link>
            {/* form  */}
            <form
              action=""
              className="py-5 relative bg-white p-5 rounded-3xl pt-[3rem] w-11/12 md:w-9/12 lg:w-8/12  mt-5 grid grid-cols-2 gap-5"
            >
              {/* <div
                onClick={handleCloseForm}
                className="absolute cursor-pointer hover:scale-95 duration-300 text-zinc-700 hover:text-zinc-900 right-5 top-5"
              >
                <Icon icon="carbon:close-filled" className="w-7 h-7" />
              </div> */}
              <img
                src="../public/cancelbtn.svg"
                alt="cancel-btn"
                className="absolute right-6 top-6 cursor-pointer w-8"
                onClick={handleCloseForm}
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Full Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your Full Name"
                  name="firstName"
                  className="p-2 w-[25vw] text-sm py-2 lg:py-4 border-2 rounded-xl  border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Father's Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your Last Name"
                  name="lastName"
                  className="p-2 py-2 w-[25vw] text-sm  lg:py-4 border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Passport Number<span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your Last Name"
                  name="lastName"
                  className="p-2 py-2 lg:py-4 w-[25vw] text-sm  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Date of Birth<span className="text-blue-500">*</span>
                </label>
                <input
                  type="date"
                  id="lastName"
                  placeholder="Your Last Name"
                  name="lastName"
                  className="p-2 py-2 lg:py-4 w-[25vw] text-sm  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Gender<span className="text-blue-500">*</span>
                </label>
                <select
                  id="gender"
                  className="p-2 py-2 cursor-pointer lg:py-4 w-[25vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                >
                  <option value="" disabled selected hidden className="">
                    Gender
                  </option>
                  <option value="US">Male</option>
                  <option value="CA">Female</option>
                  <option value="FR">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Marital Status<span className="text-blue-500">*</span>
                </label>
                <select
                  id="maritial-status"
                  className="p-2 py-2 cursor-pointer lg:py-4 w-[25vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                >
                  <option value="" disabled selected hidden className="">
                    Maritial Status
                  </option>
                  <option value="US">Single</option>
                  <option value="CA">Married</option>
                  <option value="FR">Divorced</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Mobile Number<span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your Last Name"
                  name="lastName"
                  className="p-2 py-2 lg:py-4 w-[25vw] text-sm  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="countries"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Latest Qualification<span className="text-blue-500">*</span>
                </label>
                <select
                  id="qualifications"
                  className="p-2 py-2 cursor-pointer lg:py-4 w-[25vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                >
                  <option value="" disabled selected hidden className="">
                    Your Latest Qualification
                  </option>
                  <option value="US">Bachelors</option>
                  <option value="CA">Masters</option>
                  <option value="FR">High School</option>
                  <option value="DE">UnderGraduate</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Upload CV <span className="text-blue-500">*</span>
                </label>
                <input
                  type="file"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-2 py-2 lg:py-4 w-[25vw] text-sm  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                  Upload Passport Size Photo <span className="text-blue-500">*</span>
                </label>
                <input
                  type="file"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="p-2 py-2 lg:py-4 w-[25vw] text-sm  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[1vw]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  //   rows="4"
                  placeholder="Write something here..."
                  className="p-2 py-4 w-[58vw] text-sm border-2 rounded-xl border-zinc-300 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 "
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
      location: "ep:location",
      date: "uiw:date",
      type: "mingcute:time-line",
      salary: "dashicons:money-alt",
      overtime: "mdi:sort-time-descending-outline",
      workdays: "material-symbols:work-history-outline",
      benefits: "lucide-lab:houses",
    },
  },
];
