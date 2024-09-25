import { motion } from "framer-motion";
import jobData from "../../../jobs-data/JobsData";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function JobsMain() {
  // const [showAll, setShowAll] = useState(false);

  // const handleViewAllClick = () => {
  //   setShowAll(true);
  // };

  // Determine which jobs to display based on the state
  // const displayedJobs = showAll ? jobData : jobData.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-[2rem]  pt-[4rem]  lg:pt-[8rem] w-full"
    >
      <h1 className="text-[8vw] w-11/12 mx-auto lg:text-[4vw] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Vacancies Announcement
      </h1>
      <p className="my-[2vw] text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] w-11/12 text-center mx-auto lg:w-8/12 leading-relaxed text-zinc-700">
        Discover exciting career opportunities with our latest job openings.
        Find roles that match your skills and ambitions and apply today to join
        our dynamic team!
      </p>

      {/* cards */}
      <div className="grid w-11/12 lg:w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 gap-5">
        {jobData.slice(0,6).map((job, index) => (
          <Link to={`/jobs/${index}`} key={index}>
            <div className="w-full cursor-pointer h-full bg-zinc-100  duration-300 transition-all rounded-2xl flex flex-col justify-start md:p-10 p-4 items-start gap-3 relative overflow-hidden">
              <div className="w-full flex justify-start items-start flex-col gap-2">
                {/* Company Name & Logo */}
                <div className="grid grid-cols-8 gap-2 place-items-center md:h-20 ">
                  <div className="col-span-2 bg-white rounded-full border-2 w-16 h-16">
                    <img
                      src={job.img} 
                      alt="company-logo"
                      className="h-full w-full object-contain object-center rounded-full"
                    />
                  </div>
                  <h2 className="col-span-6 leading-6 font-semibold text-sm md:text-[2.5vw] lg:text-[1.3vw]">
                    {job.companyName}
                  </h2>
                </div>

                {/* Job Title */}
                <h3 className="font-semibold text-[3vw] md:text-[2.5vw] lg:text-[1.2vw] text-orange-500">
                  {job.jobTitle}
                </h3>

                {/* Description */}
                <p className="text-sm md:h-16 md:text-[1.5vw] lg:text-[0.9vw] text-zinc-700 font-semibold">
                  {job.description}
                </p>
              </div>

              {/* Job Details */}
              <div className="flex mt-2 flex-col flex-wrap text-zinc-700 justify-start items-start gap-3 gap-x-5">
                <div className="flex justify-center items-center gap-2">
                  <Icon
                    className="w-4 h-4 object-cover object-center"
                    icon={job.icons.location}
                  ></Icon>
                  <span className="text-sm font-medium">{job.location}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Icon
                    className="w-4 h-4 object-cover object-center"
                    icon={job.icons.date}
                  ></Icon>
                  <span className="text-sm font-medium">{job.date}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Icon
                    className="w-4 h-4 object-cover object-center"
                    icon={job.icons.type}
                  ></Icon>
                  <span className="text-sm font-medium">{job.type}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Icon
                    className="w-4 h-4 object-cover object-center"
                    icon={job.icons.salary}
                  ></Icon>
                  <span className="text-sm font-medium">{job.salary}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Icon
                    className="w-4 h-4 object-cover object-center"
                    icon={job.icons.overtime}
                  ></Icon>
                  <span className="text-sm font-medium">{job.overtime}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Icon
                    className="w-4 h-4 object-cover object-center"
                    icon={job.icons.workdays}
                  ></Icon>
                  <span className="text-sm font-medium">{job.workdays}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Icon
                    className="w-4 h-4 object-cover object-center"
                    icon={job.icons.benefits}
                  ></Icon>
                  <span className="text-sm font-medium">{job.benefits}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="w-11/12 mt-5 lg:mt-10 flex justify-start lg:justify-center mx-auto items-center">
        {!showAll && (
          // <button
          //   onClick={handleViewAllClick}
          //   className="border border-black dark:border-white px-8 py-3 rounded-lg text-[3.5vw] md:text-[2.5vw] lg:text-[1vw] leading-none flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300"
          // >
          //   View All Jobs
          // </button>

          <button
            onClick={handleViewAllClick}
           
            
            className="px-[2vw] flex gap-1 justify-center items-center  text-nowrap group hover:text-orange-400   py-[0.8vw] text-[4vw] lg:text-[1vw] font-semibold  rounded-full text-blue-500 duration-300"
          >
            View more Jobs
            <Icon
              icon="lets-icons:arrow-right-long-light"
              className="w-5 group-hover:translate-x-2 duration-300"
            />
          </button>
        )}
      </div> */}
    </motion.div>
  );
}
