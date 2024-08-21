import React from 'react'

const QuickStartForm = () => {
  return (
    <div className='w-[90%] lg:max-w-[70%] lg:px-10 mx-auto mt-14 border-2  border-primary py-5'>
      <h2 className="lg:text-3xl font-semibold mb-10 text-center">Quick Start</h2>

        <form>
       <div className="">
                <div className="py-8 px-5 text-base  gap-8 text-gray-700 sm:text-lg  grid grid-cols-1 sm:grid-cols-2">

                  <div className="relative">
                    <label htmlFor="">Primary Email *</label>
                    <input
                      // {...register("email")}
                    //   defaultValue={"admin@gmail.com"}
                    
                      id="email"
                      name="email"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary focus:borer-rose-600"
              
                    />
                  </div>

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
                  <label htmlFor="">Company *</label>
                    <input
                      // {...register("password")}
                    //   defaultValue={"password"}
                      id="company"
                      name="company"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                    focus:outline-none focus:border-b-primary"
                                        />
                  </div>
                  <div className="relative">
                  <label htmlFor="">Address *</label>
                    <input
                      // {...register("password")}
                    //   defaultValue={"password"}
                      id="address"
                      name="address"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                    focus:outline-none focus:border-b-primary"
                                        />
                  </div>
                </div>
                  <div className="flex justify-center mb-5">
                    <input
                      type="submit"
                      className="bg-primary disabled:cursor-not-allowed disabled:bg-blue-200 text-white  px-7  py-1 cursor-pointer"
                    />
                  </div>
              </div>
        </form>
    </div>
  )
}

export default QuickStartForm
