import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {};

export default function LicenseCertificates({}: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        prevIndex! > 0 ? prevIndex! - 1 : documentsData.length - 1
      );
    }
  };

  const showNextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex! < documentsData.length - 1 ? prevIndex! + 1 : 0
      );
    }
  };
  return (
    <div className="w-full py-[2rem]">
      <h1 className="text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        License & Certificates
      </h1>
      <p className="text-[1.2vw] lg:text-center text-zinc-700 lg:w-8/12 mx-auto">
        Verify our credentials and industry certifications ensuring quality and
        compliance.
      </p>
      <div className="grid  w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        {documentsData.map((member, index) => (
          <div
            onClick={() => openModal(index)}
            key={index}
            className="flex cursor-pointer rounded-xl h-fit w-full  border p-2 border-secondary-500  relative"
          >
            {/* <img
             
              src="/frame.png"
              alt="certificate-contour-frame"
              className="w-full h-full object-fit z-10 object-center absolute top-0 left-0"
            ></img> */}
            <img
              src={member.imageSrc}
              alt=""
              className="w-full h-full object-cover object-center"
            ></img>
          </div>
        ))}
      </div>
      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isModalOpen && currentImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 pt-[4rem] flex items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative w-11/12 h-auto max-w-3xl">
              {/* <div className="absolute w-full flex justify-center items-center bottom-5 left-1/2 -translate-x-1/2">
                <span className="text-[3.5vw] md:text-[2vw] lg:text-[1vw] italic font-semibold text-zinc-100">
                  {documentsData[currentImageIndex].name}
                </span>
              </div> */}
              <motion.img
                src={documentsData[currentImageIndex].imageSrc}
                alt={documentsData[currentImageIndex].name}
                className="w-[30vw] mx-auto rounded-lg"
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

const documentsData = [
  {
    name: "Our Team",
    imageSrc: "/public/license-certificates/certificate1.png",
  },
  {
    name: "Managing Director",
    imageSrc: "/public/license-certificates/certificate2.png",
  },
  {
    name: "Board of Directors",
    imageSrc: "/public/license-certificates/certificate3.png",
  },
  {
    name: "Women Empowerment",
    imageSrc: "/public/license-certificates/certificate4.png",
  },
];
