"use client";
import React from "react";
import ZFormTwo from "@/components/Form/ZFormTwo";
import ZInputTwo from "@/components/Form/ZInputTwo";
import ZSelect from "@/components/Form/ZSelect"; 
import { useAppDispatch } from "@/redux/Hook/Hook";
import { setIsEditModalOpen } from "@/redux/Modal/ModalSlice";
import { useUpdateProductMutation } from "@/redux/Feature/Admin/product/productApi";


const EditProduct = ({ selectedProduct }) => {
  const dispatch = useAppDispatch();
  const [updateProduct, { isLoading: PIsLoading, isError: PIsError, error: PError, isSuccess: PIsSuccess, data }] = useUpdateProductMutation();

  const handleSubmit = (data) => {
    console.log(data)
    const updatedData = {
      id: selectedProduct.id,
      data,
    };
    updateProduct(updatedData);
  };

  const handleCloseAndOpen = () => {
    dispatch(setIsEditModalOpen());
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
        formType="edit"
        data={data}
        buttonName="Update" // Changed to "Update"
      >
        <div className="grid grid-cols-1 gap-3 mt-10">
          {/* Product Name */}
          <ZInputTwo
            name="name"
            type="text"
            label="Product Name"
            value={selectedProduct?.name || ""} // Pre-fill with existing product data
            placeholder="Enter product name"
          />

          {/* Product Key */}
          <ZInputTwo
            name="key"
            type="text"
            label="Product Key"
            value={selectedProduct?.productKey || ""} // Pre-fill with existing product key
            placeholder="Enter product key"
          />

          {/* Status */}
          <ZSelect
            name="status"
            label="Status"
            options={[
              { label: "Sold", value:  "sold"},
              { label: "Unsold", value:  "unsold"},
            ]}
            value={selectedProduct?.status || ""} // Pre-fill with existing product status
            placeholder="Select status"

          />
        </div>
      </ZFormTwo>
    </div>
  );
};

export default EditProduct;
