import Image from 'next/image';
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import product1Image from "../../../../../public/Products/Elements/zfb.png"
import ProductDetailsTab from '../ProductDetailsTab';


const page = () => {
    const products = [
        {
          id:1,
          image: product1Image,
          title: "Cluster! Antivirus for Business",
          description: "Total protection of organizations against all types of cyber threats with possibility of centralized management of antivirus software.",
          price: " Ask for price"
        },

      ];



  return (
    <>
    {products.map(({ id, image, title, price }) => (
      <section
        key={id}
        className="bg-primary mb-10 bg-no-repeat bg-cover h-[750px] lg:h-[500px] bg-center"
      >
        <div className="py-10 max-w-7xl mx-auto">
          <div className="lg:px-[50px] grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            <div className='col-span-2'>
              <h1 className="font-zcool text-white text-center lg:text-start text-[20px] lg:text-[35px]">
                {title}
              </h1>
              <h1 className="text-white text-sm text-center lg:text-start lg:text-[20px] font-semibold mb-5 mt-3 lg:mt-5">
                Maximum protection against cyber threats!
              </h1>
              <p className="text-white mb-5 text-center lg:text-start text-sm lg:text-base">
                Proactive technology of protection will defend your PC from malicious software and scams.
              </p>
              <p className="text-white text-center lg:text-start text-sm lg:text-base">
                If you are looking for reliable and simple antivirus, this product will be ideal for you.
              </p>
              <p className="text-white mt-5 text-center lg:text-start text-sm lg:text-base">
                15 days trial period available
              </p>

              <div className='flex justify-center lg:justify-start'>
                <button className="border text-primary bg-white px-5 py-1 mt-4 hover:bg-green-500 rounded-md font-semibold hover:text-white transition-all duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaCartShopping />
                    <p> {price}</p>
                  </div>
                </button>
              </div>
              <div className='flex justify-center lg:justify-start'>
                <button className="border px-12 text-white py-1 mt-4 hover:bg-green-500 rounded-md font-semibold transition-all duration-300">
                  <p className="uppercase">Testing</p>
                </button>
              </div>
            </div>

            <div className='col-span-2'>
              <Image
                src={image}
                alt={title}
                className="w-[90%] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    ))}
    <div>
        <ProductDetailsTab/>
    </div>
  </>
  )
}

export default page
