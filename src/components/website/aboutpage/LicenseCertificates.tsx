type Props = {};

export default function LicenseCertificates({}: Props) {
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
        {teamMembers.map((member, index) => (
          <div
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
    </div>
  );
}

const teamMembers = [
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
