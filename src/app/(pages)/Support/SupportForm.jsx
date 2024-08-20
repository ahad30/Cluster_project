import React from "react";
import Icon1 from '../../../../public/Support/facebook.svg';
import Icon2 from '../../../../public/Support/linkedin.svg';
import Icon3 from '../../../../public/Support/youtube.svg';
import Image from "next/image";

const SupportForm = () => {
  return (
    <div className="max-w-[90%] lg:max-w-7xl lg:px-10 mx-auto mb-16">
     <div>
     <h2 className="lg:text-2xl text-center lg:text-start font-semibold mb-2 ">
         We are in Social networks
     </h2>
     <div className="flex justify-center lg:justify-start items-center space-x-4 mt-8">
      <div className="bg-green-500 p-2 rounded">
        <Image src={Icon1} alt="Facebook" className= "w-5 h-5" />
      </div>
      <div className="bg-green-500 p-2 rounded">
        <Image src={Icon2} alt="LinkedIn" className=" w-5 h-5" />
      </div>
      <div className="bg-green-500 p-2 rounded">
        <Image src={Icon3} alt="YouTube" className= "w-5 h-5" />
      </div>
    </div>
    <p className="mt-4 mb-3 text-center lg:text-start">Everything we do is for our user</p>
     </div>
      <div className="lg:flex lg:justify-end lg:-mt-[540px]">
        <form className="lg:w-[45%] border-2 lg:border-8  border-primary lg:px-5 py-5 bg-white">
          <div className="">
            <h2 className="lg:text-3xl text-center lg:text-start font-semibold mb-2 ">
              Feedback
            </h2>
            <div className="py-8 px-5 text-base  gap-8 text-gray-700 sm:text-lg  grid grid-cols-1 sm:grid-cols-1">
              <div className="relative">
                <label htmlFor="">First name *</label>
                <input
                  // {...register("password")}
                  //   defaultValue={"password"}
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                  focus:outline-none focus:border-b-primary"
   
                />
              </div>

              <div className="relative">
                <label htmlFor="">Last name *</label>
                <input
                  // {...register("password")}
                  //   defaultValue={"password"}
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                  focus:outline-none focus:border-b-primary"
         
                />
              </div>
              <div className="relative">
                <label htmlFor="">Telephone *</label>
                <input
                  // {...register("password")}
                  //   defaultValue={"password"}
                  id="telephone"
                  name="telephone"
                  type="number"
                  className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                  focus:outline-none focus:border-b-primary"
                />
              </div>

              <div className="relative">
                <textarea
                  // {...register("password")}
                  //   defaultValue={"password"}
                  id="company"
                  name="company"
                  type="text"
                  className="peer  h-24 w-full border-2 border-gray-300 text-gray-900 
                                  focus:outline-none focus:border-primary p-2"
                  placeholder="Message *"
                ></textarea>
              </div>

              <div class="relative ">
              <label htmlFor="">Add file and press "Upload"</label>
               <div className="lg:border lg:border-gray-600 lg:border-r-0 flex items-center mt-3">
               <input type="file" className="ms-1" />
                <button class="bg-green-500 text-white px-4 py-2 hover:bg-blue-600
                 text-[8px] lg:text-sm lg:h-[45px] hidden lg:block -ml-9">
                  Upload
                </button>
               </div>
              </div>

            </div>
            <div className="flex justify-center mb-5 px-5">
              <input
                type="submit"
                className="bg-primary disabled:cursor-not-allowed disabled:bg-blue-200 text-white  py-1 cursor-pointer w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
