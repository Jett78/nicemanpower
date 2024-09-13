import { Icon } from "@iconify/react";

type Props = {};

export default function OurTeam({}: Props) {
  return (
    <div className="w-full py-[2rem]">
      <h1 className="text-[8vw]  lg:text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Our Leaders
      </h1>
      <p className="text-[3.5vw] lg:text-[1.2vw] text-center  text-zinc-700 w-full lg:w-[55%] mx-auto">
      Meet our versatile leaders who have established our name in the modern competetive world
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-5 lg:mt-10 gap-x-3 lg:gap-x-5 gap-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex text-zinc-800   cursor-pointer hover:border-tertiary-700 duration-300 w-full  border-2 border-tertiary-700 flex-col p-2 lg:p-10 rounded-xl gap-1"
          >
            {/* Team member image */}
            <img
              src={member.imageSrc}
              alt={`${member.name}-img`}
              className="rounded-full border-white border-2 w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] object-cover object-center"
            />

            {/* Name */}
            <h3 className="font-semibold mt-4 text-[4vw] md:text-[3vw] lg:text-[1.2vw] pointer-events-none">
              {member.name}
            </h3>

            {/* Position */}
            <h4 className="text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium">
              {member.position}
            </h4>

            {/* Socials */}
            <div className="flex justify-between  cursor-pointer items-center text-lg lg:text-sm text-blue-500 gap-1">
              <div className="cursor-pointer flex flex-col lg:flex-row justify-between items-center gap-5 w-auto group">
                <div className="flex text-[3.5vw] lg:text-[1vw] gap-1">
                  Socials{" "}
                  <Icon
                    icon="solar:arrow-up-line-duotone"
                    className="w-5 h-5 rotate-45 group-hover:rotate-[90deg]  duration-300"
                  />
                </div>
                <div className="flex lg:opacity-0 group-hover:opacity-100 gap-2 items-center text-zinc-700  duration-300">
                  <Icon
                    icon="ic:baseline-facebook"
                    className="w-5 h-5 lg:w-6 lg:h-6 hover:scale-95 duration-300 hover:text-zinc-900"
                  />
                  <Icon
                    icon="ri:instagram-fill"
                    className="w-5 h-5 lg:w-6 lg:h-6 hover:scale-95 duration-300 hover:text-zinc-900"
                  />
                  <Icon
                    icon="ri:twitter-fill"
                    className="w-5 h-5 lg:w-6 lg:h-6 hover:scale-95 duration-300 hover:text-zinc-900"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Nirmal GC",
    position: "Ceo",
    imageSrc: "/public/team/frame1.png",
    socials: "icon", // You can replace this with actual social media icons
  },
  {
    name: "Bandana Koirala",
    position: "Managing Director",
    imageSrc: "/public/team/frame2.png",
    socials: "icon", // Replace with actual icons
  },
  {
    name: "Ranjita Tamang",
    position: "Admin Manager",
    imageSrc: "/public/team/ceo.png",
    socials: "icon", // Replace with actual icons
  },
  {
    name: "Sushmita Rijal",
    position: "Marketting Manager",
    imageSrc: "/public/team/ceo.png",
    socials: "icon", // Replace with actual icons
  },
  // Add more team members as needed
];
