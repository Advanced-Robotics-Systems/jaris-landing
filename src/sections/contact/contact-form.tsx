import { FormEvent } from "react";

const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:w-1/2 h-fit max-md:pt-3 md:pl-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row max-lg:gap-y-3 w-full">
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="first-name"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="last-name"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last-name"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row max-lg:gap-y-3 w-full mt-3 lg:mt-8">
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="contact-email"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="text"
              name="contact-email"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="contact-phone"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Phone
            </label>
            <input
              type="number"
              name="contact-phone"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
            />
          </div>
        </div>
        <div className="flex w-full mt-3 lg:mt-8">
          <div className="flex flex-col basis-full px-1">
            <label
              htmlFor="contact-message"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Message
            </label>
            <textarea
              name="contact-message"
              id="contact-message"
              className="border rounded-md border-jaris-blue-dark outline-none h-28 sm:h-40 w-full px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
            ></textarea>
          </div>
        </div>
        <div className="basis-full pl-1 mt-4">
          <button
            className="bg-jaris-gold hover:bg-jaris-gold-dark transition-background border-none rounded px-8 py-2 text-jaris-white text-xs sm:text-sm font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
