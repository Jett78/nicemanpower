import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

type Props = {};
gsap.registerPlugin(ScrollTrigger);
export default function HowItWorks({}: Props) {
  const stickyContainer = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        start: "top top",
        end: "end -500%",
        trigger: stickyContainer.current,
        pin: true,
        scrub: 0.5,
      },
    });

    tl.to(".card2", {
      y: "-100vh",
      duration: 1,
      rotate: 5,
    });
    tl.to(".card3", {
      y: "-100vh",
      duration: 1,
      rotate: -5,
    });
    tl.to(".card4", {
      y: "-100vh",
      duration: 1,
      rotate: 5,
    });
  });
  return (
    <div className="w-full">
      <div className="w-full h-screen flex justify-center relative items-center">
        <h1 className="text-[8vw] sticky top-[20vh] font-medium text-tertiary-800  hero text-center leading-none">
          How It <br /> Work?
        </h1>
      </div>

      {/* main container  */}
      <div className="w-full  sticky top-0">
        <div
          ref={stickyContainer}
          className="w-full h-screen overflow-hidden relative"
        >
          {/* card  */}
          <div className="w-full h-screen  flex justify-center items-center">
            <div className="w-8/12 h-[60vh] bg-tertiary-100 mx-auto rounded-3xl flex justify-center relative items-center">
              <img
                src="/public/hire-step/step1.png"
                alt=""
                className="absolute brightness-[0.5] rounded-3xl top-0 left-0 w-full h-full object-cover object-center"
              />
              <span className="text-[2vw] relative text-tertiary-50 font-semibold">Submit a resume</span>
            </div>
          </div>

          {/* from here */}
          {/* card  */}
          <div className="w-full card2 h-screen absolute z-[1]  top-[100vh] left-0 flex justify-center  items-center">
            <div className="w-8/12 h-[60vh] bg-tertiary-100 mx-auto rounded-3xl flex justify-center relative items-center">
              <img
                src="/public/hire-step/step2.webp"
                alt=""
                className="absolute brightness-[0.5] rounded-3xl top-0 left-0 w-full h-full object-cover object-center"
              />
              <span className="text-[2vw] relative text-tertiary-50 font-semibold">Get matched</span>
            </div>
          </div>

          {/* card  */}
          <div className="w-full card3 h-screen absolute z-[2]  top-[100vh] left-0 flex justify-center items-center">
            <div className="w-8/12 h-[60vh] bg-tertiary-100 mx-auto rounded-3xl flex justify-center relative items-center">
              <img
                src="/public/hire-step/step3.webp"
                alt=""
                className="absolute brightness-[0.5] rounded-3xl top-0 left-0 w-full h-full object-cover object-center"
              />
              <span className="text-[2vw] relative text-tertiary-50 font-semibold">Give an interview</span>
            </div>
          </div>

          {/* card  */}
          <div className="w-full card4 h-screen absolute z-[3]  top-[100vh] left-0 flex justify-center items-center">
            <div className="w-8/12 h-[60vh] bg-tertiary-100 mx-auto rounded-3xl flex justify-center relative items-center">
              <img
                src="/public/hire-step/step4.webp"
                alt=""
                className="absolute brightness-[0.5] rounded-3xl top-0 left-0 w-full h-full object-cover object-center"
              />
              <span className="text-[2vw] relative text-tertiary-50 font-semibold">Get hired</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const steps = [
  { number: 1, text: "Submit a resume", image: "/public/hire-step/step1.png" },
  { number: 2, text: "Get matched", image: "/public/hire-step/step2.webp" },
  {
    number: 3,
    text: "Give an interview",
    image: "/public/hire-step/step3.webp",
  },
  { number: 4, text: "Get hired", image: "/public/hire-step/step4.webp" },
];
