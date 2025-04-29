"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact_email: "",
    contact_phone: "",
    contact_message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus("Submitting...");

    const res = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Submitted Successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        contact_email: "",
        contact_phone: "",
        contact_message: "",
      });
    } else {
      setStatus("Error During Submission. Please Retry.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === "Submitted Successfully!") {
        setStatus("");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="w-full md:w-1/2 h-fit max-md:pt-3 md:pl-5">
      <form className="relative" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row max-lg:gap-y-3 w-full">
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="first_name"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
              onChange={handleChange}
              value={formData.first_name}
              required
              maxLength={50}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="last_name"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
              onChange={handleChange}
              value={formData.last_name}
              required
              maxLength={50}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row max-lg:gap-y-3 w-full mt-3 lg:mt-8">
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="contact_email"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="text"
              name="contact_email"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
              onChange={handleChange}
              value={formData.contact_email}
              required
              maxLength={234}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-1">
            <label
              htmlFor="contact_phone"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Phone
            </label>
            <input
              type="number"
              name="contact_phone"
              className="border rounded-md border-jaris-blue-dark outline-none px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
              onChange={handleChange}
              value={formData.contact_phone}
              required
              maxLength={14}
            />
          </div>
        </div>
        <div className="flex w-full mt-3 lg:mt-8">
          <div className="flex flex-col basis-full px-1">
            <label
              htmlFor="contact_message"
              className="text-[#586A86] text-xs sm:text-sm font-medium mb-1"
            >
              Message
            </label>
            <textarea
              name="contact_message"
              id="contact_message"
              className="border rounded-md border-jaris-blue-dark outline-none h-28 sm:h-40 w-full px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              placeholder="Write Here..."
              onChange={handleTextAreaChange}
              value={formData.contact_message}
              required
              maxLength={2000}
            ></textarea>
          </div>
        </div>
        <div className="basis-full pl-1 mt-4">
          <button
            className="bg-jaris-gold hover:bg-jaris-gold-dark disabled:bg-gray-500 transition-background border-none rounded px-8 py-2 text-jaris-white text-xs sm:text-sm font-bold"
            type="submit"
            disabled={status === "Submitting..."}
          >
            Submit
          </button>
        </div>
        <p
          className={`${
            status === "Submitted Successfully!"
              ? "text-green-600"
              : status === "Error During Submission. Please Retry."
              ? "text-red-600"
              : "text-jaris-blue-dark"
          } absolute left-2`}
        >
          {status}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
