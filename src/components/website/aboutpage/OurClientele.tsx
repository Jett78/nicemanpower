import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const steps = [
//   { number: 1, text: "Bahrain", image: "/public/client/Bahrain.png" },
//   { number: 2, text: "UAE", image: "/public/client/Uae.png" },
//   { number: 3, text: "Saudi Arabia", image: "public/client/Saudi.png" },
//   { number: 4, text: "Qatar", image: "/public/client/Qatar.png" },
//   { number: 5, text: "Malaysia", image: "/public/client/Malaysia.png" },
// ];

const clientdata = [
  {
    img: "/public/client/cm1.jpg",
  },
  {
    img: "/public/client/cm2.png",
  },
  {
    img: "/public/client/cm3.png",
  },
  {
    img: "/public/client/cm4.png",
  },
  {
    img: "/public/client/cm5.png",
  },
];
const clientdata2 = [
  {
    img: "/public/client/cm1.jpg",
  },
  {
    img: "/public/client/cm2.png",
  },
  {
    img: "/public/client/cm3.png",
  },
  {
    img: "/public/client/cm4.png",
  },
  {
    img: "/public/client/cm5.png",
  },
];
export default function OurClientele() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: false, // Add this line to change the slide direction
    pauseOnHover: false, // Continue sliding when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: false, // Continue sliding when hovered
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          pauseOnHover: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true, // Add this line to change the slide direction
    pauseOnHover: false, // Continue sliding when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: false, // Continue sliding when hovered
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          pauseOnHover: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        },
      },
    ],
  };

  // const [activeStep, setActiveStep] = useState<number | null>(1);
  // const [lastHoveredImage, setLastHoveredImage] = useState<string | null>(
  //   steps[0].image
  // );

  return (
    <div className="py-[10rem] w-full">
      <h1 className="text-[8vw]  lg:text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Our Clientele
      </h1>
      <p className="my-[2vw]  text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] text-zinc-700 w-full lg:w-8/12 mx-auto text-left lg:text-center">
        We have already worked with 200+ clients all over the world and they are
        pretty satisfied with our work.
      </p>

      <div className="w-full mt-5 lg:mt-10 lg:grid grid-cols-1 gap-x-10">
        {/* <div className="col-span-1 relative  flex flex-col gap-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mb-10   items-center top-[4rem]">
            {steps.map(({ number, text, image }) => (
              <motion.div
                key={number}
                onClick={() => {
                  setActiveStep(number);
                  setLastHoveredImage(image);
                }}
                className={`w-full hover:scale-105 duration-300 transition-all px-5 p-3 lg:p-3  rounded-full border-2  flex justify-around cursor-pointer ${
                  activeStep === number
                    ? "border-white bg-[#2088ca] scale-105 text-white"
                    : "border-zinc-400"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className={`font-semibold whitespace-nowrap text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] leading-none duration-300 transition-colors ${
                    activeStep === number ? "text-white" : "text-zinc-500 "
                  }`}
                >
                  {text}
                </h2>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* <div
          className="h-[50vh]  overflow-auto cursor-pointer"
          data-lenis-prevent
        >
          <div>
            <img
              src={
                steps.find((step) => step.number === activeStep)?.image ||
                lastHoveredImage ||
                "/dummy-work.png"
              }
              alt="work"
              className="w-full "
            />
          </div>
        </div> */}
      </div>

      <div className="space-y-16 md:my-20 my-10 ">
        <Slider {...settings} className="">
          {clientdata?.map((item, index) => (
            <div key={index} className="">
              <img
                src={item?.img}
                alt="icons-company"
                className=" object-cover rounded-lg h-32 w-40"
              />
            </div>
          ))}
        </Slider>
        <Slider {...settings2}>
          {clientdata2?.map((item, index) => (
            <div key={index} className="">
              <img
                src={item?.img}
                alt="icons-company"
                className=" object-cover rounded-lg h-32 w-40"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
