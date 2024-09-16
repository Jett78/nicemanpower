import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

export default function Gallery({}: Props) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (hoveredIndex !== index) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const showPrevImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex! > 0 ? prevIndex! - 1 : teamMembers.length - 1
      );
    }
  };

  const showNextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex! < teamMembers.length - 1 ? prevIndex! + 1 : 0
      );
    }
  };

  return (
    <div className="w-full py-[2rem]">
      <h1 className="text-[8vw]  lg:text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Gallery
      </h1>
      <p className="my-[2vw]  text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] text-zinc-700 text-start lg:text-center lg:w-8/12 mx-auto">Cherish the moments with us with the collection of our memories.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 gap-5">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex h-[35vh] group relative cursor-pointer overflow-hidden duration-300 w-full bg-tertiary-800 rounded-lg"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal(index)}
          >
            {/* Cursor follow animation */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute hidden z-20 w-[4vw] h-[4vw] lg:flex justify-center items-center rounded-full border border-secondary-500 backdrop-blur-md"
                style={{
                  top: cursorPosition.y,
                  left: cursorPosition.x,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[13px] text-zinc-50 font-medium relative">
                  Click me
                </span>
              </motion.div>
            )}

            {/* Text overlay */}
            <div className="absolute hidden lg:flex opacity-0 group-hover:opacity-[1] duration-300 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 mx-auto  justify-center items-center">
              <span className="lg:text-[1.3vw] font-semibold italic text-zinc-50">
                {member.name}
              </span>
            </div>

            {/* Team member image */}
            <img
              src={member.imageSrc}
              alt={`${member.name}-img`}
              className="w-full h-full rounded-lg brightness-100 group-hover:brightness-50 scale-105 duration-300 object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isModalOpen && currentImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative w-11/12 h-auto max-w-3xl">
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <span className="text-[3.5vw] md:text-[2vw] lg:text-[1vw] italic font-semibold text-zinc-100">
                  {teamMembers[currentImageIndex].name}
                </span>
              </div>
              <motion.img
                src={teamMembers[currentImageIndex].imageSrc}
                alt={teamMembers[currentImageIndex].name}
                className="w-full h-auto rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevImage();
                }}
                className="absolute font-medium text-sm top-1/2 left-3 transform -translate-y-1/2 bg-tertiary-900 bg-opacity-[0.5] text-white p-3 rounded-full"
              >
                Prev
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
                className="absolute font-medium text-sm top-1/2 right-3 transform -translate-y-1/2 bg-tertiary-900 bg-opacity-[0.5] text-white p-3 rounded-full"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const teamMembers = [
  {
    name: "Our Team",
    imageSrc: "/public/gallery/gallery1.png",
  },
  {
    name: "Managing Director",
    imageSrc: "/public/gallery/gallery2.png",
  },
  {
    name: "Board of Directors",
    imageSrc: "/public/gallery/gallery3.png",
  },
  {
    name: "Women Empowerment",
    imageSrc: "/public/gallery/gallery4.png",
  },
  {
    name: "Account Team",
    imageSrc: "/public/gallery/gallery5.png",
  },
  {
    name: "Admin Team",
    imageSrc: "/public/gallery/gallery6.png",
  },
  // Add more team members as needed
];
