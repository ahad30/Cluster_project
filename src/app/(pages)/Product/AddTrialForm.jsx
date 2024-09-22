"use client";
import React, { useEffect } from "react";
import ZFormTwo from "@/components/Form/ZFormTwo";
import ZInputTwo from "@/components/Form/ZInputTwo";
import { useAppDispatch } from "@/redux/Hook/Hook";
import { setIsAddModalOpen } from "@/redux/Modal/ModalSlice";
import { useAddTrialMutation } from "@/redux/Feature/Admin/trial/trialApi";
import ZEmail from "@/components/Form/ZEmail";

const AddTrialForm = ({ selectedTrial }) => {

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
    console.log(data);
    createTrial({ ...data, productName: selectedTrial?.productName });
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
        buttonName="submit"
      >
        <div className="grid grid-cols-1 gap-3 mt-10">

          {/* Email */}
          <ZEmail label={"Email"} name={"email"} />
          {/* title */}

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
            label="Mobile"
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
