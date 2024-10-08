import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    arrows: false,
    // pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="pb-[2rem] md:my-40 my-20  flex justify-center items-center flex-col w-full"
    >
      <div className="w-full justify-center items-center text-center">
        <h1 className="text-[8vw] lg:text-[4vw] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800 text-center leading-none hero">
          Voice Of Our <span className="">Clients</span>
        </h1>
        <p className="my-[2vw]  w-full lg:w-10/12 text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] text-zinc-700 mx-auto leading-relaxed">
          You may not trust us yet, but you can trust the positive experiences
          of our clients who have benefited from our dedicated service and
          successful placements.
        </p>
      </div>

      <div className="relative w-full md:mt-10">
        <Slider {...settings} ref={sliderRef}>
          {reviewsData.map((item, index) => (
            <div key={index} className="px-4 cursor-pointer py-10">
              <div className="bg-[#f4f4f5] grid border-2 border-zinc-200 min-h-[15vw] lg:w-[24vw] p-6 rounded-2xl mx-auto">
                <div className="flex mb-4 md:text-[1vw]">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="ic:sharp-star"
                      style={{ color: "#d77a00" }}
                    />
                  ))}
                </div>
                <p className="mb-4 text-light  md:text-[1vw] text-xs leading-6">
                  "{item.reviewDescription}"
                </p>
                <div className="flex items-center md:gap-[1vw] gap-4">
                  <img src={item.img} alt="avatars" className="w-10 h-10 "/>
                 <div>
                 <h2 className="font-semibold md:text-[1vw] text-sm">{item.name}</h2>
                 <p className="font-medium md:text-[0.8vw] text-xs">{item.position}</p>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 left-0 h-full bg-gradient-to-r w-[20vw] from-zinc-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full bg-gradient-to-l w-[20vw] from-zinc-50 to-transparent z-10"></div>

        <div className="flex text-2xl items-center gap-6 absolute left-1/2 transform -translate-x-1/2 -bottom-10 mt-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer outline-none border rounded-full bg-[#2088ca]  active:bg-blue-500/50 ease-in-out duration-200 shadow-sm p-2"
          >
            <Icon icon="iconamoon:arrow-left-2" style={{ color: "white" }} />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer outline-none border rounded-full bg-[#2088ca]  active:bg-blue-500/50 ease-in-out duration-200 shadow-sm p-2"
          >
            <Icon icon="iconamoon:arrow-right-2" style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const reviewsData = [
  {
    id: 1,
    reviewText: "Their AI-development consulting report was eye-opening",
    reviewDescription:
      "Nice Recruitment Agency provided skilled workers for our construction project on time and with great professionalism",
    name: "John D",
    position: "Construction Manager",
    img:"./public/avatars/im1.png"
  },
  {
    id: 2,
    reviewText: "Fantastic collaboration on our AI project",
    reviewDescription:
      "Quick and reliable hospitality staff from Nice Recruitment Agency. Met our standards effortlessly!",
    name: "Jane Smith",
    position: "Hotel Director",
    img:"./public/avatars/im2.png",

  },
  {
    id: 3,
    reviewText: "Insightful and professional AI consultation",
    reviewDescription:
      "They delivered experienced oil and gas specialists who integrated seamlessly into our team.",
    name: "Michael Brown",
    position: "Oil & Gas Operations",
    img:"./public/avatars/im3.png",

  },
  {
    id: 4,
    reviewText: "Exceptional support throughout the project",
    reviewDescription:
      "Consistent and reliable manpower for our manufacturing needs. Nice Recruitment Agency is always on point!",
    name: "Emily White",
    position: "Plant Supervisor",
    img:"./public/avatars/im4.png",

  },
];
