"use client";
import React from "react";
import DashboardTable from "@/components/Table/DashboardTable";
import { useGetTrialsQuery } from "@/redux/Feature/Admin/trial/trialApi"; // Import the query hook
import { Spin, Tag } from "antd";

const Trial = () => {
  // Fetch trial data from Redux API
  const { data: trialsData, error, isLoading } = useGetTrialsQuery();

  // Format trial data for the table
  const formattedTrialData = trialsData?.data?.map((trial, index) => ({
    key: index,
    name: trial.name,
    email: trial.email,
    address: trial.address,
    mobile: trial.mobile,
    productName: trial.productName,
  }));

  // Define columns for the trial table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
  ];



  if (error) {
    return <div>Error loading trials</div>;
  }

  return (
    <>
 
         
      {/* Render the table with trial data */}
      <DashboardTable columns={columns} data={formattedTrialData} loading={isLoading} />
    </>
  );
};

export default Trial;
