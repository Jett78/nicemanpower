import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();
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
  // Helper function to determine if the link should be active
  const isActive = (href: string) => {
    return (
      location.pathname === href || location.pathname.startsWith(`${href}/`)
    );
  };





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
      className="w-full flex  justify-center items-center fixed top-0 left-0 py-[0.5vw]   z-[50] "
    >
      <div className="mx-auto flex justify-center rounded-full px-[2vw] py-[0.5vw] bg-zinc-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center">
        <div className="w-full flex justify-center gap-28 items-center">
          <Link to="">
            <img className="w-[6vw]" src="/public/logo/nice-logo.png" alt="" />
          </Link>

          <div className="flex gap-[2vw] text-[0.9vw] font-semibold justify-center items-center text-zinc-700">
            {navItems.map(({ href, label }) => (
              <Link key={href} to={href}>
                <span
                  className={`transition-all hover:text-green-500 font-medium duration-300 ${
                    isActive(href) ? "text-green-500" : "text-tertiary-700 "
                  }`}
                >
                  {label}
                </span>
              </Link>
            ))}
              </div>
            {/* <Link to="" className="hover:text-secondary-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-secondary-500">
              About
            </Link>
            <Link to="/services" className="hover:text-secondary-500">
              Services
            </Link>
            <Link to="/blogs" className="hover:text-secondary-500">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-secondary-500">
              Contact
            </Link> */}

            <Link to="/contact">
              <button className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold bg-blue-500 hover:bg-blue-600 duration-300   rounded-full text-tertiary-50">
                Contact
              </button>
            </Link>

        
        </div>
      </div>
    </motion.div>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/jobs", label: "Jobs" },
];
