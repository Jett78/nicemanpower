import { Icon } from "@iconify/react";


export default function OurTeam() {
  return (
    <div className="w-full py-[2rem]">
      <h1 className="text-[8vw]  lg:text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Our Leaders
      </h1>
      <p className="my-[2vw]  text-[3.5vw] sm:text-[2vw] lg:text-[1.2vw] lg:text-center  text-zinc-700 w-full lg:w-[55%] mx-auto">
        Meet our versatile leaders who have established our name in the modern
        competitive world.
      </p>
      <div className="grid md:grid-cols-2  lg:grid-cols-2 mt-5 lg:mt-10 gap-x-3 lg:gap-x-5 gap-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="grid sm:grid-cols-5 place-items-center p-2 gap-4 text-zinc-800   cursor-pointer hover:border-tertiary-700 duration-300 w-full  border-2 border-tertiary-700 flex-col  lg:p-8 rounded-xl"
          >
            {/* Team member image */}
            <img
              src={member.imageSrc}
              alt={`${member.name}-img`}
              className="col-span-2 rounded-full border-white border-2 pt-2  -mt-2 object-cover object-center"
            />
            <section className="col-span-3">
              {/* Name */}
              <h3 className="font-semibold mt-4 text-[4vw] md:text-[3vw] lg:text-[1.2vw] pointer-events-none">
                {member.name}
              </h3>

              {/* Position */}
              <h4 className="text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium">
                {member.position}
              </h4>
              <p className="py-4">{member.desc}</p>

              {/* Socials */}
              <div className="flex justify-between  cursor-pointer items-center text-lg lg:text-sm text-blue-500 gap-1">
                <div className="cursor-pointer flex flex-col lg:flex-row justify-between items-center gap-5 w-auto group">
                  <div className="lg:flex hidden text-[3.5vw] lg:text-[1vw] gap-1">
                    Socials
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
            </section>
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
    desc:"It is our mission to support our clients through their current and future business challenges.",
    socials: "icon", // You can replace this with actual social media icons
  },
  {
    name: "Bandana Koirala",
    position: "Managing Director",
    imageSrc: "/public/team/frame2.png",
    desc:"Nice Recruiting Agency Pvt. Ltd. shall be the undisputed leader in the country’s recruitment and placement industry.",
    socials: "icon", // Replace with actual icons
  },
  // {
  //   name: "Ranjita Tamang",
  //   position: "Admin Manager",
  //   imageSrc: "/public/team/frame3.png",
  //   socials: "icon", // Replace with actual icons
  // },
  // {
  //   name: "Sushmita Rijal",
  //   position: "Marketting Manager",
  //   imageSrc: "/public/team/frame4.png",
  //   socials: "icon", // Replace with actual icons
  // },
  // Add more team members as needed
];
