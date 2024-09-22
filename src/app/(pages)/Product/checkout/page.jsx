/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import ZFormTwo from "@/components/Form/ZFormTwo";
import ZInputTwo from "@/components/Form/ZInputTwo";
import { useAppDispatch } from "@/redux/Hook/Hook";
import { setIsAddModalOpen } from "@/redux/Modal/ModalSlice";
import ZEmail from "@/components/Form/ZEmail";
import { useAddOrderMutation } from "@/redux/Feature/Admin/order/orderApi";

const Checkout = ({ selectedTrial }) => {

  const dispatch = useAppDispatch();
  const [
    addOrder,
    {
      isLoading: OIsLoading, 
      isError: OIsError,   
      error: OError,        
      isSuccess: OIsSuccess, 
      data,                  
    },
  ] = useAddOrderMutation(); 

  
  const handleSubmit = (data) => {
    console.log(data);
    addOrder({ ...data, productName: selectedTrial?.productName , price: selectedTrial?.price });
  };

  const handleCloseAndOpen = () => {
    dispatch(setIsAddModalOpen());
  };

  return (
  
      <ZFormTwo
        isLoading={OIsLoading}
        isSuccess={OIsSuccess}
        isError={OIsError}
        error={OError}
        submit={handleSubmit}
        formType="create"
        closeModal={handleCloseAndOpen}
        data={data}
        buttonName="Proceed to checkout"

      >
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="grid grid-cols-1 gap-3 mt-10 lg:w-[70%]">

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
    
          />

          {/* Address */}
          <ZInputTwo
            name="address"
            type="text"
            label="Address"
            defaultKey={""}
            placeholder="Enter your address"
            required
 
          />

          {/* Mobile */}
          <ZInputTwo
            name="phone"
            type="number"
            label="Mobile"
            defaultKey={""}
            placeholder="Enter your mobile number"
            required
 
          />
        </div>
        <div className="flex flex-col p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<h2 className="text-lg font-semibold">Your Order items</h2>
	<ul className="flex flex-col pt-4 space-y-2">

	
		<li className="flex  justify-between">
			<h3>{selectedTrial?.productName }
				<span className="text-sm dark:text-violet-600"> x1</span>
			</h3>
			<div className="text-right">
				<span className="text-sm dark:text-gray-600"> {selectedTrial?.price}TK/-</span>
			</div>
		</li>
	</ul>
	<div className="pt-4 space-y-2">
		<div>
			<div className="flex justify-between">
				<span>Subtotal</span>
				<span>{selectedTrial?.price}</span>
			</div>
		</div>

	</div>
	<div className="pt-4 space-y-2">
		<div className="space-y-6">
			<div className="flex justify-between">
				<span>Total</span>
				<span className="font-semibold">{selectedTrial?.price}</span>
			</div>

		</div>
	</div>
       </div>
       </div>
      </ZFormTwo>



  );
};

export default Checkout;
