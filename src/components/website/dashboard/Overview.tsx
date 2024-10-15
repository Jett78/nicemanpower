import React from "react";

const Overview = () => {
  return (
    <main>
      <h2 className="text-[1.5vw] font-semibold text-blue-500">Overview</h2>

      <div className="grid-cols-4 grid gap-4 mt-10">
        {overviewdata.map((item, index) => (
          <div
            key={index}
            className={`p-4 flex items-center justify-center gap-8 py-8 rounded-md text-white`}
            style={{ backgroundColor: item.color }} // Use inline style for dynamic color
          >
            <h2 className="text-[1.2vw] font-semibold">{item.title}</h2>
            <h2 className="text-[3.5vw] font-bold">{item.num}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

const overviewdata = [
  {
    title: "Jobs",
    num: "18",
    color: "#eb3b3b",
  },
  {
    title: "Employees",
    num: "14",
    color: "#db7425",
  },
  {
    title: "Clients",
    num: "32",
    color: "#2d5eff",
  },
  {
    title: "Enquiries",
    num: "52",
    color: "#15d796",
  },
];

export default Overview;
