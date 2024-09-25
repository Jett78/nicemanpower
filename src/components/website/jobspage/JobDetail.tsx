import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import jobData from "../../../jobs-data/JobsData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function JobDetail() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  const { index } = useParams();

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

  useEffect(() => {
    if (isOpenForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenForm]);

  const jobIndex = index ? Number(index) : -1;
  const job = jobData[jobIndex];

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[4rem]  lg:pt-[8rem]"
    >
      <div>
        <div
          onClick={handleGoBack}
          className="text-zinc-500 z-40 lg:fixed left-40 cursor-pointer  hover:scale-105 duration-300 hover:text-zinc-600 flex items-center"
        >
          <div className="overflow-hidden title flex justify-center items-center">
            <Icon
              icon="ic:outline-arrow-left"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </div>
          <div className="font-medium">Back</div>
        </div>
      </div>
      <div className="w-11/12 lg:w-7/12 mx-auto border-2 border-zinc-500 p-3 lg:p-14 rounded-xl md:mt-0 mt-8">
        {/* top  */}

        <div className="flex flex-col itemscenter gap-2 w-full">
          <div className="grid grid-cols-2">
            <div>
              <img
                src={job.img}
                alt="company-logo"
                className="w-24 h-24 border-2 border-zinc-500 rounded-full object-contain mb-8"
              />
              <h2 className="font-semibold text-[4.5vw] whitespace-nowrap md:text-[3vw] lg:text-[1.3vw]">
                {job.jobTitle}
              </h2>

              <div className="w-full">
                <div className="flex w-full flex-wrap mt-2 justify-start items-start">
                  <div
                    key={index}
                    className="grid sm:grid-cols-2 place-content-start place-items-start whitespace-nowrap   gap-x-10 gap-y-3 w-full"
                  >
                    <div className="flex justify-center items-center gap-[6px]">
                      {/* <Icon
                      className="w-4 h-4 object-cover object-center text-green-500"
                    ></Icon> */}
                      <Icon
                        className=" text-[1.2em] object-cover object-center text-green-500"
                        icon="carbon:location-company"
                        style={{ color: "[#f4f4f4]" }}
                      />
                      <span className="text-sm font-medium text-zinc-700">
                        {job.jobTitle}
                      </span>
                    </div>
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
                        className="text-[0.8em] ml-1 object-cover object-center text-green-500"
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
                </div>
              </div>
            </div>

            {/* vacancy logo  */}
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

                {/* <div className="absolute left-1/2" onClick={closeModal}>
                  <img
                    src="../public/cancelbtn.svg"
                    alt="cancel-btn"
                    className="cursor-pointer"
                  />
                </div> */}
              </motion.div>
            )}
          </AnimatePresence>

          {/* detail text  */}
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex flex-col gap-2">
              {/* title  */}
              <h3 className="font-semibold text-[4vw] md:text-[3vw]  lg:text-[1.2vw]">
                About company
              </h3>
              {/* desc  */}
              <p className="text-[3.5vw] sm:text-[2vw] md:text-[2.3vw] lg:text-[0.8vw] leading-relaxed text-zinc-700">
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
              <p className="text-[3.5vw] sm:text-[2vw] md:text-[2.3vw] lg:text-[0.8vw] leading-relaxed text-zinc-700">
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
              <p className="text-[3.5vw] sm:text-[2vw] md:text-[2.3vw] lg:text-[0.8vw] leading-relaxed text-zinc-700">
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
              className=" md:px-[2vw] md:py-[1vw] px-3 py-2 text-[3vw] lg:text-lg text-xs font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 "
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
            data-lenis-prevent
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
              className="pt-10 relative  md:w-[54vw]  bg-white p-5 rounded-3xl  mt-5 grid grid-cols-2 gap-5"
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
                className="absolute md:right-6 right-4 top-2 cursor-pointer md:w-8 w-6"
                onClick={handleCloseForm}
              />

              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Full Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First Name"
                  name="firstName"
                  className="p-2 lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Father's Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First Name"
                  name="firstName"
                  className="p-2 lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Passport Number <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First Name"
                  name="firstName"
                  className="p-2 lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Date of Birth <span className="text-blue-500">*</span>
                </label>
                <input
                  type="date"
                  id="lastName"
                  placeholder="Your Last Name"
                  name="lastName"
                  className="p-2 md:text-sm text-[10px] lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>

              {/* -----gender---- */}
              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Gender <span className="text-blue-500">*</span>
                </label>

                <select
                  id="gender"
                  className="p-2 lg:py-[0.8vw] md:text-sm text-[10px] border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                >
                  <option value="" hidden>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                {/* <div className="absolute top-14 right-2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
              </div>
              {/* <div className="flex flex-col gap-1">
              <label
                  htmlFor="lastName"
                  className="font-medium text-[3.5vw] md:text-[2.5vw] text-zinc-800 lg:text-[0.9vw]"
                >
                 Gender <span className="text-blue-500">*</span>
                </label>
                <select
                  id="countries"
                  className="p-2 py-2 lg:py-4 w-[25vw] text-sm  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"

                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div> */}

              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Maritial Status <span className="text-blue-500">*</span>
                </label>

                <select
                  id="gender"
                  className="p-2 lg:py-[0.8vw] md:text-sm text-[10px] border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                >
                  <option value="" hidden>
                    Maritial Status
                  </option>
                  <option value="Male">Single</option>
                  <option value="Female">Married</option>
                  <option value="Other">Divorced</option>
                </select>

                {/* <div className="absolute top-14 right-2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
              </div>
              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Mobile Number <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First Name"
                  name="firstName"
                  className="p-2 lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Qualifications <span className="text-blue-500">*</span>
                </label>

                <select
                  id="gender"
                  className="p-2 lg:py-[0.8vw] md:text-sm text-[10px] border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
                >
                  <option value="" hidden>
                    Qualifications
                  </option>
                  <option value="Male">High School</option>
                  <option value="Female">Bachelor</option>
                  <option value="Other">Master</option>
                </select>

                {/* <div className="absolute top-14 right-2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
              </div>

              <div className="flex flex-col md:w-full w-28 mx-auto">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Upload File <span className="text-blue-500">*</span>
                </label>
                <input
                  type="file"
                  className="md:text-sm text-[8px] w-full rounded-lg border-2 outline-none text-gray-400 font-semibold text-sm bg-white file:cursor-pointer cursor-pointer file:border-0 file:p-2 md:file:py-[0.8vw] file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-blue-500 file:hover:text-white  file:text-gray-500"
                />
              </div>
              <div className="flex flex-col md:w-full w-28 mx-auto ">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Upload photo <span className="text-blue-500">*</span>
                </label>
                <input
                  type="file"
                  className="md:text-sm text-[8px] w-full rounded-lg border-2 outline-none text-gray-400 font-semibold text-sm bg-white file:cursor-pointer cursor-pointer file:border-0 file:p-2 md:file:py-[0.8vw] file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-blue-500 file:hover:text-white  file:text-gray-500"
                />
              </div>

              <div className="col-span-2 mt-4 flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
                >
                  Message <span className="text-blue-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  //   rows="4"
                  placeholder="Write something here..."
                  className="p-2 py-4 w-full  md:h-[5vw] h-[10vh] text-sm border-2 rounded-xl border-zinc-300 outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex justify-start mt-4">
                <button className="md:px-[1.7vw] md:py-[0.7vw] px-3 py-2 text-[3vw] lg:text-md text-xs font-semibold bg-blue-600 hover:bg-blue-700 duration-300 rounded-full text-zinc-50  border-zinc-600 ">
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
