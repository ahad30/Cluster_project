"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductDetailsTab = ({ product }) => {
  // console.log(product);
  return (
    <div className="space-y-4 px-5 lg:px-10 w-full lg:max-w-7xl mx-auto">
      <h2 className="lg:text-3xl text-lg font-semibold mb-14 text-center uppercase">
        about product
      </h2>
      <Tabs>
        <div className="lg:flex gap-5">
          <div className="lg:border-r-2 lg:border-r-blue-gray-100 lg:h-[550px] lg:me-5">
            <TabList className="flex flex-col gap-y-2 lg:me-4 text-center lg:text-start">
              <Tab
                className="py-2 px-4 border-2 border-gray-300  cursor-pointer outline-none lg:w-[250px]"
                selectedClassName="bg-green-500 text-white "
              >
                Advantages
              </Tab>
              <Tab
                className="py-2 px-4 border-2 border-gray-300 cursor-pointer outline-none"
                selectedClassName="bg-green-500 text-white"
              >
                Characteristics
              </Tab>
              <Tab
                className="py-2 px-4 border-2 border-gray-300 cursor-pointer outline-none"
                selectedClassName="bg-green-500 text-white"
              >
                System requirements
              </Tab>
            </TabList>
          </div>
          <div className="mt-5 lg:mt-0">
          <TabPanel>
  <div className="space-y-4 lg:w-[700px]">
    {product?.description
      ?.filter((item, index) => {
        if (product.id === 1) {
          return index < 4;
        }
        if (product.id === 2 || product.id === 3) {
          return index < 5;
        }
        return false; // Hide items for other ids
      })
      .map((item, index) => (
        <details
          key={index}
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              {item.title}
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p
            className="text-justify"
            dangerouslySetInnerHTML={{
              __html: item?.childDescription,
            }}
          ></p>
        </details>
      ))}
  </div>
</TabPanel>

<TabPanel>
  <div className="space-y-4 lg:w-[700px]">
    {product?.description
      ?.filter((item, index) => {
        if (product.id === 1) {
          return index >= 4;
        }
        if (product.id === 2 || product.id === 3) {
          return index >= 5;
        }
        return false; 
      })
      .map((item, index) => (
        <details
          key={index}
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              {item.title}
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p
            className="text-justify"
            dangerouslySetInnerHTML={{
              __html: item?.childDescription,
            }}
          ></p>
        </details>
      ))}
  </div>
</TabPanel>

            <TabPanel>
              <h2 class="text-lg font-semibold text-gray-800 mb-4">
                Minimum system requirements of Cluster Antivirus:
              </h2>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <span class="font-semibold">Processor Speed</span> – 1 GHz and
                  higher;
                </li>
                <li>
                  <span class="font-semibold">RAM</span> – 1GB and more;
                </li>
                <li>
                  <span class="font-semibold">Hard disk space</span> – 1500 MB;
                </li>
                <li>
                  <span class="font-semibold">Operating System</span> – Windows
                  XP (SP3), Windows 7 (x32, x64) (+SP1), Windows 8, 8.1 (x32,
                  x64), Windows 10 (x32, x64), Windows 11 (x32, x64);
                </li>
                <li>
                  <span class="font-semibold">Screen resolution</span> – 1024 x
                  768 or higher (for correct display of texts in the antivirus,
                  the font size should not exceed 100% (the parameter is
                  specified in the operating system settings in the display
                  settings section).
                </li>
              </ul>
              <p class="mt-4 text-gray-700 italic">
                * One PC means one operating system (OS)
              </p>
              <p class="mt-2 text-gray-700">
                <span class="font-semibold">Program Version:</span> 3.0.2368.0
              </p>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductDetailsTab;
