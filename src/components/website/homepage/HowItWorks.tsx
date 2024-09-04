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
        <h1 className="text-[8vw] hero font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800 text-center leading-none sticky top-[10vh]">
          How It <br /> Works?
        </h1>
      </div>

      {/* Main container */}
      <div className="w-full">
        <div ref={stickyContainer} className="w-full h-screen  relative">
          <div
            className={`w-full  h-screen absolute  top-0 left-0 flex justify-center items-center`}
          >
            <div className="w-8/12 h-[70vh] bg-blue-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-zinc-50/50  mx-auto rounded-3xl flex flex-col gap-10 p-20 justify-center relative items-center">
              <span className="text-[2vw] relative text-tertiary-800 font-semibold">
                Submit A Resume
              </span>

              <div className="flex justify-center items-center gap-10">
                <p className="w-[50%] text-[1.2vw] text-tertiary-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis dignissimos consequuntur laboriosam rem id accusantium
                  ab odio cupiditate, laborum tenetur?
                </p>
                <img
                  src="/public/hire-step/step1.png"
                  alt=""
                  className="w-[50%] brightness-[0.5] rounded-xl top-0 left-0 h-full object-cover object-center"
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
                style={{ backgroundColor: step.background }}
                className="w-8/12 h-[70vh]  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  mx-auto rounded-3xl flex flex-col gap-10 p-[8vw] justify-center relative items-center"
              >
                <span className="text-[2vw] relative text-tertiary-800 font-semibold">
                  {step.text}
                </span>

                <div className="flex justify-center items-center gap-10">
                  <p className="w-[50%] text-[1.2vw] text-tertiary-800">
                    {step.description}
                  </p>
                  <img
                    src={step.src}
                    alt=""
                    className="w-[50%] brightness-[0.5] rounded-xl top-0 left-0 h-full object-cover object-center"
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
  // {
  //   id: "card1",
  //   src: "/public/hire-step/step1.png",
  //   text: "Submit a resume",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam nulla sapiente omnis vitae quidem rerum voluptate sunt facilis quia.",
  //   background: "#e0f7fa", // Light blue
  // },
  {
    id: "card2",
    src: "/public/hire-step/step2.webp",
    text: "Get matched",
    description:
      "Explicabo repudiandae laborum, libero corrupti alias quaerat hic molestiae officia, maiores aspernatur.",
    background: "#ffecb3", // Light orange
  },
  {
    id: "card3",
    src: "/public/hire-step/step3.webp",
    text: "Give an interview",
    description:
      "Quisquam, provident dolore? Aliquam blanditiis velit nostrum qui necessitatibus laboriosam officia.",
    background: "#e0e0e0", // Light green
  },
  {
    id: "card4",
    src: "/public/hire-step/step4.webp",
    text: "Get hired",
    description:
      "Ducimus, accusantium. Molestiae dolorum incidunt, doloremque provident magni quis nobis.",
    background: "#c5e1a5", // Light gray
  },
];
