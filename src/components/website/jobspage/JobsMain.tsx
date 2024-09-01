import { useState } from "react";
import { motion } from "framer-motion";
import JobCard from "../../ui/JobCard";
import jobData from "../../../jobs-data/JobsData";

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
      <h1 className="hero text-[8vw] lg:text-[3vw] lg:text-center font-semibold w-11/12 mx-auto">
        Current <span className="text-teal-400">Jobs Opening</span>
      </h1>

      {/* cards */}
      <div className="grid w-11/12 lg:w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {displayedJobs.map((job, index) => (
          <JobCard key={index} job={job} index={index} />
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
