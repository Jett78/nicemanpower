type Props = {};

export default function LicenseCertificates({}: Props) {
  return (
    <div className="w-full py-[2rem]">
      <h1 className="hero text-[8vw] lg:text-[3vw]  lg:text-center font-semibold ">
        License & Certificates
      </h1>
      <div className="grid lg:w-7/12 w-full mx-auto grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex rounded-xl  border p-2 border-secondary-500  relative">
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
