import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Ctaform from "./Ctaform";


gsap.registerPlugin(ScrollTrigger);
const JobsFeature = () => {
  const [active, Setactive] = useState(false);
  // Overlay click handler
  const closeDropdown = () => {
    Setactive(false);
  };
  
  const featureContainer = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        trigger:featureContainer.current,
        scrub: 0.5,
        // markers:true,
      },
    });

tl.to(".imgrotate",{
  rotateZ:"20deg",
})
  }, []);

  return (
    <main className="flex justify-center gap-10 items-center h-full my-20" ref={featureContainer}>
      <section className="flex flex-col justify-center items-start gap-1 text-left h-full lg:w-[50%]">
        <h2 className="text-[3vw] lg:text-[1vw]  font-semibold text-orange-500 hero">Need Skilled Talent for Your Projects?</h2>
        <p className="text-[3.5vw] lg:text-[1.2vw] text-zinc-700 leading-relaxed lg:w-[96%]">
          We’ve partnered with over 800 companies globally, delivering top-tier
          talent across diverse industries. Whether you're looking for
          specialized skills or general manpower, we’ve got you covered. Let us
          help you build the perfect team to drive your business forward.
        </p>
        
            <button  onClick={() => Setactive(!active)} className="mt-[4em] px-[4vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3vw] lg:text-[1vw] font-semibold text-zinc-50  rounded-full bg-orange-500 hover:bg-orange-600 duration-300">
              Get in Touch Today
            </button>
      </section>
      <section className="imgrotate">
      <img
              src="/public/hands.png"
              alt="hands"
              className="w-[30vw] h-[16vw] object-cover object-center rounded-xl"
            />
      </section>
    {/* --Dark overlay-- */}
    {active && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-[150]"
            onClick={closeDropdown}
          ></div>
          <div className="fixed z-[200] inset-0 flex justify-center items-center">
            <Ctaform closeDropdown={closeDropdown} />
          </div>
        </>
      )}
    </main>
  );
};

export default JobsFeature;
