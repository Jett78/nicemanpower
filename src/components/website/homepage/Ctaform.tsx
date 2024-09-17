
const Ctaform = ({ closeDropdown }: { closeDropdown: () => void }) => {
  return (
    <main className="bg-white sm:rounded-2xl  p-10 absolute left-1/2 -translate-x-1/2 lg:top-1/2 top-14 -translate-y-1/2  lg:w-[50em]  mx-auto">
        <img src="./public/cancelbtn.svg" alt="cancel-btn" className="absolute right-6 top-6 cursor-pointer w-8" onClick={closeDropdown} />
      <div>
        <p className="italic lg:text-[0.8vw] xl:text-sm text-xs md:block hidden text-center w-[90%] mx-auto">
          We specialize in providing skilled professionals across industries
          like construction, oil and gas, hospitality, and more, we’re here to
          help you find the right talent.
        </p>
        <h3 className="font-medium lg:text-[1.2vw] xl:text-xl text-xs text-center py-4 ">
          Contact us today to access top talent for your business needs.
        </h3>

        <div className="sm:w-[25em] bg-[#2088CA] mx-auto h-[1.2px]"> </div>
      </div>

      
      <form action="" className="col-span-3  py-5 md:mt-5  gap-x-14">
           <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">

           <div className="flex flex-col md:gap-2 sm:w-full w-60 mx-auto">
          <label
            htmlFor="firstName"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
          >
            First Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Your First Name"
            name="firstName"
            className="p-2 lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col md:gap-2 sm:w-full w-60 mx-auto">
          <label
            htmlFor="lastName"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600"
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

        <div className="flex flex-col md:gap-2  sm:w-full w-60 mx-auto">
          <label
            htmlFor="email"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600"
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

        <div className="flex flex-col md:gap-2  sm:w-full w-60 mx-auto">
          <label
            htmlFor="phone"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600"
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
           </div>

        <div className="col-span-2 mt-2 flex flex-col md:gap-2 sm:w-full w-60 mx-auto h-auto" data-lenis-pevent>
          <label
            htmlFor="message"
            className="font-medium  text-tertiary-600 text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw]"
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

        <div className="flex justify-start mt-4">
          <button className="md:px-[2vw] md:py-[1vw] px-3 py-2 text-[3vw] lg:text-lg text-xs font-semibold bg-[#2088ca] hover:bg-[#2563eb] duration-300 rounded-full text-zinc-50  border-zinc-600 ">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Ctaform;
