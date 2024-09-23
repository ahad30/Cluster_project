"use client";
import React, { useState } from "react";
import {  Tag } from "antd";
import DashboardTable from "@/components/Table/DashboardTable";
import { Space, Tooltip } from "antd";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import AddModal from "@/components/Modal/AddModal";
import EditModal from "@/components/Modal/EditModal";
import { useAppDispatch, useAppSelector } from "@/redux/Hook/Hook";
import ButtonWithModal from "@/components/Button/ButtonWithModal";
import { setIsDeleteModalOpen, setIsEditModalOpen } from "@/redux/Modal/ModalSlice";
import DeleteModal from "@/components/Modal/DeleteModal";
import { useDeleteProductMutation, useGetProductQuery } from "@/redux/Feature/Admin/product/productApi";
import AddProduct from "./AddProduct/AddProduct";
import EditProduct from "./EditProduct/EditProduct";

const Product = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading: productIsLoading } = useGetProductQuery();
  const { isAddModalOpen, isEditModalOpen, isDeleteModalOpen } = useAppSelector((state) => state.modal);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [deleteProduct, { isLoading: dPIsLoading, isError, isSuccess, data: dPData, error: dPError }] = useDeleteProductMutation();
  
  // Mapping product data
  const productData = data?.data?.map((product, index) => ({
    key: index,
    id: product.ID,
    productKey: product?.key, // Updated to use productID
    name: product?.name, // Updated to productName
    status: product?.status 
  }));

// console.log(productData)
  const handleEditProduct = (productData) => {
    setSelectedProduct(productData);
    dispatch(setIsEditModalOpen());
  };

  const handleDeleteConfirmation = (productData) => {
    setSelectedProduct(productData);
    dispatch(setIsDeleteModalOpen());
  };

  const handleDeleteProduct = () => {
    deleteProduct(selectedProduct?.id); // Call the delete mutation with selected productID
  };

  // Columns for product data
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Key",
      dataIndex: "productKey",
      key: "productKey",
    },

    
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === 'sold' ? 'green' : 'red'}>{status}</Tag> // Display status with color
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEditProduct(record)}>
            <Tooltip title="Edit" placement="top">
              <CiEdit size={20} />
            </Tooltip>
          </a>
          <a onClick={() => handleDeleteConfirmation(record)}>
            <Tooltip title="Delete" placement="top">
              <AiOutlineDelete size={20} />
            </Tooltip>
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>

      <div className="flex flex-col lg:flex-row items-center gap-x-2 justify-end my-5">
        <ButtonWithModal title="Add Product"></ButtonWithModal>
      </div>

      <DashboardTable columns={columns} data={productData} loading={productIsLoading} /> {/* Updated to use product data */}
      
      {/* AddModal Component */}
      <AddModal isAddModalOpen={isAddModalOpen} title="Add New Product">
        <AddProduct />
      </AddModal>

      {/* EditModal Component */}
      <EditModal isEditModalOpen={isEditModalOpen} title="Edit Product">
        <EditProduct selectedProduct={selectedProduct} /> 
      </EditModal>

      {/* DeleteModal Component */}
      <DeleteModal
        data={dPData}
        error={dPError}
        isLoading={dPIsLoading}
        isSuccess={isSuccess}
        title="Delete Product"
        onDelete={handleDeleteProduct}
        isDeleteModalOpen={isDeleteModalOpen}
        isError={isError}
        description={"Deleting this product will remove all associated data."} // Updated message for product
      ></DeleteModal>
    </>
  );
};

export default Product;
