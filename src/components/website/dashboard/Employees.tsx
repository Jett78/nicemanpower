import React from "react";

const Employees = () => {
  return (
      <main>
        <h2 className="text-[1.5vw] font-semibold text-blue-500">
          Add Employees
        </h2>
        <form className="mt-10">
          <div className="flex gap-4 my-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 outline-none   rounded-md"
            />
            <br />
            <input
              type="text"
              placeholder="Contact no."
              className="w-full p-4  outline-none  rounded-md"
            />
            <br />
          </div>

          <div className="flex gap-4 my-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full p-4 outline-none   rounded-md"
            />
            <br />
            <input
              type="text"
              placeholder="Joining Date"
              className="w-full p-4  outline-none  rounded-md"
            />
            <br />
          </div>

          <div className="flex gap-4 my-4">
            <input
              type="text"
              placeholder="Designation"
              className="w-full p-4 outline-none   rounded-md"
            />
            <br />
            <input
              type="text"
              placeholder="Gender"
              className="w-full p-4  outline-none  rounded-md"
            />
            <br />
          </div>

          <div className="flex gap-4 my-4">
            <input
              type="text"
              placeholder="Telephone"
              className="w-full p-4 outline-none   rounded-md"
            />
            <br />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-4 text-sm outline-none  rounded-md"
            />
            <br />
          </div>
        

          <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-md my-4">
            Submit
          </button>
        </form>
      </main>
  );
};

export default Employees;
