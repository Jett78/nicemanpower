import { Icon } from "@iconify/react/dist/iconify.js";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(false);
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

    // Overlay click handler
    const closeDropdown = () => {
      setActive(false);
    };

     // ----close dropdown and mobile menu on pathname change-----
  useEffect(() => {
    setActive(false); // Close dropdown
  }, [location]);

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

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return (
    <main className="">
      <motion.div
        animate={controls}
        className="w-full flex  justify-center items-center fixed top-2 left-0 py-[0.5vw] z-20"
      >
        <div className="mx-auto  flex justify-center rounded-full px-[2vw] sm:py-[0.5vw] py-2 bg-zinc-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center">
          <div className="w-full flex justify-center gap-28 items-center">
            <Link to="/">
              <img
                className="md:w-[8vw] w-20"
                src="/public/logo/nice-logo.png"
                alt=""
              />
            </Link>

            <div className="md:flex hidden gap-[2vw] text-[0.9vw] font-semibold justify-center items-center text-zinc-700">
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

            <button className="md:block hidden px-[2vw] py-[0.5vw] text-[1vw] font-semibold bg-blue-500 hover:bg-blue-600 duration-300   rounded-full text-tertiary-50">
              <Link to="/contact">Contact </Link>
            </button>

            <div
              className={`md:hidden block`}
              onClick={() => setActive(!active)}
            >
              <Icon icon="mingcute:menu-line" style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sliding Menu */}
      <div
        className={`${
          active ? "translate-y-14" : "-translate-y-full"
        } bg-white fixed  z-[200] w-[18em] rounded-2xl left-1/2 -translate-x-1/2 ease-in-out duration-300`}
      >
        <div className="flex flex-col items-center justify-center gap-6 my-8">
        {navItems.map(({ href, label }) => (
                <Link key={href} to={href}>
                  <span
                    className={`transition-all hover:text-green-500 text-xl font-semibold duration-300 ${
                      isActive(href) ? "text-green-500" : "text-tertiary-700 "
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
               <button className=" px-6 py-2 font-semibold bg-blue-500 hover:bg-blue-600 duration-300   rounded-full text-tertiary-50">
              <Link to="/contact">Contact </Link>
            </button>
        </div>
        <img src="./public/cancelbtn.svg" alt="cancel-btn" className="absolute right-2 top-2 cursor-pointer w-6" onClick={closeDropdown} />

      </div>
      {active && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-[150]"
          onClick={closeDropdown}
        ></div>
      )}
    </main>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/jobs", label: "Jobs" },
];
