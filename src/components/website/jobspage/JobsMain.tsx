import { useState } from "react";
import { motion } from "framer-motion";
import jobData from "../../../jobs-data/JobsData";
import { Link } from "react-router-dom";

type Props = {};

export default function JobsMain({}: Props) {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  // Determine which jobs to display based on the state
  const displayedJobs = showAll ? jobData : jobData.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-[2rem] pt-[6rem]  lg:pt-[7rem] w-full"
    >
      <h1 className="text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Vacancies Announcement
      </h1>
      <p className="text-[1.2vw] lg:text-center mx-auto w-8/12 leading-relaxed text-zinc-700">
        Discover exciting career opportunities with our latest job openings.
        Find roles that match your skills and ambitions and apply today to join
        our dynamic team!
      </p>

      {/* cards */}
      <div className="grid w-11/12 lg:w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        {displayedJobs.map((job, index) => (
          <Link to={`/jobs/${job.companyName}`} key={index}>
            <div className="w-full cursor-pointer h-full bg-zinc-100  duration-300 transition-all rounded-2xl flex flex-col justify-start p-10 items-start gap-3 relative overflow-hidden">
              <div className="w-full flex justify-start items-start flex-col gap-2">
                {/* Company Name & Logo */}
                <div className="flex justify-center items-center gap-3">
                  <div className="w-10 h-10 border p-2 bg-tertiary-100  overflow-hidden rounded-full">
                    <img
                      src="/public/company-logo.png"
                      alt="company-logo"
                      className="w-full h-full  object-contain object-center"
                    />
                  </div>
                  <h2 className="font-semibold text-[5vw] md:text-[3vw] lg:text-[1.3vw]">
                    {job.companyName}
                  </h2>
                </div>

                {/* Job Title */}
                <h3 className="font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] text-orange-500">
                  {job.jobTitle}
                </h3>

                {/* Description */}
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-700 font-semibold">
                  {job.description}
                </p>
              </div>

              {/* Job Details */}
              <div className="flex mt-2 flex-col flex-wrap text-zinc-700 justify-start items-start gap-3 gap-x-5">
                <div className="flex justify-center items-center gap-2">
                  <span>{job.icons.location}</span>
                  <span className="text-sm font-medium">{job.location}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>{job.icons.date}</span>
                  <span className="text-sm font-medium">{job.date}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>{job.icons.type}</span>
                  <span className="text-sm font-medium">{job.type}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>{job.icons.salary}</span>
                  <span className="text-sm font-medium">{job.salary}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>{job.icons.overtime}</span>
                  <span className="text-sm font-medium">{job.overtime}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>{job.icons.workdays}</span>
                  <span className="text-sm font-medium">{job.workdays}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>{job.icons.benefits}</span>
                  <span className="text-sm font-medium">{job.benefits}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-11/12 mt-10 flex justify-start lg:justify-center mx-auto items-center">
        {!showAll && (
          <button
            onClick={handleViewAllClick}
            className="border border-black dark:border-white px-8 py-3 rounded-lg text-[3.5vw] md:text-[2.5vw] lg:text-[1vw] leading-none flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300"
          >
            View All Jobs
          </button>
        )}
      </div>
    </motion.div>
  );
}
