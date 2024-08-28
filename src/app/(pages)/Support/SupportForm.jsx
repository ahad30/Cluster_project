"use client";
import React, { useRef, useState } from "react";
import Icon1 from "../../../../public/Support/facebook.svg";
import Icon2 from "../../../../public/Support/linkedin.svg";
import Icon3 from "../../../../public/Support/youtube.svg";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
    file: "null",
    template: "two"
  });
  const [loading, setLoading] = useState(false); // Added loading state
  const fileInputRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    const formBody = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formBody.append(key, value);
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: formBody,
      });

      if (!response.ok) {
        const errorData = await response.text(); // Retrieve the error response body
        throw new Error(`Response status: ${response.status} - ${errorData}`);
      }

      const responseData = await response.json();
      toast.success("Message successfully sent");
      
      setLoading(false); // Set loading to false after submission is complete
      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        message: "",
        file: null,
        template: "two", // Reset to the default template
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } 
    catch (err) {
      console.error("Error:", err);
      toast.error("Error, please try resubmitting the form");
    }
  };

  return (
    <div className="max-w-[90%] lg:max-w-7xl lg:px-10 mx-auto mb-16">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <h2 className="lg:text-2xl text-center lg:text-start font-semibold mb-2">
          We are on Social networks
        </h2>
        <div className="flex justify-center lg:justify-start items-center space-x-4 mt-8">
          <div className="bg-green-500 p-2 rounded">
            <Image src={Icon1} alt="Facebook" className="w-5 h-5" />
          </div>
          <div className="bg-green-500 p-2 rounded">
            <Image src={Icon2} alt="LinkedIn" className="w-5 h-5" />
          </div>
          <div className="bg-green-500 p-2 rounded">
            <Image src={Icon3} alt="YouTube" className="w-5 h-5" />
          </div>
        </div>
        <p className="mt-4 mb-3 text-center lg:text-start">
          Everything we do is for our users
        </p>
      </div>
      <div className="lg:flex lg:justify-end lg:-mt-[540px]">
        <form
          className="lg:max-w-[45%] border-2 lg:border-8 border-primary lg:px-5 py-5 bg-white"
          onSubmit={handleSubmit}
        >
          <div>
            <h2 className="lg:text-3xl text-center lg:text-start font-semibold mb-2">
              Feedback
            </h2>
            <div className="py-8 px-5 text-base gap-8 text-gray-700 sm:text-lg grid grid-cols-1 sm:grid-cols-1">
              <div className="relative">
                <label htmlFor="firstName">First name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
                />
              </div>

              <div className="relative">
                <label htmlFor="lastName">Last name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
                />
              </div>
              <div className="relative">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              required
              type="text"
              value={formData.email}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>
              <div className="relative">
                <label htmlFor="telephone">Telephone *</label>
                <input
                  id="telephone"
                  name="telephone"
                  type="number"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer h-24 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-primary p-2"
                  placeholder="Message *"
                ></textarea>
              </div>

              <div className="relative">
                <label htmlFor="file">
                  Add file and press &apos;Upload&apos;
                </label>
                <div className=" flex items-center mt-3">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="ms-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-5 px-5">
              <button
                type="submit"
                className="bg-primary disabled:cursor-not-allowed disabled:bg-blue-200 text-white py-1 cursor-pointer w-full flex items-center justify-center"
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-2 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0116 0h-2a6 6 0 10-12 0H4z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
