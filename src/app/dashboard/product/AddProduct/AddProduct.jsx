"use client";
import React from "react";
import ZFormTwo from "@/components/Form/ZFormTwo";
import ZInputTwo from "@/components/Form/ZInputTwo";
import ZSelect from "@/components/Form/ZSelect"; 
import { useAppDispatch } from "@/redux/Hook/Hook";
import { setIsAddModalOpen } from "@/redux/Modal/ModalSlice";
import { useAddProductMutation } from "@/redux/Feature/Admin/product/productApi";
// Updated import for adding product

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const [createProduct, { isLoading: PIsLoading, isError: PIsError, error: PError, isSuccess: PIsSuccess, data }] = useAddProductMutation();

  const handleSubmit = (data) => {
    createProduct(data);
  };

  const handleCloseAndOpen = () => {
    dispatch(setIsAddModalOpen());
  };

  return (
    <div className="">
      <ZFormTwo
        isLoading={PIsLoading}
        isSuccess={PIsSuccess}
        isError={PIsError}
        error={PError}
        submit={handleSubmit}
        closeModal={handleCloseAndOpen}
        formType="create"
        data={data}
        buttonName="Create"
      >
        <div className="grid grid-cols-1 gap-3 mt-10">
          {/* Product Name */}
          <ZInputTwo
            name="name"
            type="text"
            label="Product Name"
            defaultKey={""}
            placeholder="Enter product name"
          />

          {/* Product Key */}
          <ZInputTwo
            name="key"
            type="text"
            label="Product Key"
            defaultKey={""}
            placeholder="Enter product key"
          />

          {/* Status */}
          <ZSelect
            name="status"
            label="Status"
            options={[
              { label: "Sold", value: "sold" },
              { label: "Unsold", value: "unsold" },
            ]}
            placeholder="Select status"
   
          />
        </div>
      </ZFormTwo>
    </div>
  );
};

export default AddProduct;
