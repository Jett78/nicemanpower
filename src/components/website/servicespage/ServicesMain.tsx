import { motion } from "framer-motion";
type Props = {};

export default function ServicesMain({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-[2rem] w-11/12 lg:w-9/12 pt-[6rem]  lg:pt-[8rem] mx-auto"
    >
      <div className="mb-[5rem]">
        <h1 className="text-[4vw] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
          What services do <br /> we provide?
        </h1>
        <h3 className="text-[1.2vw] text-zinc-700 lg:w-8/12  mx-auto text-left lg:text-center">
          At Nice Recruiting Agency, we are dedicated to providing comprehensive
          manpower solutions that empower businesses to succeed. Our services
          range from permanent and contract staffing to executive search, skill
          development, and outsourcing.
        </h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex mt-8 flex-col gap-2"
        >
          <div className="grid w-full  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col justify-center lg:text-center items-center gap-2 p-10 rounded-xl cursor-pointer hover:border-tertiary-600 duration-300 w-full bg-zinc-100 border-2 border-tertiary-600"
              >
                <h3 className="w-full  duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw]  pb-3">
                  {service.title}
                </h3>
                <p className="text-[3.8vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <h1 className="text-[4vw] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Industries We Supply
      </h1>
      <h3 className="text-[1.2vw] text-zinc-700 lg:w-8/12  mx-auto text-left lg:text-center">
        At Nice Recruiting Agency, we are dedicated to providing comprehensive
        manpower solutions that empower businesses to succeed. Our services
        range from permanent and contract staffing to executive search, skill
        development, and outsourcing.
      </h3>

      {/* cards */}
      <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 gap-y-8">
        {workData.map((item) => (
          <div
            key={item.id}
            className="w-full group relative cursor-pointer  flex flex-col justify-start items-start gap-2"
          >
            <div className="w-full h-[75vw] md:h-[40vw] lg:h-[18vw] group-hover:-translate-y-1 rounded-2xl duration-300 overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full scale-105  group-hover:scale-105 group-hover:grayscale duration-300  object-cover object-center "
              />
            </div>
            <h3 className=" text-zinc-700 group-hover:text-orange-400 duration-300  flex gap-2  justify-center items-center font-semibold z-10 text-left   top-2 left-2 text-[4vw] md:text-[2.5vw] lg:text-[1.2vw]">
              {item.title}
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
        <h1 className="text-[4vw] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
          Our Process Of Recruitment
        </h1>

        <p className="lg:text-[1.2vw] text-zinc-700 text-center w-8/12 mx-auto">
          We believe in a streamlined and effective recruitment process that
          ensures the best fit for both clients and candidates. Our process is
          built on a foundation of transparency, efficiency, and attention to
          detail.
        </p>

        <div className="grid w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {processData.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center lg:text-center items-center gap-2 p-10 rounded-xl cursor-pointer hover:border-tertiary-600 duration-300 w-full bg-zinc-100 border-2 border-zinc-600"
            >
              <h3 className="w-full group-hover:border-zinc-600 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] border-b-2 border-zinc-400 pb-3">
                {service.title}
              </h3>
              <p className="text-[3.8vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-700">
                {service.description}
              </p>
            </div>
          ))}
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

const servicesData = [
  {
    id: 1,
    icon: "carbon:search",
    imgSrc: "/service-img/service-1.png",
    title: "Permanent Staffing",
    description:
      "We match businesses with skilled professionals for long-term roles, aligning company culture with employee skills.",
  },
  {
    id: 2,
    icon: "mdi:tick-circle-outline",
    imgSrc: "/service-img/service-2.png",
    title: "Contract Staffing",
    description:
      "Offering flexible staffing solutions for project-based or temporary needs, helping businesses scale their workforce as required.",
  },
  {
    id: 3,
    icon: "ph:globe",
    imgSrc: "/service-img/service-3.png",
    title: "Executive Search",
    description:
      "Specialized recruitment for leadership positions, finding executives who align with company vision and goals.",
  },
  {
    id: 4,
    icon: "system-uicons:graph-increase",
    imgSrc: "/service-img/service-4.png",
    title: "Skill Development & Training",
    description:
      "Providing training programs to enhance the skills of employees, ensuring they are equipped to meet industry demands.",
  },
  {
    id: 5,
    icon: "system-uicons:graph-increase",
    imgSrc: "/service-img/service-4.png",
    title: "Outsourcing Solutions",
    description:
      "Managing various business processes to help companies focus on their core activities while we handle the rest.",
  },
  {
    id: 6,
    icon: "system-uicons:graph-increase",
    imgSrc: "/service-img/service-4.png",
    title: "Training and Development",
    description:
      "Providing training and workshops to improve employee skills and support career advancement.",
  },
];

const processData = [
  {
    title: "Understanding Your Needs",
    description:
      "We start by deeply understanding the unique requirements of your business and the specific qualifications you seek in candidates.",
  },
  {
    title: "Sourcing Talent",
    description:
      "Leveraging our extensive network and advanced search techniques, we identify top candidates who align with your criteria.",
  },
  {
    title: "Screening & Assessment",
    description:
      "We conduct thorough interviews and assessments to ensure each candidate meets the high standards required for the role.",
  },
  {
    title: "Matching & Placement",
    description:
      "We carefully match candidates with roles that suit their skills and career goals, ensuring a perfect fit for your organization.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our commitment doesn’t end with placement. We provide continuous support to ensure both clients and candidates are satisfied with the outcome.",
  },
];
