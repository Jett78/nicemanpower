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
        {JobsData.map(() => (
          <div className="w-full h-[15vw] border shadow-sm border-tertiary-100 p-5  rounded-xl">
            <div className="flex flex-col">
              <div className="w-full justify-between items-center">
                <div className="w-[3.5vw] h-[3.5vw] p-3 rounded-full flex justify-center items-center border">
                  <img
                    src="/public/company-logo.png"
                    alt=""
                    className="rounded-full w-[1.5vw]  object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const JobsData = [1, 2, 3, 4, 5, 6];
