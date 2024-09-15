import { motion } from "framer-motion";
import { Link } from "react-router-dom";
type Props = {};

export default function BlogMain({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[4rem]  lg:pt-[8rem] pb-[4rem] w-11/12 lg:w-9/12 mx-auto"
    >
      {" "}
      <h1 className="text-[8vw] lg:text-[4vw] lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Discover Our Articles
      </h1>
      <h3 className="my-[2vw] text-[3.5vw] lg:text-[1.2vw] text-zinc-700 w-[80%]  mx-auto text-left lg:text-center">
        Explore insights and expert perspectives across diverse industries, from
        construction to hospitality. Stay updated with the latest trends, tips,
        and industry news through our curated articles.
      </h3>
      {/* cards */}
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {workData.map((item) => (
          <Link
            to={`/blogs/${item.id}`}
            key={item.id}
            className="w-full flex flex-col justify-start items-start group gap-2 p-4 rounded-lg cursor-pointer hover:border-zinc-400 duration-300  border-2 border-tertiary-600 lg:border-transparent"
          >
            <div className="w-full h-[30vh] rounded-xl overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="scale-105 object-cover object-center rounded-md"
              />
            </div>
            <div className="flex w-full justify-between text-[2.5vw] md:text-[1.5vw] lg:text-[0.7vw] text-zinc-500">
              <span>July 20, 2024</span>
              <span>5 minutes read</span>
            </div>
            <h3 className="font-semibold text-[4vw]   duration-300 md:text-[3vw] lg:text-[1.2vw]">
              {item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title}
            </h3>
            <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[0.8vw] text-zinc-700">
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
