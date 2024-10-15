import React from "react";

const Jobs = () => {
  return (
    <main>
      <h2 className="text-[1.5vw] font-semibold text-blue-500">Add Jobs</h2>
      <form  className="mt-10">
        <input
          type="text"
          placeholder="Job Title"
          className="w-full p-4  outline-none  rounded-md"
        />
        <br />
        <div className="flex gap-4 my-4">
          <input
            type="text"
            placeholder="Position Type"
            className="w-full p-4 outline-none   rounded-md"
          />
          <br />
          <input
            type="text"
            placeholder="Department"
            className="w-full p-4  outline-none  rounded-md"
          />
          <br />
        </div>

        <div className="flex gap-4 my-4">
          <input
            type="text"
            placeholder="No. of Positions"
            className="w-full p-4 outline-none   rounded-md"
          />
          <br />
          <input
            type="text"
            placeholder="Interview Date"
            className="w-full p-4  outline-none  rounded-md"
          />
          <br />
        </div>

        <div className="flex gap-4 my-4">
          <input
            type="text"
            placeholder="Location"
            className="w-full p-4 outline-none   rounded-md"
          />
          <br />
          <input
            type="text"
            placeholder="Qualifications"
            className="w-full p-4  outline-none  rounded-md"
          />
          <br />
        </div>

        <div className="flex gap-4 my-4">
          <input
            type="text"
            placeholder="Salary"
            className="w-full p-4 outline-none   rounded-md"
          />
          <br />
          <input
            type="text"
            placeholder="Accomodations & Foods"
            className="w-full p-4 text-sm outline-none  rounded-md"
          />
          <br />
        </div>
        <textarea
          name="requirement"
          rows={6}
          placeholder="Job Description"
          className="w-full p-4 outline-none   rounded-md"
        />

        <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-md my-4">Submit</button>
      </form>
    </main>
  );
};

export default Jobs;
