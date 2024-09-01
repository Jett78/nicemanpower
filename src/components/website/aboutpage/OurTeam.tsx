import { Icon } from "@iconify/react";

type Props = {};

export default function OurTeam({}: Props) {
  return (
    <div className="w-full py-[2rem]">
      <h1 className="hero text-[8vw] lg:text-[3vw]  lg:text-center font-semibold ">
        Our <span className="text-secondary-400">Team</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-x-5 gap-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex cursor-pointer hover:border-tertiary-700 duration-300 w-full bg-[#061a26] border border-tertiary-700/50 flex-col p-5 rounded-lg gap-1"
          >
            {/* Team member image */}
            <img
              src={member.imageSrc}
              alt={`${member.name}-img`}
              className="rounded-full border-white border-2 w-[8rem] h-[8rem] object-cover object-center"
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
            <div className="flex items-center text-lg lg:text-sm text-[#3aaaaa] cursor-pointer gap-1">
              Socials{" "}
              <Icon
                icon="solar:arrow-up-line-duotone"
                className="w-5 h-5 rotate-45"
              />
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
    imageSrc: "/public/team/ceo.png",
    socials: "icon", // You can replace this with actual social media icons
  },
  {
    name: "Jane Doe",
    position: "CTO",
    imageSrc: "/public/team/ceo.png",
    socials: "icon", // Replace with actual icons
  },
  {
    name: "John Smith",
    position: "CFO",
    imageSrc: "/public/team/ceo.png",
    socials: "icon", // Replace with actual icons
  },
  {
    name: "Emily Johnson",
    position: "COO",
    imageSrc: "/public/team/ceo.png",
    socials: "icon", // Replace with actual icons
  },
  // Add more team members as needed
];
