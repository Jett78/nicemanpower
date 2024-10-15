import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface SidebarProps {
  onComponentSelect: (component: string) => void;
  selectedComponent: string;
}
const Sidebar: React.FC<SidebarProps> = ({
  onComponentSelect,
  selectedComponent,
}) => {
  return (
    <main className="pt-[2vw]">
      <img
        className="w-[12vw] mx-auto"
        src="/public/logo/nice-logo.png"
        alt=""
      />

      <div className="my-[3vw]">
        <img className="w-[7vw] mx-auto" src="/public/team/frame1.png" alt="" />
        <div className="text-center my-2">
          <h2 className="font-bold text-[1vw]">Nirmal GC</h2>
          <p className="text-gray-500 text-[0.8vw]">CEO</p>
        </div>
      </div>
      <div className="space-y-[2vw] ml-[1.5vw]">
        {sidebarinfo.map((item, index) => (
          <div key={index} className="flex items-center gap-[0.5vw]">
            <p className="text-[1.5vw]">{item.icon}</p>
            <button
              onClick={() => onComponentSelect(item.title)} // Pass the component name
            >
              <h3 className={` ${selectedComponent === item.title?"text-blue-500 font-semibold":"text-black"}text-[1vw] font-medium`}> {item.title}</h3>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

const sidebarinfo = [
  {
    title: "Overview",
    icon: <Icon icon="mdi:eye-outline" style={{ color: "black" }} />,
  },
  {
    title: "Jobs",
    icon: <Icon icon="hugeicons:job-share" style={{ color: "black" }} />,
  },
  {
    title: "Employees",
    icon: <Icon icon="f7:person-2-fill" style={{ color: "black" }} />,
  },
  {
    title: "Blogs",
    icon: <Icon icon="f7:book" style={{ color: "black" }} />,
  },
  {
    title: "Services",
    icon: <Icon icon="grommet-icons:services" style={{ color: "black" }} />,
  },
  {
    title: "Enquiry",
    icon: <Icon icon="fluent:call-24-filled" style={{ color: "black" }} />,
  },
];

export default Sidebar;
