import { Link } from "react-router-dom";
import jobData from "../../../jobs-data/JobsData";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {};

export default function FeatureJobs({}: Props) {
  return (
    <div className="py-[4rem] pt-[6rem]">
      <div className="w-full flex gap-5 justify-between items-end">
        <div className="flex w-full h-full flex-col gap-2">
          <h1 className="text-[8vw] lg:text-[4vw] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
            Featured Jobs
          </h1>
          <p className="text-[3.5vw] lg:text-[1.2vw] lg:w-[50%] leading-relaxed text-zinc-700">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        {/* <div className="h-full flex justify-end items-end">
          <span className="text-nowrap font-semibold">See more jobs </span>
        </div> */}
        <Link to="/jobs" className="mt-5">
          <button className="px-[2vw] flex gap-1 justify-center items-center  text-nowrap group hover:text-orange-400   py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold  rounded-full text-blue-500 duration-300">
            See more jobs{" "}
            <Icon
              icon="lets-icons:arrow-right-long-light"
              className="w-5 group-hover:translate-x-2 duration-300"
            />
          </button>
        </Link>
      </div>

      {/* jobs  */}
      <div className="grid lg:grid-cols-3 gap-5 mt-5 lg:mt-10">
        {jobData.slice(0, 3).map((job, index) => (
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
    </div>
  );
}

// const JobsData = [1, 2, 3, 4, 5, 6];
