/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import ZFormTwo from "@/components/Form/ZFormTwo";
import ZInputTwo from "@/components/Form/ZInputTwo";
import ZEmail from "@/components/Form/ZEmail";
import { useAddOrderMutation } from "@/redux/Feature/Admin/order/orderApi";


const page = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // Retrieve product data from sessionStorage
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
    console.log(storedProduct)
  }, []);


  const [
    addOrder,
    {
      isLoading: OIsLoading, 
      isError: OIsError,   
      error: OError,        
      isSuccess: OIsSuccess, 
      data: OData,                  
    },
  ] = useAddOrderMutation(); 


  const handleSubmit = async (data) => {
    try {
      // Add order with product data
      const result = await addOrder({
        ...data,
        productName: product?.productName,
        price: product?.price,
      });
       
      console.log(result)
      if (result?.data?.GatewayPageURL) {
        window.location.replace(result?.data?.GatewayPageURL);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  



  return (
  <>
    <p className="text-center  text-sm lg:text-xl font-bold">
    You've made an excellent choice!

              </p>
      <ZFormTwo
        isLoading={OIsLoading}
        isSuccess={OIsSuccess}
        isError={OIsError}
        error={OError}
        submit={handleSubmit}
        formType="create"
        data={OData}

      >
        <div className="flex flex-col lg:flex-row gap-5 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-3 mt-10 w-[90%] mx-auto lg:w-[60%]">
        <p className="text-center lg:text-start text-sm lg:text-lg font-semibold">
         Submit your Information here

              </p>

              <ZInputTwo
            name="name"
            type="text"
            label="Name"
            defaultKey={""}
            placeholder="Enter your name"
            required
    
          />



          {/* Email */}
          <ZEmail label={"Email Address"} name={"email"} />
          {/* title */}

          {/* Name */}
         

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
            label="Mobile Number"
            defaultKey={""}
            placeholder="Enter your mobile number"
            required
 
          />

<button
        disabled={OIsLoading}
        type="submit"
        className= {`
          bg-primary disabled:bg-[#4f5a67] disabled:cursor-not-allowed text-center text-white rounded-md py-2 text-lg`}
      >
        {OIsLoading ? "Processing..." : "Proceed to Pay"}
      </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<h2 className="text-lg font-semibold">Your Order items</h2>

	<div className="pt-4 space-y-2">
		<div>
			<div className="flex justify-between">
				<span>Subtotal</span>
				<span>{product.price} Tk/-</span>
			</div>
		</div>

	</div>
	<div className="pt-4 space-y-2">
		<div className="space-y-6">
			<div className="flex justify-between">
				<span>Total</span>
				<span className="font-semibold">{product.price} Tk/-</span>
			</div>

		</div>
	</div>
        <div className="flex flex-col  space-y-4 divide-y  dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<h2 className="text-lg font-semibold mt-10">Items in cart(1 item)</h2>
	<ul className="flex flex-col pt-4 space-y-2">

	
		<li className="flex  justify-between">
			<h3 className="font-bold lg:text-lg">{product.productName }
				{/* <span className="text-sm dark:text-violet-600">  x1</span> */}
			</h3>
			<div className="text-right">
				<span className=" dark:text-gray-600 lg:text-xl"> {product.price}TK/-</span>
			</div>
		</li>
	</ul>

       </div>
       </div>
       </div>
      </ZFormTwo>
</>


  );
};

export default page;
