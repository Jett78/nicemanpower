import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { useRef } from "react";

export default function Testimonials() {
  // const sliderRef = useRef<HTMLDivElement>(null);

  // const handleNext = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };

  // const handlePrev = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
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
      className="pb-[2rem] my-20 min-h-screen overflow-hidden flex justify-center items-center flex-col w-full"
    >
      <div className="w-full justify-center items-center text-center">
        <h1 className="text-[8vw] lg:text-[4vw] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800 text-center leading-none hero">
          Voice Of Our <span className="">Clients</span>
        </h1>
        <p className="w-full lg:w-6/12 text-[3.5vw] lg:text-[1.3vw] text-zinc-700 mx-auto leading-relaxed">
          You may not trust us yet, but you can trust the positive experiences
          of our clients who have benefited from our dedicated service and
          successful placements.
        </p>
      </div>

      <div className="relative w-full mt-10">
        <Slider {...settings} >
          {reviewsData.map((item, index) => (
            <div key={index} className="px-4 cursor-pointer py-10">
              <div className="bg-[#f4f4f5] grid border-2 border-zinc-200 min-h-[15vw] max-w-[24vw] p-6 rounded-2xl mx-auto">
                <div className="flex mb-4 text-[1vw]">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="ic:sharp-star"
                      style={{ color: "#d77a00" }}
                    />
                  ))}
                </div>
                <p className="mb-4 text-light  text-[1vw] h-[6vw]">
                  "{item.reviewDescription}"
                </p>
                <div className="flex items-center gap-[1vw]">
                  <img src={item.img} alt="avatars"/>
                 <div>
                 <h2 className="font-semibold md:text-[1vw]">{item.name}</h2>
                 <p className="font-medium md:text-[0.8vw]">{item.position}</p>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <div className="flex text-4xl items-center gap-4 absolute left-1/2 transform -translate-x-1/2 top-0 mt-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer outline-none border rounded-full bg-white shadow-sm p-2"
          >
            <Icon icon="iconamoon:arrow-left-2" style={{ color: "black" }} />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer outline-none border rounded-full bg-white shadow-sm p-2"
          >
            <Icon icon="iconamoon:arrow-right-2" style={{ color: "black" }} />
          </button>
        </div> */}
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
