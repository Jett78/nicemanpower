import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Jobs from "./pages/Jobs";
import JobDetail from "./components/website/jobspage/JobDetail";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogDetail from "./components/website/blogpage/BlogDetail";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import Lenis from "lenis";
import SIgnUp from "./components/ui/SIgnUp";
import Dashboard from "./components/website/dashboard/Dashboard";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const location = useLocation();
  
  // List of routes where you don't want to show the Navbar and Footer
  const noLayoutRoutes = ['/signup','/dashboard'];

  // Check if the current route is in the noLayoutRoutes array
  const showLayout = !noLayoutRoutes.includes(location.pathname);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.1,
      },
    });
  }, [mousePosition, controls]);

  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );
  console.log(dimension);

  // lenis scroll
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main>
      <div className="relative  bg-[#FFFFFF] text-tertiary-800 ">
        {/* Gradient Ellipse */}
        {/* <div className="fixed inset-0 flex justify-center items-center">
          <div className="w-[90vw] lg:w-[50vw] h-[90vh] lg:h-[40vw] bg-gradient-to-r from-[#061a26] via-[#0d2b3a] to-[#0f3447] rounded-full opacity-50 transform scale-150 blur-3xl"></div>
        </div> */}
        <motion.div
          className="custom-cursor mix-blend-difference hidden pointer-events-none lg:block fixed top-0 left-0 w-[0.6vw] h-[0.6vw] rounded-full bg-white"
          animate={controls}
        />

        {/* Navbar */}
        <div className="z-[50] relative">
        {showLayout && <Navbar />}

        </div>

        {/* ScrollToTop Component */}
        <ScrollToTop />

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SIgnUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:index" element={<JobDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        {/* Footer */}
        {showLayout && <Footer />}
      </div>
    </main>
  );
}

export default App;
