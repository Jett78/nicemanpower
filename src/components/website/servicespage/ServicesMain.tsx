import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";
type Props = {};

const sections: any = [
  {
    title: "Skilled Labor for Building and Infrastructure Projects",
    category: "Construction",
    icon: "material-symbols-light:construction",
    images: [
      "/public/hero-img/hero1.png",
      "/public/hero-img/hero1.png",
      "/public/hero-img/hero1.png",
      "/public/hero-img/hero1.png",
    ],
    description: "Need expert manpower to boost your business operations?",
  },
  {
    title: "Electrical Services for Residential and Commercial",
    category: "Electrical",
    icon: "mdi:electricity-outline",
    images: [
      "/public/hero-img/hero2.png",
      "/public/hero-img/hero2.png",
      "/public/hero-img/hero2.png",
      "/public/hero-img/hero2.png",
    ],
    description: "Reliable electrical services to power up your projects.",
  },
  {
    title: "Plumbing Solutions for Modern Buildings",
    category: "Plumbing",
    icon: "material-symbols:plumbing",
    images: [
      "/public/hero-img/hero3.png",
      "/public/hero-img/hero3.png",
      "/public/hero-img/hero3.png",
      "/public/hero-img/hero3.png",
    ],
    description: "Ensure efficient water management with expert plumbers.",
  },
  {
    title: "Interior Design and Finishing",
    category: "Interior Design",
    icon: "mdi:design",
    images: [
      "/public/hero-img/hero4.png",
      "/public/hero-img/hero4.png",
      "/public/hero-img/hero4.png",
      "/public/hero-img/hero4.png",
    ],
    description: "Creative interior solutions to make your space stand out.",
  },
  {
    title: "Landscape Design and Maintenance",
    category: "Landscaping",
    icon: "lucide:land-plot",
    images: [
      "/public/hero-img/hero5.png",
      "/public/hero-img/hero5.png",
      "/public/hero-img/hero5.png",
      "/public/hero-img/hero5.png",
    ],
    description: "Transform outdoor spaces into stunning landscapes.",
  },
  {
    title: "HVAC Systems Installation and Maintenance",
    category: "HVAC",
    icon: "material-symbols-light:hvac",
    images: [
      "/public/hero-img/hero6.png",
      "/public/hero-img/hero6.png",
      "/public/hero-img/hero6.png",
      "/public/hero-img/hero6.png",
    ],
    description: "Keep your environment comfortable with expert HVAC services.",
  },
  {
    title: "Roofing and Waterproofing Services",
    category: "Roofing",
    icon: "material-symbols:roofing-outline",
    images: [
      "/public/hero-img/hero1.png",
      "/public/hero-img/hero1.png",
      "/public/hero-img/hero1.png",
      "/public/hero-img/hero1.png",
    ],
    description: "Durable roofing solutions for protection and longevity.",
  },
  {
    title: "Painting and Coating Solutions",
    category: "Painting",
    icon: "tabler:paint",
    images: [
      "/public/hero-img/hero2.png",
      "/public/hero-img/hero2.png",
      "/public/hero-img/hero2.png",
      "/public/hero-img/hero2.png",
    ],
    description:
      "Professional painting services to enhance your property's look.",
  },
  {
    title: "Demolition and Site Preparation",
    category: "Demolition",
    icon: "game-icons:demolish",
    images: [
      "/public/hero-img/hero3.png",
      "/public/hero-img/hero3.png",
      "/public/hero-img/hero3.png",
      "/public/hero-img/hero3.png",
    ],
    description: "Safe and efficient demolition services for all projects.",
  },
];

export default function ServicesMain({}: Props) {
  const mainContainer = useRef(null);
  // GSAP Animation
  useGSAP(() => {
    // Check if the screen size is large (lg and above)
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          markers: true,
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
      className="py-[2rem] w-11/12 lg:w-8/12 pt-[4rem]  lg:pt-[8rem] mx-auto"
    >
      <div className="mb-[5rem]">
        <h1 className="text-[8vw] lg:text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
          What services do <br /> we provide?
        </h1>
        <h3 className="text-[3.5vw] lg:text-[1.2vw] text-zinc-700 lg:w-8/12  mx-auto text-left lg:text-center">
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
                className={`group flex flex-col justify-center lg:text-center items-center gap-2 p-10 rounded-xl cursor-pointer hover:border-tertiary-600 duration-300 w-full bg-zinc-100 border-2 border-tertiary-600`}
              >
                <h3 className="w-full duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw]  pb-3">
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
      <h1 className="text-[8vw] lg:text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Industries We Supply
      </h1>
      <h3 className="text-[3.5vw] lg:text-[1.2vw] text-zinc-700 lg:w-8/12  mx-auto text-left lg:text-center">
        At Nice Recruiting Agency, we are dedicated to providing comprehensive
        manpower solutions that empower businesses to succeed. Our services
        range from permanent and contract staffing to executive search, skill
        development, and outsourcing.
      </h3>

      {/* cards */}

      <div
        ref={mainContainer}
        className="w-full lg:h-screen flex justify-center items-center"
      >
        <div className="flex mt-5 lg:mt-[8vh] w-full justify-center items-center gap-5">
          {/* Left Titles */}
          <div className="h-[90vh] flex flex-col gap-2 w-full lg:w-[20vw]">
            {sections.map((section: any, index: number) => (
              <div
                key={index}
                className={`w-full flex-grow rounded-xl flex gap-3 justify-between items-center p-4 title-card-${
                  index + 1
                } ${index % 2 === 0 ? "bg-green-300" : "bg-orange-300"}`}
              >
                <div className="flex w-[80%] lg:w-auto flex-col justify-center flex-grow">
                  <p
                    className={`hero font-medium h-auto overflow-hidden text-zinc-700 text-[3.5vw] mb-2 lg:mb-0 lg:text-[0.95vw] title-${
                      index + 1
                    }`}
                  >
                    {section.title}
                  </p>
                  <div>
                    <button
                      className={`px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.2vw] text-[3.5vw] lg:text-[0.8vw] font-semibold ${
                        index % 2 === 0 ? "bg-green-200" : "bg-orange-200"
                      } rounded-full  text-zinc-700 border-zinc-600`}
                    >
                      {section.category}
                    </button>
                  </div>
                </div>
                <div className="h-full flex justify-center items-center flex-grow">
                  <Icon
                    icon={section.icon}
                    className="min-w-5 min-h-5 text-zinc-800"
                  ></Icon>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Images */}
          <div className="h-[90vh] hidden  w-[30vw] rounded-2xl overflow-hidden lg:flex flex-col border-2 relative border-zinc-800">
            {sections.map((section: any, index: number) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full p-3 grid gap-3 grid-cols-2 auto-rows-fr images-${
                  index + 1
                } ${index > 0 ? "opacity-0" : ""}`}
              >
                {section.images.map((src: any, imgIndex: number) => (
                  <div
                    key={imgIndex}
                    className={`relative overflow-hidden rounded-lg ${
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
                      className="w-full h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                    {/* Add subtle shadow for elevation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right Descriptions */}
          <div className="h-[90vh] hidden  w-[15vw] lg:flex justify-center items-start relative">
            {sections.map((section: any, index: number) => (
              <div
                key={index}
                className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 desc-${
                  index + 1
                } ${index > 0 ? "opacity-0" : "opacity-1"}`} // For descriptions
              >
                <p className="text-[1.3vw] text-zinc-600">
                  {section.description}
                </p>
                <Link to="">
                  <button className="px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold bg-green-500 hover:bg-green-500 duration-300 rounded-full text-zinc-50 border-zinc-600">
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
        <h1 className="text-[8vw] lg:text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
          Our Process Of Recruitment
        </h1>
        <p className="text-[3.5vw] lg:text-[1.2vw] text-zinc-700 lg:text-center w-8/12 mx-auto">
          Our Recruitment Process: Learn about our systematic approach to
          sourcing, evaluating, and placing top talent to meet your hiring needs
          effectively.
        </p>

        {/* <p className="lg:text-[1.2vw] text-zinc-700 text-center w-7/12 mx-auto">
          we believe in a streamlined and effective recruitment process that
          ensures the best fit for both clients and candidates. Our process is
          built on a foundation of transparency, efficiency, and attention to
          detail.
        </p> */}
        <div className="grid w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {processData.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center lg:text-center items-center gap-2 p-10 rounded-xl cursor-pointer hover:border-tertiary-600 duration-300 w-full bg-zinc-100 border-2 border-zinc-600"
            >
              <h3 className="w-full group-hover:border-zinc-600 duration-300 font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] border-b-2 border-zinc-400 pb-3">
                {service.title}
              </h3>
              <p className="text-[3.5vw] md:text-[2vw] lg:text-[0.9vw] text-zinc-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

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
  {
    title: "Screening & Short Listing",
    description:
      "Following practical testing, a secondary screening and shortlisting process refines the candidate pool, ensuring that only the most qualified individuals progress further.",
  },
  {
    title: "Candidate Interview",
    description:
      "Continuing the assessment, additional interviews further refine the selection, allowing us to gain deeper insights into candidates’ suitability for the client’s requirements.",
  },
  {
    title: "Practical Trade Testing",
    description:
      "Iterative practical trade testing ensures a comprehensive evaluation of candidates’ capabilities, guaranteeing that those chosen possess the necessary skills for success.",
  },
  {
    title: "Screening & Short Listing",
    description:
      "An additional screening and shortlisting phase fine-tunes the selection, ensuring that the final pool of candidates aligns perfectly with the client’s expectations.",
  },
  {
    title: "Candidate Interview",
    description:
      "Culminating in a final round of interviews, we meticulously assess candidates’ overall suitability, facilitating the selection of the best-matched individuals for the client’s requirements.",
  },
];
