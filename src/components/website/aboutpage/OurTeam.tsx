import { Icon } from "@iconify/react";

type Props = {};

export default function OurTeam({}: Props) {
  return (
    <div className="w-full py-[2rem]">
      <h1 className="text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Our Team
      </h1>
      <p className="text-[1.2vw] text-zinc-700 w-11/12 lg:w-8/12 mx-auto">
        We are what we are today is only because of our dedicated team. Let us
        introduce you our team who makes it possible for you to get the skilled
        manpower you need.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-x-5 gap-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex text-zinc-800   cursor-pointer hover:border-tertiary-700 duration-300 w-full  border-2 border-tertiary-700 flex-col p-10 rounded-xl gap-1"
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
