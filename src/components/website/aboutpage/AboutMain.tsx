import OrganizationalChart from "./OrganizationalChart";
import OurTeam from "./OurTeam";
import Gallery from "./Gallery";
import CoreValues from "./CoreValues";
import ProcessFlowChart from "./ProcessFlowChart";
import OurClientele from "./OurClientele";
import LicenseCertificates from "./LicenseCertificates";
import { motion } from "framer-motion";

type Props = {};

export default function AboutMain({}: Props) {
  return (
    <motion.div className="w-11/12 lg:w-9/12 pt-[6rem]  lg:pt-[7rem] pb-[2rem] mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[5vw] lg:text-[2.2vw]  text-start lg:text-center leading-loose"
      >
        <h1 className="text-[4vw] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
          About Us
        </h1>
        <p className="text-[3.5vw] md:text-[3vw] text-zinc-700 leading-snug lg:text-[1.2vw] mt-2">
          Welcome to Nice Recruitment Agency Ethical and responsible manpower
          agency in Nepal
        </p>
      </motion.p>

      {/* cards */}
      <div className="grid w-full lg:w-8/12 pb-[2rem] mx-auto md:grid-cols-2 mt-5 gap-5">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full relative  flex flex-col justify-start items-start gap-2 p-5 rounded-3xl overflow-hidden border-zinc-600 border-2 group cursor-pointer"
          >
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-white bg-opacity-[0.2] flex justify-center items-center group-hover:opacity-0 pointer-events-none duration-300">
              <h3 className="font-semibold hero text-[4vw] md:text-[2.5vw] lg:text-[1.2vw] pointer-events-none">
                {card.title}
              </h3>
            </div>
            <p className="text-[3.5vw] md:text-[2vw] lg:text-[1vw] leading-loose text-center text-zinc-700">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* chairman message  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full py-[2rem]"
      >
        <h1 className="text-[1vw] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-500  leading-none hero">
          {`Chairman's Message`}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-2  gap-x-5">
          <div className="lg:col-span-3 flex flex-col gap-2">
            {/* name  */}
            <h2 className="font-semibold text-[4vw] md:text-[3vw] lg:text-[1.5vw] pointer-events-none">
              Nirmal GC
            </h2>
            {/* position */}
            <h3 className="font-semibold text-[3vw] md:text-[2.5vw] lg:text-[1.2vw]">
              Chairman, Nice Recruiting Agency
            </h3>
            {/* message  */}
            <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[1vw] leading-loose  text-zinc-700">
              It is with great pride and enthusiasm that I address you today as
              the Chairman of Nice Recruiting Agency - a leading provider of
              comprehensive manpower solutions. As we embark on an exciting new
              chapter, I am honored to share our vision and the core values that
              guide us in empowering organizations and individuals to thrive.
              Since our inception, Nice Recruiting Agency has been steadfastly
              committed to revolutionizing the way businesses access and manage
              their most valuable resource - human capital. We are very proud of
              the fact that 80% plus of our work is repeated with preferred
              clients who come to trust and acknowledge the fact. Through our
              unwavering dedication to excellence, innovative approach, and deep
              industry expertise, we have established ourselves as a trusted
              partner that consistently delivers tailored workforce solutions to
              meet the evolving needs of our clients
            </p>
          </div>

          {/* charman img */}
          <div className="w-full overflow-hidden relative lg:col-span-2 h-full">
            <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent z-10"></div>
            <img
              src="/public/team/ceo.png"
              alt="ceo-img"
              className="scale-105 object-cover object-center"
            ></img>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <OrganizationalChart />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <OurTeam />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Gallery />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <CoreValues />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ProcessFlowChart />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <OurClientele />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <LicenseCertificates />
      </motion.div>
    </motion.div>
  );
}

const cardsData = [
  {
    title: "Mission",
    description:
      "It is our mission to support our clients through their current and future business challenges. Our activities, aimed at finding a balance in the labour market serve to give our clients significance, which will support their business development via the growth of employment or improvement in the quality of their human resources.",
  },
  {
    title: "Vision",
    description:
      "Nice Recruiting Agency Pvt. Ltd. shall be the undisputed leader in the country’s recruitment and placement industry by continually providing our clients with world-class and top notch service and competent workforce, by constantly upgrading its facilities and systems and by strengthening sustainable productive relationship within our employees and candidates.",
  },
  // Add more card objects here as needed
];
