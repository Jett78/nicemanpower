import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const stickyContainer = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        end: "end -500%",
        trigger: stickyContainer.current,
        pin: true,
        scrub: 0.5,
      },
    });

    steps.forEach((step, index) => {
      tl.to(`.${step.id}`, {
        y: `-${100 - index}vh`,
        duration: 1,
        rotate: index % 2 === 0 ? 5 : -5,
      });
    });

    // Cleanup function to remove ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full ">
      <div className="w-full h-screen flex justify-center relative items-center">
        <h1 className="text-[9vw] lg:text-[8vw] hero font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800 text-center leading-none sticky top-[10vh]">
          How It <br /> Works?
        </h1>
      </div>

      {/* Main container */}
      <div className="w-full">
        <div ref={stickyContainer} className="w-full h-screen  relative">
          <div
            className={`w-full  h-screen absolute  top-0 left-0 flex justify-center items-center`}
          >
            <div className="w-11/12 lg:w-8/12  lg:h-[70vh] overflow-hidden border-2 border-zinc-500  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-zinc-50/50  mx-auto rounded-3xl flex flex-col gap-10 p-5 lg:p-16 justify-center relative items-center">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <img
                  src="/public/step/paper.avif"
                  alt=""
                  className="w-full h-full object-cover object-center brightness-105"
                />
              </div>
              <div className="absolute top-6 left-6 p-4 rounded-full bg-green-300 flex justify-center items-center">
                <img
                  src="/public/step/step1.png"
                  alt=""
                  className="w-[1.5vw] object-cover object-center"
                />
              </div>
              <span className="text-[4vw] lg:text-[2vw] relative text-zinc-800 font-semibold">
                Submit A Resume
              </span>

              <div className="flex flex-col lg:flex-row relative justify-center items-center gap-8">
                <p className="w-full lg:w-[55%] text-[3.5vw] lg:text-[1.1vw] text-zinc-600">
                  Start your journey by submitting your application online.
                  Provide us with your resume, portfolio, and any other relevant
                  information to help us understand your qualifications and
                  career aspirations.
                </p>
                <img
                  src="/public/hire-step/step1.png"
                  alt=""
                  className="w-full lg:w-[50%] brightness-[0.5] rounded-xl top-0 left-0 h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-full ${step.id} h-screen absolute z-[${index}] top-[100vh] left-0 flex justify-center items-center`}
            >
              <div
                // style={{ backgroundColor: step.background }}
                className="w-11/12 lg:w-8/12 lg:h-[70vh] overflow-hidden border-2 border-zinc-500  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  mx-auto rounded-3xl flex flex-col gap-10 p-10 lg:p-16 justify-center relative items-center"
              >
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <img
                    src="/public/step/paper.avif"
                    alt=""
                    className="w-full h-full object-cover object-center brightness-105"
                  />
                </div>
                <div className="absolute top-6 left-6 p-4 rounded-full bg-green-300 flex justify-center items-center">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-[1.5vw] object-cover object-center"
                  />
                </div>
                <span className="text-[4vw] lg:text-[2vw] relative  text-zinc-800 font-semibold">
                  {step.text}
                </span>

                <div className="flex flex-col lg:flex-row justify-center relative items-center gap-8">
                  <p className="w-full lg:w-[55%] text-[3.5vw] lg:text-[1.1vw] text-zinc-600">
                    {step.description}
                  </p>
                  <img
                    src={step.src}
                    alt=""
                    className="w-full lg:w-[50%] brightness-[0.5] rounded-xl top-0 left-0 h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    id: "card2",
    src: "/public/hire-step/step2.webp",
    text: "Get matched",
    description:
      "After submitting your application, our team will review your qualifications and match you with the best roles that fit your experience and career goals. We ensure that every match is carefully selected to provide the best opportunities for you.",
    background: "#ffecb3", // Light orange
    icon: "/public/step/step2.png",
  },
  {
    id: "card3",
    src: "/public/hire-step/step3.webp",
    text: "Give an interview",
    description:
      "Once matched, you'll be invited to interview with our clients. We provide you with all the necessary resources and guidance to ensure you're fully prepared to showcase your skills and expertise during the interview process.",
    background: "#e0e0e0", // Light green
    icon: "/public/step/step3.png",
  },
  {
    id: "card4",
    src: "/public/hire-step/step4.webp",
    text: "Get hired",
    description:
      "After successfully completing the interview, you'll receive feedback and, if selected, get hired. We work with you throughout the negotiation and onboarding process to ensure a smooth transition into your new role.",
    background: "#c5e1a5", // Light gray
    icon: "/public/step/step4.png",
  },
];
