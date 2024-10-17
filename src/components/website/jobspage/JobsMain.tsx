import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import axios from "axios";

interface Job {
  _id: string;
  title: string;
  type: string;
  overtime: string;
  days: number;
  hours: number;
  interviewDate: string;
  location: string;
  salary: string;
  services: string;
  skillsExperience: string;
  company: string;
}

export default function JobsMain() {
  const [jobs, setJobs] = useState<Job[]>([]); // Typing the jobs array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:5000/jobs");
        setJobs(response.data);
      } catch (err) {
        // Type guard to check if the error is an instance of Error
        if (err instanceof Error) {
          setError(err.message); // Assign the error message to the state
        } else {
          setError("An unknown error occurred"); // Fallback for non-Error types
        }
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Display loading message
  // }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

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
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner" />
          <p>Loading jobs...</p>
        </div>
      ) : (
        <div className="grid w-11/12 lg:w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 gap-5">
          {jobs.map((job, index) => (
            <Link to={`/jobs/${index}`} key={index}>
              <div className="w-full cursor-pointer h-full bg-zinc-100  duration-300 transition-all rounded-2xl flex flex-col justify-start md:p-10 p-4 items-start gap-3 relative overflow-hidden">
                <div className="w-full flex justify-start items-start flex-col gap-2">
                  {/* Company Name & Logo */}
                  <div className="grid grid-cols-8 gap-2 place-items-center md:h-20 ">
                    <div className="col-span-2 bg-white rounded-full border-2 w-16 h-16">
                      {/* <img
                      src={job.img} 
                      alt="company-logo"
                      className="h-full w-full object-contain object-center rounded-full"
                    /> */}
                    </div>
                    <h2 className="col-span-6 leading-6 font-semibold text-sm md:text-[2.5vw] lg:text-[1.3vw]">
                      {job.company}
                    </h2>
                  </div>

                  {/* Job Title */}
                  <h3 className="font-semibold text-[3vw] md:text-[2.5vw] lg:text-[1.2vw] text-orange-500">
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:h-16 md:text-[1.5vw] lg:text-[0.9vw] text-zinc-700 font-semibold">
                    {job.skillsExperience.slice(0, 62) + "..."}
                  </p>
                </div>

                {/* Job Details */}
                <div className="flex mt-2 flex-col flex-wrap text-zinc-700 justify-start items-start gap-3 gap-x-5">
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center"
                      icon="weui:location-outlined"
                      style={{ color: "black" }}
                    />
                    <span className="text-sm font-medium">{job.location}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center"
                      icon="uiw:date"
                      style={{ color: "black" }}
                    />
                    <span className="text-sm font-medium">
                      {job.interviewDate}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center"
                      icon="iconamoon:clock-light"
                      style={{ color: "black" }}
                    />
                    <span className="text-sm font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center"
                      icon="mage:dollar"
                      style={{ color: "black" }}
                    />
                    <span className="text-sm font-medium">{job.salary}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center"
                      icon="lsicon:overtime-filled"
                      style={{ color: "black" }}
                    />
                    <span className="text-sm font-medium">
                      Overtime {job.overtime}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center"
                      icon="mdi:work-outline"
                      style={{ color: "black" }}
                    />
                    <span className="text-sm font-medium">
                      {job.days}days/week ({job.hours}hrs)
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon
                      className="w-4 h-4 object-cover object-center"
                      icon="material-symbols-light:room-service-sharp"
                      style={{ color: "black" }}
                    />
                    <span className="text-sm font-medium">{job.services}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
}
