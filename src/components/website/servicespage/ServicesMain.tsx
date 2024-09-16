import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HoverEffect } from "../../ui/card-hover-effect";
import Ctaform from "../homepage/Ctaform";

const sections = [
  {
    title: "Skilled Labor for Building and Infrastructure Projects",
    category: "Construction",
    icon: "./public/icons/img1.png",
    images: [
      "/public/oil/img1.png",
      "/public/oil/img3.png",
      "/public/oil/img4.png",
      "/public/oil/img2.png",
    ],
    description: "Need expert manpower to boost your business operations?",
  },
  {
    title: "Specialists for exploration, drilling, and maintenance.",
    category: "Oil & Gas Industries",
    icon: "./public/icons/img2.png",

    images: [
      "/public/construction/img1.png",
      "/public/construction/img3.png",
      "/public/construction/img4.png",
      "/public/construction/img2.png",
    ],
    description:
      "Looking for skilled professionals to power your oil and gas projects?",
  },
  {
    title: "Staff for hotels, restaurants, and guest services.",
    category: "Hospitality Management",
    icon: "./public/icons/img3.png",

    images: [
      "/public/hospitality/img1.png",
      "/public/hospitality/img3.png",
      "/public/hospitality/img4.png",
      "/public/hospitality/img2.png",
    ],
    description:
      "Looking for skilled professionals to power your oil and gas projects?",
  },
  {
    title:
      "Looking for dedicated staff to manage and maintain your facilities?",
    category: "Facilities Management",
    icon: "./public/icons/img4.png",

    images: [
      "/public/facilities/img1.png",
      "/public/facilities/img3.png",
      "/public/facilities/img4.png",
      "/public/facilities/img2.png",
    ],
    description: "Require talented staff to elevate your hospitality services?",
  },
  {
    title: "Drivers, operators, and logistics workforce.",
    category: "Transportations",
    icon: "./public/icons/img5.png",
    images: [
      "/public/transport/img1.png",
      "/public/transport/img3.png",
      "/public/transport/img4.png",
      "/public/transport/img2.png",
    ],
    description:
      "Need reliable drivers and logistics experts for your transportation needs?",
  },
  {
    title: "Workers for assembly, production, and quality control.",
    category: "Manufacturing",
    icon: "./public/icons/img6.png",

    images: [
      "/public/manufacture/img1.png",
      "/public/manufacture/img3.png",
      "/public/manufacture/img4.png",
      "/public/manufacture/img2.png",
    ],
    description:
      "Looking for skilled workers to streamline your manufacturing process?",
  },
  {
    title: "Field laborers, harvesters, and equipment operators.",
    category: "Agricultural & Farmwork",
    icon: "./public/icons/img7.png",

    images: [
      "/public/agriculture/img1.png",
      "/public/agriculture/img3.png",
      "/public/agriculture/img4.png",
      "/public/agriculture/img2.png",
    ],
    description:
      "Need hardworking labor for your agricultural and farm operations?",
  },
  {
    title: "Sales staff, cashiers, and stock management.",
    category: "Retail",
    icon: "./public/icons/img8.png",
    images: [
      "/public/retail/img1.png",
      "/public/retail/img3.png",
      "/public/retail/img4.png",
      "/public/retail/img2.png",
    ],
    description:
      "Looking for experienced staff to enhance your retail operations?",
  },
  {
    title: "Technicians for electrical and mechanical systems.",
    category: "Electro-mechanical Industries",
    icon: "./public/icons/img9.png",

    images: [
      "/public/industries/img1.png",
      "/public/industries/img3.png",
      "/public/industries/img4.png",
      "/public/industries/img2.png",
    ],
    description:
      "Need skilled technicians for your electro-mechanical projects? ",
  },
];

export default function ServicesMain() {
  const [active, Setactive] = useState(false);
  // Overlay click handler
  const closeDropdown = () => {
    Setactive(false);
  };
  const mainContainer = useRef(null);
  // GSAP Animation
  useGSAP(() => {
    // Check if the screen size is large (lg and above)
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          // markers: true,
          start: "top top",
          end: "bottom -500%",
          pin: true,
          scrub: true,
        },
      });

      sections.forEach((section: any, i: number) => {
        console.log(section);
        const index = i + 1;
        const prevIndex = i; // Previous index

        tl.from(
          `.title-card-${index}`,
          {
            y: "20vw",
            duration: 2,
            opacity: 0,
            ease: "power2.inOut", // Modern slick easing
          },
          `tl${index}`
        )
          .to(
            `.images-${index}`,
            {
              duration: 2,
              opacity: 1,
              ease: "power2.inOut", // Smooth easing
            },
            `tl${index}`
          )
          .to(
            `.desc-${index}`,
            {
              duration: 2,
              opacity: 1,
              ease: "power2.inOut", // Smooth easing
            },
            `tl${index}`
          )
          .to(
            `.title-${index}`,
            {
              height: 0,
              opacity: 0,
              ease: "power2.inOut", // Smooth transition
            },
            `tl${index + 1}`
          );

        // Make previous desc opacity 0 when transitioning to the next section
        if (prevIndex > 0) {
          tl.to(
            `.desc-${prevIndex}`,
            {
              duration: 2,
              opacity: 0,
              ease: "power2.inOut", // Smooth easing for transition
            },
            `tl${index}`
          );
        }
      });
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-[2rem] w-11/12 lg:w-9/12 pt-[4rem]  lg:pt-[8rem] mx-auto"
    >
      <div className="md:mb-[5rem]">
        <h1 className="text-[8vw] lg:text-[4vw] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
          What services do <br /> we provide?
        </h1>
        <h3 className="mt-[2vw]  text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] text-center md:w-[80%] lg:text-[1.2vw] text-zinc-700   mx-auto  lg:text-center">
          At Nice Recruiting Agency, we are dedicated to providing comprehensive
          manpower solutions that empower businesses to succeed. Our services
          range from permanent and contract staffing to executive search, skill
          development, and outsourcing.
        </h3>
      </div>

      {/* cards */}
      <div className="w-full  mx-auto md:px-8">
        <HoverEffect items={projects} />
      </div>

      <h1 className="mt-[4vw] text-[8vw] lg:text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Industries We Supply
      </h1>
      <h3 className="mt-[2vw]  text-zinc-700 lg:w-[80%]  text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] mx-auto lg:text-center text-left ">
        At Nice Recruiting Agency, we are dedicated to providing comprehensive
        manpower solutions that empower businesses to succeed. Our services
        range from permanent and contract staffing to executive search, skill
        development, and outsourcing.
      </h3>

      {/* cards */}

      <div
        ref={mainContainer}
        className="w-full flex justify-center items-center"
      >
        <div className="flex mt-5 lg:mt-[8vh] w-full justify-center items-center gap-10">
          {/* Left Titles */}
          <div className="h-screen flex flex-col gap-2 w-full lg:w-[20vw]">
            {sections.map((section: any, index: number) => (
              <div
                key={index}
                className={`w-full  rounded-xl flex  justify-between items-center p-3 title-card-${
                  index + 1
                } ${index % 2 === 0 ? "bg-[#86efac]" : "bg-[#5da5d3]"}`}
              >
                <div className="flex w-[80%] lg:w-auto flex-col justify-center flex-grow">
                  <p
                    className={`${
                      index % 2 === 0 ? "text-black " : "text-white"
                    } hero font-regular h-auto overflow-hidden text-[3.5vw] sm:text-[2vw] lg:text-[1vw] mb-2 lg:mb-[4px]  title-${
                      index + 1
                    } `}
                  >
                    {section.title}
                  </p>
                  <div>
                    <button
                      className={`px-[5vw] lg:px-[1vw]  py-[2vw] lg:py-[0.5vw] whitespace-nowrap text-[3.5vw] sm:text-[2vw] lg:text-[0.9vw] font-semibold ${
                        index % 2 === 0 ? "bg-[#cffade] " : "bg-[#d5e8f4]"
                      } rounded-lg  text-zinc-700 border-zinc-600`}
                    >
                      {section.category}
                    </button>
                  </div>
                </div>
                <div className="h-full flex justify-center items-center flex-grow">
                  <img
                    src={section.icon}
                    className="min-w-5 min-h-5 text-zinc-800"
                  ></img>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Images */}
          <div>
            <div
              className={`h-[85vh] hidden   w-[28vw]  lg:flex flex-col   relative `}
            >
              {sections.map((section: any, index: number) => (
                <div
                  key={index}
                  className={` ${
                    index % 2 === 0 ? "border-[#008932] " : "border-[#5da5d3]"
                  } absolute object-center -top-10 left-0 w-full h-full p-2 grid gap-3  rounded-2xl grid-cols-2 border-2 auto-rows-fr  images-${
                    index + 1
                  } ${index > 0 ? "opacity-0" : ""}`}
                >
                  {section.images.map((src: any, imgIndex: number) => (
                    <div
                      key={imgIndex}
                      className={`relative overflow-hidden rounded-lg object-center ${
                        imgIndex % 4 === 0
                          ? "col-span-2 row-span-2"
                          : imgIndex % 3 === 0
                          ? "col-span-2 row-span-1"
                          : "col-span-1 row-span-1"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-center object-cover  rounded-lg transition-transform duration-300 hover:scale-105"
                      />
                      {/* Add subtle shadow for elevation */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Descriptions */}
          <div className="h-[90vh] hidden  w-[20vw] lg:flex justify-center items-start relative">
            {sections.map((section: any, index: number) => (
              <div
                key={index}
                className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 desc-${
                  index + 1
                } ${index > 0 ? "opacity-0" : "opacity-1"}`} // For descriptions
              >
                <p className="text-[1.5vw] text-zinc-600">
                  {section.description}
                </p>
                <Link to="">
                  <button
                    onClick={() => Setactive(!active)}
                    className={`${
                      index % 2 === 0
                        ? "bg-green-500 hover:bg-green-500 "
                        : "bg-[#2b7aab]"
                    } px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold  duration-300 rounded-full text-zinc-50 border-zinc-600`}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex py-[4rem] flex-col gap-2"
      >
        <h1 className="mt-16 text-[8vw] lg:text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
          Our Process Of Recruitment
        </h1>
        <p className="my-[2vw]  text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] text-zinc-700 lg:text-center lg:w-[80%] mx-auto ">
          Our Recruitment Process: Learn about our systematic approach to
          sourcing, evaluating, and placing top talent to meet your hiring needs
          effectively.
        </p>

        <div className="grid w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {processData.map((service, index) => (
            <div className="bg-gradient-to-tr from-[#2088ca] to-[#f37023] p-[2px] rounded-2xl">
              <div
                key={index}
                className="group h-full flex flex-col justify-center lg:text-center items-center gap-2 p-10 rounded-2xl cursor-pointer  duration-300 w-full bg-white"
              >
                <h3 className="w-full group-hover:border-zinc-600 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] pb-3">
                  {service.title}
                </h3>
                <div className="md:block hidden bg-gradient-to-tr from-[#2088ca] to-[#f37023] h-[0.1vw] group-hover:w-[15vw] ease-in-out duration-500 w-[7vw]"></div>
                <p className="text-[3.5vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-700 lg:h-[7vw]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      {/* --Dark overlay-- */}
      {active && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-[150]"
            onClick={closeDropdown}
          ></div>
          <div className="fixed z-[200] inset-0 flex justify-center items-center">
            <Ctaform closeDropdown={closeDropdown} />
          </div>
        </>
      )}
    </motion.div>
  );
}
const projects = [
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
// const workData = [
//   {
//     title: "Skilled Labor for Building and Infrastructure Projects",
//     category: "Construction",
//     icon: "construction-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Need expert manpower to boost your business operations?",
//   },
//   {
//     title: "Electrical Services for Residential and Commercial",
//     category: "Electrical",
//     icon: "electrical-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Reliable electrical services to power up your projects.",
//   },
//   {
//     title: "Plumbing Solutions for Modern Buildings",
//     category: "Plumbing",
//     icon: "plumbing-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Ensure efficient water management with expert plumbers.",
//   },
//   {
//     title: "Interior Design and Finishing",
//     category: "Interior Design",
//     icon: "interior-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Creative interior solutions to make your space stand out.",
//   },
//   {
//     title: "Landscape Design and Maintenance",
//     category: "Landscaping",
//     icon: "landscaping-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Transform outdoor spaces into stunning landscapes.",
//   },
//   {
//     title: "HVAC Systems Installation and Maintenance",
//     category: "HVAC",
//     icon: "hvac-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Keep your environment comfortable with expert HVAC services.",
//   },
//   {
//     title: "Roofing and Waterproofing Services",
//     category: "Roofing",
//     icon: "roofing-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Durable roofing solutions for protection and longevity.",
//   },
//   {
//     title: "Painting and Coating Solutions",
//     category: "Painting",
//     icon: "painting-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description:
//       "Professional painting services to enhance your property's look.",
//   },
//   {
//     title: "Demolition and Site Preparation",
//     category: "Demolition",
//     icon: "demolition-icon.png",
//     images: [
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//       "/public/hero-img/hero1.png",
//     ],
//     description: "Safe and efficient demolition services for all projects.",
//   },
// ];

// const servicesData = [
//   {
//     id: 1,
//     icon: "carbon:search",
//     imgSrc: "/service-img/service-1.png",
//     title: "Permanent Staffing",
//     description:
//       "We match businesses with skilled professionals for long-term roles, aligning company culture with employee skills.",
//   },
//   {
//     id: 2,
//     icon: "mdi:tick-circle-outline",
//     imgSrc: "/service-img/service-2.png",
//     title: "Contract Staffing",
//     description:
//       "Offering flexible staffing solutions for project-based or temporary needs, helping businesses scale their workforce as required.",
//   },
//   {
//     id: 3,
//     icon: "ph:globe",
//     imgSrc: "/service-img/service-3.png",
//     title: "Executive Search",
//     description:
//       "Specialized recruitment for leadership positions, finding executives who align with company vision and goals.",
//   },
//   {
//     id: 4,
//     icon: "system-uicons:graph-increase",
//     imgSrc: "/service-img/service-4.png",
//     title: "Skill Development & Training",
//     description:
//       "Providing training programs to enhance the skills of employees, ensuring they are equipped to meet industry demands.",
//   },
//   {
//     id: 5,
//     icon: "system-uicons:graph-increase",
//     imgSrc: "/service-img/service-4.png",
//     title: "Outsourcing Solutions",
//     description:
//       "Managing various business processes to help companies focus on their core activities while we handle the rest.",
//   },
//   {
//     id: 6,
//     icon: "system-uicons:graph-increase",
//     imgSrc: "/service-img/service-4.png",
//     title: "Training and Development",
//     description:
//       "Providing training and workshops to improve employee skills and support career advancement.",
//   },
// ];

const processData = [
  {
    title: "Client Requirement",
    description:
      "Understanding the unique needs of our clients, we begin the recruitment process by carefully analyzing and defining the specific requirements for the ideal candidate.",
  },
  {
    title: "Labor Pre-Approval",
    description:
      "Prior to initiating recruitment efforts, we secure labor pre-approval to ensure a streamlined and compliant process, aligning with regulatory standards.",
  },
  {
    title: "Advertising Publishing",
    description:
      "Leveraging targeted advertising channels, we strategically publish job opportunities, maximizing visibility to attract a diverse pool of qualified candidates.",
  },
  {
    title: "Screening & Short Listing",
    description:
      "Rigorous screening processes are employed to meticulously evaluate applicants, resulting in a shortlist of candidates who best match the outlined client requirements.",
  },
  {
    title: "Candidate Interview",
    description:
      "Conducting comprehensive interviews, we delve into the candidates’ skills, experiences, and cultural fit, ensuring alignment with both client needs and organizational values.",
  },
  {
    title: "Practical Trade Testing",
    description:
      "To validate practical skills, candidates undergo thorough trade testing, allowing us to assess their hands-on capabilities and suitability for the specified roles.",
  },
  // {
  //   title: "Screening & Short Listing",
  //   description:
  //     "Following practical testing, a secondary screening and shortlisting process refines the candidate pool, ensuring that only the most qualified individuals progress further.",
  // },
  // {
  //   title: "Candidate Interview",
  //   description:
  //     "Continuing the assessment, additional interviews further refine the selection, allowing us to gain deeper insights into candidates’ suitability for the client’s requirements.",
  // },
  // {
  //   title: "Practical Trade Testing",
  //   description:
  //     "Iterative practical trade testing ensures a comprehensive evaluation of candidates’ capabilities, guaranteeing that those chosen possess the necessary skills for success.",
  // },
  // {
  //   title: "Screening & Short Listing",
  //   description:
  //     "An additional screening and shortlisting phase fine-tunes the selection, ensuring that the final pool of candidates aligns perfectly with the client’s expectations.",
  // },
  // {
  //   title: "Candidate Interview",
  //   description:
  //     "Culminating in a final round of interviews, we meticulously assess candidates’ overall suitability, facilitating the selection of the best-matched individuals for the client’s requirements.",
  // },
];
