"use client";
import React, { useEffect } from "react";
import ZFormTwo from "@/components/Form/ZFormTwo";
import ZInputTwo from "@/components/Form/ZInputTwo";
import { useAppDispatch } from "@/redux/Hook/Hook";
import { setIsAddModalOpen } from "@/redux/Modal/ModalSlice";
import { useAddTrialMutation } from "@/redux/Feature/Admin/trial/trialApi";
import ZEmail from "@/components/Form/ZEmail";

const AddTrialForm = ({ selectedTrial, selectedBusiness }) => {
  console.log(selectedBusiness)
  const dispatch = useAppDispatch();
  const [
    createTrial,
    {
      isLoading: TIsLoading,
      isError: TIsError,
      error: TError,
      isSuccess: TIsSuccess,
      data,
    },
  ] = useAddTrialMutation();

  
  const handleSubmit = (data) => {
    createTrial({ ...data, productName: selectedTrial?.productName || selectedBusiness?.productName  });
  };

  const handleCloseAndOpen = () => {
    dispatch(setIsAddModalOpen());
  };



  return (
    <div className="">
      <ZFormTwo
        isLoading={TIsLoading}
        isSuccess={TIsSuccess}
        isError={TIsError}
        error={TError}
        submit={handleSubmit}
        closeModal={handleCloseAndOpen}
        formType="create"
        data={data}
        buttonName="Submit"
      >
        <div className="grid grid-cols-1 gap-3 mt-10">


     {/* Name */}
     <ZInputTwo
            name="name"
            type="text"
            label="Name"
            defaultKey={""}
            placeholder="Enter your name"
            required
            reset={1}
          />


          {/* Email */}
          <ZEmail label={"Email Address"} name={"email"} />
          {/* title */}

     

          {/* Address */}
          <ZInputTwo
            name="address"
            type="text"
            label="Address"
            defaultKey={""}
            placeholder="Enter your address"
            required
            reset={1}
          />

          {/* Mobile */}
          <ZInputTwo
            name="mobile"
            type="number"
            label="Mobile Number"
            defaultKey={""}
            placeholder="Enter your mobile number"
            required
            reset={1}
          />
        </div>
      </ZFormTwo>
    </div>
  );
};

export default AddTrialForm;
