"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const QuickStartForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
    company: "",
    address: "",
    template: "one"
  });
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(setFormData);
  };

  async function handleSubmit(e) {
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
        throw new Error(`Response status: ${response.status}`);
      }

      const responseData = await response.json();
      toast.success("Message successfully sent"); // Success toast notification

      // Reset form fields
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        telephone: "",
        company: "",
        address: "",
        template: "one" // Ensure template is reset
      });
    } catch (err) {
      console.error(err);
      toast.error("Error, please try resubmitting the form"); // Error toast notification
    } finally {
      setLoading(false); // Set loading to false after submission is complete
    }
  }

  return (
    <div className='w-[90%] lg:max-w-[70%] lg:px-10 mx-auto mt-14 border-2 border-primary py-5 mb-8'>
      <h2 className="lg:text-3xl font-semibold mb-10 text-center">Quick Start</h2>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <div className="py-8 px-5 text-base gap-8 text-gray-700 sm:text-lg grid grid-cols-1 sm:grid-cols-2">
          <div className="relative">
            <label htmlFor="email">Primary Email *</label>
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
            <label htmlFor="firstName">First name *</label>
            <input
            required
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>

          <div className="relative">
            <label htmlFor="lastName">Last name *</label>
            <input
              id="lastName"
              required
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>

          <div className="relative">
            <label htmlFor="telephone">Telephone *</label>
            <input
              id="telephone"
              name="telephone"
              required
              type="number"
              value={formData.telephone}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>

          <div className="relative">
            <label htmlFor="company">Company *</label>
            <input
              id="company"
              required
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>

          <div className="relative">
            <label htmlFor="address">Address *</label>
            <input
              id="address"
              name="address"
              required
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>
        </div>

        <div className="flex justify-center mb-5">
          <button
            type="submit"
            className="bg-primary disabled:cursor-not-allowed disabled:bg-blue-200 text-white px-7 py-1 cursor-pointer flex items-center"
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
      </form>
    </div>
  );
};

export default QuickStartForm;
