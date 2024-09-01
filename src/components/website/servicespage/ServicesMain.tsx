import { motion } from "framer-motion";
type Props = {};

export default function ServicesMain({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-[2rem] w-11/12 lg:w-9/12 pt-[6rem]  lg:pt-[7rem] mx-auto"
    >
      <h3 className="text-[6vw] md:text-[4vw] lg:text-[1.2vw] lg:w-9/12  mx-auto text-left lg:text-center">
        At Nice Recruiting Agency, we specialize in connecting top talent with
        leading companies across various industries.
      </h3>
      <h1 className="hero text-[8vw] lg:text-[3vw] mt-5 text-left lg:text-center font-semibold">
        <span className="text-secondary-400">Industries</span> we supply
      </h1>

      {/* cards */}
      <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {workData.map((item) => (
          <div
            key={item.id}
            className="w-full group relative cursor-pointer  flex flex-col justify-start items-start gap-2 overflow-hidden     rounded-lg "
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-[75vw] md:h-[40vw] lg:h-[20vw] scale-105 group-hover:scale-105 duration-300 group-hover:rotate-2 object-cover object-center rounded-md"
            />
            <h3 className=" p-2 px-4  rounded-md backdrop-blur-sm border border-tertiary-600 flex gap-2  justify-center items-center font-semibold z-10 text-left  absolute top-2 left-2 text-[4vw] md:text-[2.5vw] lg:text-[1.2vw]">
              <span className="text-[5vw] md:text-[3vw] lg:text-[2vw] leading-none text-secondary-500">•</span> {item.title}
            </h3>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex py-[4rem] flex-col gap-2"
      >
        <h1 className="hero text-[8vw] lg:text-[3vw] text-left leading-none  lg:text-center font-semibold">
          Our <span className="text-secondary-400">Process</span> Of Recruitment
        </h1>

        <p className="text-left mt-4 lg:text-center lg:text-[1vw] lg:w-9/12 mx-auto">
          We believe in a streamlined and effective recruitment process that
          ensures the best fit for both clients and candidates. Our process is
          built on a foundation of transparency, efficiency, and attention to
          detail.
        </p>

        <div className="grid  lg:w-9/12  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          <div className="group flex flex-col justify-center lg:text-center items-center gap-2 p-3 lg:p-5 lg:py-10 rounded-lg cursor-pointer hover:border-tertiary-700 duration-300 w-full bg-[#061a26] border border-tertiary-700/50">
            <h3 className="w-full group-hover:border-tertiary-300 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] border-b-2 border-tertiary-700 pb-3">
              Understanding Your Needs
            </h3>
            <p className="text-[3.8vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-300">
              We start by deeply understanding the unique requirements of your
              business and the specific qualifications you seek in candidates.
            </p>
          </div>
          <div className="group flex flex-col justify-center lg:text-center items-center gap-2 p-5 rounded-lg cursor-pointer hover:border-tertiary-700 duration-300 w-full bg-[#061a26] border border-tertiary-700/50">
            <h3 className="w-full group-hover:border-tertiary-300 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] border-b-2 border-tertiary-700 pb-3">
              Sourcing Talent
            </h3>
            <p className="text-[3.8vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-300">
              Leveraging our extensive network and advanced search techniques,
              we identify top candidates who align with your criteria.
            </p>
          </div>
          <div className="group flex flex-col justify-center lg:text-center items-center gap-2 p-5 rounded-lg cursor-pointer hover:border-tertiary-700 duration-300 w-full bg-[#061a26] border border-tertiary-700/50">
            <h3 className="w-full group-hover:border-tertiary-300 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] border-b-2 border-tertiary-700 pb-3">
              Screening & Assessment
            </h3>
            <p className="text-[3.8vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-300">
              We conduct thorough interviews and assessments to ensure each
              candidate meets the high standards required for the role.
            </p>
          </div>
          <div className="group flex flex-col justify-center lg:text-center items-center gap-2 p-5 rounded-lg cursor-pointer hover:border-tertiary-700 duration-300 w-full bg-[#061a26] border border-tertiary-700/50">
            <h3 className="w-full group-hover:border-tertiary-300 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] border-b-2 border-tertiary-700 pb-3">
              Matching & Placement
            </h3>
            <p className="text-[3.8vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-300">
              We carefully match candidates with roles that suit their skills
              and career goals, ensuring a perfect fit for your organization.
            </p>
          </div>

          <div className="group flex flex-col justify-center lg:text-center items-center gap-2 p-5 rounded-lg cursor-pointer hover:border-tertiary-700 duration-300 w-full bg-[#061a26] border border-tertiary-700/50">
            <h3 className="w-full group-hover:border-tertiary-300 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] border-b-2 border-tertiary-700 pb-3">
              Ongoing Support
            </h3>
            <p className="text-[3.8vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-300">
              Our commitment doesn’t end with placement. We provide continuous
              support to ensure both clients and candidates are satisfied with
              the outcome.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const workData = [
  {
    id: 1,
    imgSrc: "/public/service-img/service-1.png",
    title: "Construction",
    description:
      "Our seasoned recruiters bring deep industry knowledge to find the best talent.",
  },
  {
    id: 2,
    imgSrc: "/public/service-img/service-2.png",
    title: "Oil & Gas Industries",
    description:
      "We align job opportunities with your unique skills and career goals.",
  },
  {
    id: 3,
    imgSrc: "/public/service-img/service-3.png",
    title: "Hospitality Management",
    description:
      "Our extensive network connects you with top employers worldwide.",
  },
  {
    id: 4,
    imgSrc: "/public/service-img/service-4.png",
    title: "Faculties Management",
    description:
      "Our proven process ensures successful placements for both clients and candidates.",
  },
  {
    id: 4,
    imgSrc: "/public/service-img/service-5.png",
    title: "Transportations",
    description:
      "Our proven process ensures successful placements for both clients and candidates.",
  },
  {
    id: 4,
    imgSrc: "/public/service-img/service-6.png",
    title: "Manufacturing",
    description:
      "Our proven process ensures successful placements for both clients and candidates.",
  },
  {
    id: 4,
    imgSrc: "/public/service-img/service-7.png",
    title: "Agricultural & Farmwork",
    description:
      "Our proven process ensures successful placements for both clients and candidates.",
  },
  {
    id: 4,
    imgSrc: "/public/service-img/service-8.png",
    title: "Retail",
    description:
      "Our proven process ensures successful placements for both clients and candidates.",
  },
  {
    id: 4,
    imgSrc: "/public/service-img/service-9.png",
    title: "Electro-mechanical Industries",
    description:
      "Our proven process ensures successful placements for both clients and candidates.",
  },
];
