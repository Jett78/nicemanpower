import {  useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Job = {
  companyName: string;
  jobTitle: string;
  description: string;
  location: string;
  date: string;
  type: string;
  salary: string;
  overtime: string;
  workdays: string;
  benefits: string;
  icons: {
    location: string;
    date: string;
    type: string;
    salary: string;
    overtime: string;
    workdays: string;
    benefits: string;
  };
};

type Props = {
  job: Job;
  index: number;
};

export default function JobCard({ job, index }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const [gradientAngle, setGradientAngle] = useState<number>(0);

  console.log(hoveredIndex);
  // useEffect(() => {
  //   // Set the gradient angle based on the window height
  //   // const handleResize = () => setGradientAngle(window.innerHeight / 2);

  //   handleResize(); // Set initial angle
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Define a function to generate the gradient based on the hovered state
  // const getGradient = (index: number | null) => {
  //   return index !== null
  //     ? `linear-gradient(${gradientAngle}deg, rgba(162, 214, 245, 0.16), rgba(162, 214, 245, 0.18))`
  //     : `linear-gradient(0deg, rgba(162, 214, 245, 0.15), rgba(162, 214, 245, 0.15))`;
  // };

  return (
    <Link to={`/jobs/${job.companyName}`} key={index}>
      <motion.div
        className="w-full cursor-pointer border-2 duration-300 transition-all border-zinc-700 bg-zinc-100 rounded-xl flex flex-col justify-start p-5 items-start gap-3 relative overflow-hidden"
        // style={{
        //   background: getGradient(hoveredIndex === index ? index : null),
        //   transition: "background 0.5s ease-in-out", // Ensure smooth transition
        // }}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full flex justify-start items-start flex-col gap-2">
          {/* Company Name & Logo */}
          <div className="flex justify-center items-center gap-3">
            <div className="w-10 h-10 bg-white overflow-hidden rounded-full">
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
          <h3 className="font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] text-[#3aaaaa]">
            {job.jobTitle}
          </h3>

          {/* Description */}
          <p className="text-[3.5vw] md:text-[2vw] lg:text-[0.8vw] text-zinc-300">
            {job.description}
          </p>
        </div>

        {/* Job Details */}
        <div className="flex mt-2 flex-col justify-center items-start gap-3">
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
      </motion.div>
    </Link>
  );
}
