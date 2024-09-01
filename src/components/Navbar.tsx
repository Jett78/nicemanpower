import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
  const [scrollingUp, setScrollingUp] = useState(true);
  const controls = useAnimation();
  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      setScrollingUp(currentScrollTop < lastScrollTop);
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      y: scrollingUp ? 0 : -80,
      opacity: scrollingUp ? 1 : 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  }, [scrollingUp, controls]);
  useEffect(() => {
    controls.start({
      y: scrollingUp ? 0 : -80,
      opacity: scrollingUp ? 1 : 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  }, [scrollingUp, controls]);
  return (
    <motion.div
      animate={controls}
      className="w-full flex  justify-center items-center fixed top-0 left-0 h-[3vw] py-[2.5vw] z-[50] "
    >
      <div className="mx-auto flex justify-center rounded-full px-[2vw] py-[0.8vw] bg-gray-100 items-center">
        <div className="w-full gap-[10vw] flex justify-between items-center">
          <Link to="">
            <img className="w-[5vw]" src="/public/logo/nice-logo.png" alt="" />
          </Link>
          <div className="flex gap-5 text-[0.9vw] font-medium justify-center items-center">
            <Link to="">Home</Link>
            <Link to="">About</Link>
            <Link to="">Services</Link>
            <Link to="">Blog</Link>
            <Link to="">Contact</Link>

            <Link to="">
              <button className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold bg-primary-500 rounded-full text-tertiary-50">
                Find Jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
