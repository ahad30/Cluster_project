"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import product1Image from "../../../../../public/Products/Elements/zfb.png";
import BusinessTab from "./BusinessTab";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/Hook/Hook";
import AddModal from "@/components/Modal/AddModal";
import ButtonWithModal from "@/components/Button/ButtonWithModal";
import AddTrialForm from "../AddTrialForm";

const page = () => {
  const { isAddModalOpen } = useAppSelector((state) => state.modal);
  const [selectedBusiness, setselectedBusiness] = useState({});
  const router = useRouter();

  const products = [
    {
      id: 1,
      image: product1Image,
      productName: "Cluster Antivirus Business",
      description:
        "Total protection of organizations against all types of cyber threats with possibility of centralized management of antivirus software.",
      price: "2099",
    },
  ];

  const product = products[0];

  const handleTrial = (product) => {
    setselectedBusiness(product);
  };

  const handleCheckout = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    router.push("/Product/checkout");
  };

  return (
    <>
      {products.map(({ id, image, productName, price }) => (
        <section
          key={id}
          className="bg-primary mb-10 bg-no-repeat bg-cover h-[750px] lg:h-[500px] bg-center"
        >
          <div className="py-10 max-w-7xl mx-auto">
            <div className="lg:px-[50px] grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              <div className="col-span-2">
                <h1 className="font-zcool text-white text-center lg:text-start text-[20px] lg:text-[35px] lg:mb-10">
                  {productName}
                </h1>
                <p className="text-white mb-5 text-center lg:text-start text-sm lg:text-base">
                  Total protection of organizations against all types of cyber
                  threats with possibility of centralized management of
                  antivirus software.
                </p>

                <p className="text-white mt-5 text-center lg:text-start text-sm lg:text-base">
                  30 days trial period available
                </p>

                <div className="flex justify-center lg:justify-start">
                  <button onClick={handleCheckout}
                   className="border text-primary bg-white px-5 py-1 mt-4 hover:bg-green-500 rounded-md font-semibold hover:text-white transition-all duration-300">
                    <div className="flex items-center gap-x-2">
                      <FaCartShopping />
                      <p>ONLY {price} BDT</p>
                    </div>
                  </button>
                </div>

                <div
                  onClick={() => handleTrial(product)}
                  className="flex justify-center lg:justify-start"
                >
                  <ButtonWithModal title="Try Trial"></ButtonWithModal>
                </div>
              </div>

              <div className="col-span-2">
                <Image
                  src={image}
                  alt={productName}
                  className="w-[90%] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
      <AddModal isAddModalOpen={isAddModalOpen} title="Submit your information">
        <AddTrialForm selectedBusiness={selectedBusiness} />
      </AddModal>
      <div>
        <BusinessTab />
      </div>
    </>
  );
};

export default page;
