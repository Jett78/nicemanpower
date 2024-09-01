import { motion } from "framer-motion";
import { Link } from "react-router-dom";
type Props = {};

export default function BlogMain({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[6rem]  lg:pt-[7rem] pb-[4rem] w-11/12 lg:w-9/12 mx-auto"
    >
      {" "}
      <h1 className="hero text-[8vw] lg:text-[3vw]  lg:text-center font-semibold ">
        Discover Our <span className="text-secondary-400">Article</span>
      </h1>
      {/* cards */}
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {workData.map((item) => (
          <Link
            to={`/blogs/${item.id}`}
            key={item.id}
            className="w-full flex flex-col justify-start items-start group gap-2 p-4 rounded-lg cursor-pointer hover:border-tertiary-700 duration-300  border border-tertiary-700 lg:border-transparent"
          >
            <div className="w-full h-[30vh] overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="scale-105 object-cover object-center rounded-md"
              />
            </div>

            <div className="flex w-full justify-between text-[2.5vw] md:text-[1.5vw] lg:text-[0.7vw] text-zinc-300">
              <span>July 20, 2024</span>
              <span>5 minutes read</span>
            </div>
            <h3 className="font-semibold text-[4vw] group-hover:text-secondary-400  duration-300 md:text-[3vw] lg:text-[1.2vw]">
              {item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title}
            </h3>
            <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[0.8vw] text-zinc-300">
              {item.description.length > 70
                ? item.description.slice(0, 70) + "..."
                : item.description}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

const workData = [
  {
    id: 1,
    imgSrc: "public/service-img/service-1.png",
    title: "How to Identify and Attract Top Managerial Talent",
    description:
      "Explore strategies and techniques for drawing high-quality IT professionals to your organization. Learn how to market your company effectively...",
  },
  {
    id: 2,
    imgSrc: "public/service-img/service-2.png",
    title: "Essential Skills to Look for When Hiring IT Professionals",
    description:
      "Explore strategies and techniques for drawing high-quality IT professionals to your organization. Learn how to market your company effectively...",
  },
  {
    id: 3,
    imgSrc: "public/service-img/service-3.png",
    title: "Navigating the Challenges of Remote Hiring",
    description:
      "Explore strategies and techniques for drawing high-quality IT professionals to your organization. Learn how to market your company effectively...",
  },
  {
    id: 4,
    imgSrc: "public/service-img/service-4.png",
    title: "The Future of Farm Labor: Trends and Innovations in Recruitment",
    description:
      "Explore strategies and techniques for drawing high-quality IT professionals to your organization. Learn how to market your company effectively...",
  },
  {
    id: 4,
    imgSrc: "public/service-img/service-5.png",
    title: "How to Build a Strong Talent Pipeline for Hotel Operations",
    description:
      "Explore strategies and techniques for drawing high-quality IT professionals to your organization. Learn how to market your company effectively...",
  },
  {
    id: 4,
    imgSrc: "public/service-img/service-6.png",
    title: "How to Recruit Top Culinary Talent for Hotel Kitchens",
    description:
      "Explore strategies and techniques for drawing high-quality IT professionals to your organization. Learn how to market your company effectively...",
  },
];
