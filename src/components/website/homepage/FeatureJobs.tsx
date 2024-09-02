import { Link } from "react-router-dom";
import jobData from "../../../jobs-data/JobsData";

type Props = {};

export default function FeatureJobs({}: Props) {
  return (
    <div className="py-[4rem] pt-[6rem]">
      <div className="w-full flex gap-5 justify-between items-end">
        <div className="flex w-full h-full flex-col gap-2">
          <h1 className="text-[2vw] font-semibold hero w-full ">
            Featured Jobs
          </h1>
          <p className="text-[1.2vw] w-[50%] leading-relaxed text-tertiary-700">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className="h-full flex justify-end items-end">
          <span className="text-nowrap font-semibold">See more jobs </span>
        </div>
      </div>

      {/* jobs  */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        {jobData.slice(0,3).map((job, index) => (
          <Link to={`/jobs/${job.companyName}`} key={index}>
            <div className="w-full cursor-pointer h-full  duration-300 transition-all shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-3xl flex flex-col justify-start p-10 items-start gap-3 relative overflow-hidden">
              <div className="w-full flex justify-start items-start flex-col gap-2">
                {/* Company Name & Logo */}
                <div className="flex justify-center items-center gap-3">
                  <div className="w-10 h-10 border p-2  overflow-hidden rounded-full">
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
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-700 font-semibold">
                  {job.description}
                </p>
              </div>

              {/* Job Details */}
              <div className="flex mt-2 flex-row flex-wrap text-tertiary-700 justify-start items-start gap-3 gap-x-5">
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
    </div>
  );
}

// const JobsData = [1, 2, 3, 4, 5, 6];
