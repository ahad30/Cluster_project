"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductDetailsTab = ({product}) => {
  console.log(product)
  return (
    <div className="space-y-4 px-5 lg:px-10 w-full lg:max-w-7xl mx-auto">
      <h2 className="lg:text-3xl text-lg font-semibold mb-14 text-center uppercase">about product</h2>
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
    {/* Description 1 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description1.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
        {product.description1.childDescription}
      </p>
    </details>

    {/* Description 2 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description2.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
        {product.description2.childDescription}
      </p>
    </details>

    {/* Description 3 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description3.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
        {product.description3.childDescription}
      </p>
    </details>

    {/* Description 4 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description4.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
        {product.description4.childDescription}
      </p>
    </details>
    
    {
      product?.id === 2 || product?.id === 3 ?
      <>
          <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description5.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
        {product.description5.childDescription}
      </p>
    </details>
      </> : <></>
    }

  </div>
</TabPanel>

<TabPanel>
  <div className="space-y-4 lg:w-[700px]">
    {/* Description 5 */}
    <details
      className={`group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden ${product?.id === 2 || product?.id === 3 ? "hidden" : ""}`}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description5.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
        {product.description5.childDescription}
      </p>
    </details>



    {/* Description 6 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description6.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: product?.description6?.childDescription }} />
      </p>
    </details>

    {/* Description 7 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description7.title}
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

      <div dangerouslySetInnerHTML={{ __html: product?.description7?.childDescription }} />
    </details>

    {/* Description 8 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description8.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: product?.description8?.childDescription }} />
      </p>
    </details>

    {/* Description 9 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description9.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: product?.description9?.childDescription }} />
      </p>
    </details>

    {/* Description 10 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description10.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: product?.description10?.childDescription }} />
      </p>
    </details>

    {/* Description 11 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description11.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: product?.description11?.childDescription }} />
      </p>
    </details>

    {/* Description 12 */}
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          {product.description12.title}
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

      <p className="mt-4 leading-relaxed text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: product?.description12?.childDescription }} />
      </p>
    </details>

{
  product?.id === 2 && <>
      <details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description13.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description13?.childDescription }} />
  </p>
</details>

<details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description14.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description14?.childDescription }} />
  </p>
</details>

<details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description15.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description15?.childDescription }} />
  </p>
</details>

<details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description16.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description16?.childDescription }} />
  </p>
</details>
  </>
}
{
  product?.id ===3 && <>
  <details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description17.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description17?.childDescription }} />
  </p>
</details>
<details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description18.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description18?.childDescription }} />
  </p>
</details>
<details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description19.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description19?.childDescription }} />
  </p>
</details>
<details
  className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
>
  <summary className="flex w-full cursor-pointer items-center justify-between gap-1.5">
    <h2 className="text-lg font-medium text-gray-900">
      {product.description20.title}
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

  <p className="mt-4 leading-relaxed text-gray-700">
    <div dangerouslySetInnerHTML={{ __html: product?.description20?.childDescription }} />
  </p>
</details>
  </>
}

  </div>
</TabPanel>

            <TabPanel>
      <h2 class="text-lg font-semibold text-gray-800 mb-4">
    Minimum system requirements of Cluster Antivirus:
  </h2>
  <ul class="list-disc list-inside space-y-2 text-gray-700">
    <li><span class="font-semibold">Processor Speed</span> – 1 GHz and higher;</li>
    <li><span class="font-semibold">RAM</span> – 1GB and more;</li>
    <li><span class="font-semibold">Hard disk space</span> – 1500 MB;</li>
    <li>
      <span class="font-semibold">Operating System</span> – Windows XP (SP3), Windows 7 (x32, x64) (+SP1), Windows 8, 8.1 (x32, x64), Windows 10 (x32, x64), Windows 11 (x32, x64);
    </li>
    <li>
      <span class="font-semibold">Screen resolution</span> – 1024 x 768 or higher (for correct display of texts in the antivirus, the font size should not exceed 100% (the parameter is specified in the operating system settings in the display settings section).
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
