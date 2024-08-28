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
    template:"one"
  });

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
    const formBody = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formBody.append(key, value);
    }

    try {
      const response = await fetch("/api/email", {
        method: "post",
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
          
      });
    } catch (err) {
      console.error(err);
      toast.error("Error, please try resubmitting the form"); // Error toast notification
    }
  }


  return (
    <div className='w-[90%] lg:max-w-[70%] lg:px-10 mx-auto mt-14 border-2 border-primary py-5'>
      <h2 className="lg:text-3xl font-semibold mb-10 text-center">Quick Start</h2>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <div className="py-8 px-5 text-base gap-8 text-gray-700 sm:text-lg grid grid-cols-1 sm:grid-cols-2">
          <div className="relative">
            <label htmlFor="email">Primary Email *</label>
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>

          <div className="relative">
            <label htmlFor="firstName">First name *</label>
            <input
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
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"
            />
          </div>
        </div>
        
        <div className="flex justify-center mb-5">
          <input
            type="submit"
            className="bg-primary disabled:cursor-not-allowed disabled:bg-blue-200 text-white px-7 py-1 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default QuickStartForm;
