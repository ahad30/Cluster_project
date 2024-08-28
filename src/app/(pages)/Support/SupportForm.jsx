"use client";
import React, { useState } from "react";
import Icon1 from "../../../../public/Support/facebook.svg";
import Icon2 from "../../../../public/Support/linkedin.svg";
import Icon3 from "../../../../public/Support/youtube.svg";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
const SupportForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    message: "",
    file: null,
    template:"two"
  });

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
    console.log(setFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
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
        firstName: "",
        lastName: "",
        telephone: "",
        message: "",
        file: null,
      });
    } catch (err) {
      console.error(err);
      toast.error("Error, please try resubmitting the form"); 
    }
  };

  return (
    <div className="max-w-[90%] lg:max-w-7xl lg:px-10 mx-auto mb-16">
        <Toaster position="top-center" reverseOrder={false} />
      <div>
        <h2 className="lg:text-2xl text-center lg:text-start font-semibold mb-2">
          We are in Social networks
        </h2>
        <div className="flex justify-center lg:justify-start items-center space-x-4 mt-8">
          <div className="bg-green-500 p-2 rounded">
            <Image src={Icon1} alt="Facebook" className="w-5 h-5" />
          </div>
          <div className="bg-green-500 p-2 rounded">
            <Image src={Icon2} alt="LinkedIn" className=" w-5 h-5" />
          </div>
          <div className="bg-green-500 p-2 rounded">
            <Image src={Icon3} alt="YouTube" className="w-5 h-5" />
          </div>
        </div>
        <p className="mt-4 mb-3 text-center lg:text-start">
          Everything we do is for our user
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
                <textarea
                  id="message"
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
                <div className="lg:border lg:border-gray-600 lg:border-r-0 flex items-center mt-3">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                    className="ms-1"
                  />
                  {/* <button
                    className="bg-green-500 text-white px-4 py-2 hover:bg-blue-600 text-[8px] lg:text-sm lg:h-[45px] hidden lg:block -ml-7"
                  >
                    Upload
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-5 px-5">
              <input
                type="submit"
                className="bg-primary disabled:cursor-not-allowed disabled:bg-blue-200 text-white py-1 cursor-pointer w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
