import React from "react";

const Blogs = () => {
  return (
    <main>
      <h2 className="text-[1.5vw] font-semibold text-blue-500">Add Blogs</h2>
      <form className="mt-10">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-4 outline-none   rounded-md"
        />
        <div className="flex gap-4 my-4">
          <input
            type="text"
            placeholder="Author Name"
            className="w-full p-4 outline-none   rounded-md"
          />
          <br />
          <input
            type="text"
            placeholder="Date"
            className="w-full p-4  outline-none  rounded-md"
          />
          <br />
        </div>

        <textarea
          name="requirement"
          rows={12}
          placeholder="Description"
          className="w-full p-4 outline-none   rounded-md"
        />

        <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-md my-4">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Blogs;
