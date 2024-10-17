import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const Jobs = () => {
  const [jobData, setJobData] = useState({
    company: "",
    title: "",
    type: "",
    overtime: "",
    days: "",
    hours: "",
    interviewDate: "",
    location: "",
    salary: "",
    services: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/jobs", jobData);
      console.log("Job Added", response.data);
      toast.success("Job Added successfully!"); // Show success toast
    } catch (error) {
      console.log("Error Addinfg Data", error);
      toast.error("Error Adding job!"); // Show error toast
    }
  };

  return (
    <main>
      <h2 className="text-[1.5vw] font-semibold text-blue-500">Add Jobs</h2>
      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <div>
          <label htmlFor="" className="font-medium text-sm text-gray-500">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Desired Company Name"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            className="w-full p-3  outline-none  rounded-md"
          />
        </div>
        <section className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              className="w-full p-3  outline-none  rounded-md"
            />
          </div>

          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Job Type
            </label>{" "}
            <select
              name="type"
              value={jobData.type}
              onChange={handleChange}
              className="w-full p-3 outline-none rounded-md"
            >
              <option value="">Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>

          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Overtime
            </label>{" "}
            <select
              name="overtime"
              value={jobData.overtime}
              onChange={handleChange}
              className="w-full p-3 cursor-pointer outline-none rounded-md"
            >
              <option value="">Select Overtime</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Working Days/Week
            </label>{" "}
            <input
              type="text"
              placeholder="Days"
              name="days"
              value={jobData.days}
              onChange={handleChange}
              className="w-full p-3 outline-none   rounded-md"
            />
          </div>

          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Working Hours/Day
            </label>{" "}
            <input
              type="text"
              placeholder="Hours"
              name="hours"
              value={jobData.hours}
              onChange={handleChange}
              className="w-full p-3 outline-none   rounded-md"
            />
          </div>

          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Interview Date
            </label>
            <input
              type="date"
              placeholder="Interview Date"
              name="interviewDate"
              value={jobData.interviewDate}
              onChange={handleChange}
              className="w-full p-3 cursor-pointer  outline-none  rounded-md"
            />
          </div>

          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Location
            </label>
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              className="w-full p-3 outline-none   rounded-md"
            />
          </div>

          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Salary
            </label>
            <input
              type="text"
              placeholder="500 AED/month"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              className="w-full p-3 outline-none   rounded-md"
            />
          </div>

          <div>
            <label htmlFor="" className="font-medium text-sm text-gray-500">
              Services
            </label>
            <select
              name="services"
              value={jobData.services}
              onChange={handleChange}
              className="w-full p-3 cursor-pointer outline-none rounded-md"
            >
              <option value="">Services Provided</option>
              <option value="Health-Insurance">Health Insurance</option>
              <option value="Foods & Accomodations">
                Foods & Accodmodations
              </option>
              <option value="Travel Expenses Covered">
                Travel Expenses Covered
              </option>
            </select>
          </div>
          {/* <textarea
          name="requirement"
          rows={6}
          placeholder="Job Description"
          value={jobData.requirement}
          onChange={handleChange}
          className="w-full p-4 outline-none   rounded-md"
        /> */}
        </section>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 rounded-md text-white font-md my-4"
        >
          Submit
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </main>
  );
};

export default Jobs;
