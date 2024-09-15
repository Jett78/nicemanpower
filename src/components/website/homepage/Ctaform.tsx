
const Ctaform = ({ closeDropdown }: { closeDropdown: () => void }) => {
  return (
    <main className="bg-white rounded-2xl  p-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  w-[50vw] h-[40vw] mx-auto">
        <img src="./public/cancelbtn.svg" alt="cancel-btn" className="absolute right-6 top-6 cursor-pointer w-8" onClick={closeDropdown} />
      <div>
        <p className="italic text-[0.9vw] text-center w-[90%] mx-auto">
          We specialize in providing skilled professionals across industries
          like construction, oil and gas, hospitality, and more, we’re here to
          help you find the right talent.
        </p>
        <h3 className="font-medium text-[1.2vw] text-center py-4 ">
          Contact us today to access top talent for your business needs.
        </h3>
        <div className="w-[25em] bg-[#2088CA] mx-auto h-[1.2px]"> </div>
      </div>
      <form action="" className="col-span-3 h-[28vw] py-5 mt-5 grid grid-cols-2 gap-5 gap-x-14">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="firstName"
            className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
          >
            First Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Your First Name"
            name="firstName"
            className="p-2 py-2 lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="lastName"
            className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
          >
            Last Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Your Last Name"
            name="lastName"
            className="p-2 py-2 text-sm lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
          >
            Email <span className="text-blue-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="p-2 py-2 text-sm  lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
          >
            Phone <span className="text-blue-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            className="p-2 py-2 text-sm lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2 h-auto" data-lenis-pevent>
          <label
            htmlFor="message"
            className="font-medium text-[3.5vw] md:text-[2.5vw] text-tertiary-600 lg:text-[0.9vw]"
          >
            Message <span className="text-blue-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            className="p-2 py-2 text-sm  overflow-auto resize-none lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex justify-start">
          <button className="px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] text-[3.5vw] lg:text-[1vw] font-semibold bg-orange-500 hover:bg-orange-600 duration-300 rounded-full text-zinc-50  border-zinc-600 ">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Ctaform;
