"use client";
import React, { useEffect } from "react";
import ZFormTwo from "@/components/Form/ZFormTwo";
import ZInputTwo from "@/components/Form/ZInputTwo";
import ZEmail from "@/components/Form/ZEmail";


const Setting = () => {

//   const { data: productUnitData, isLoading: PIsLoading, isError: PIsError } = useGetProductUnitByIdQuery();

  
//   const [updateProductUnit, { isLoading: UIsLoading, isError: UIsError, error: UError, isSuccess: UIsSuccess, data }] = useUpdateProductUnitMutation();

//   const handleSubmit = (data) => {
//     updateProductUnit( data );
//   };


  return (


    <>
    <div className="bg-white p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">
            <div className="flex flex-col justify-center items-center">
          <div className="relative w-56 h-[150px] left-5 lg:mt-[-70px]">
            <img
              className="h-[180px] w-[180px] rounded-full  absolute object-cover"
              src={`https://ui-avatars.com/api/?name=${'A'}`}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-center bg-[#bdcef4] px-6 rounded-t-[30px] w-[300px] h-[190px] gap-y-2">
            <h1 className="text-[#042656] mt-3 text-[16px] font-sans font-semibold">
              {/* {profileData?.data?.name} */}Cluster Admin
            </h1>

            <span className="text-[#555555] mt-1 text-[13px] font-normal font-mono">
              {/* Email : {profileData?.data?.email} */}Email: admin@cluster.com
            </span>
          </div>
        </div>
    <div className="">
                <ZFormTwo
                // isLoading={lIsloading}
                // error={error}
                // isError={lIsError}
                // isSuccess={lIsSuccess}
                // submit={handleSubmit}
                // data={loginData}
                buttonName={'Submit'}
              >
                <div>
                  
                  <h1 className="text-2xl mt-2 text-center">Update Profile</h1>
                </div>
                
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative mb-8">
                    <ZEmail label={"Email"} name={"email"} />
                  </div>
                  <div className="relative">
                    <ZInputTwo
                      required={1}
                      name="old-password"
                      type="password"
                      label="Old password"
                      defaultKey={""}
                      placeholder={"Enter your old password"}
                    />
                  </div>
                  <div className="relative">
                    <ZInputTwo
                      required={1}
                      name="new-password"
                      type="password"
                      label="New password"
                      defaultKey={""}
                      placeholder={"Enter your new password"}
                    />
                  </div>
                </div>
              </ZFormTwo>
    </div>
    </div>
    </>
  );
};

export default Setting;
