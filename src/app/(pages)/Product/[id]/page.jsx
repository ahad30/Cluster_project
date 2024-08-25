"use client"
import React, { useState } from 'react';
import product1Image from "../../../../../public/Products/Elements/Product-1.png"
import product2Image from "../../../../../public/Products/Elements/Security-1.png"
import product3Image from "../../../../../public/Products/Elements/Product-3.png"
import Image from 'next/image';
import Icon1 from "../../../../../public/Products/Elements/Icon-1.png";
import Icon2 from "../../../../../public/Products/Elements/Icon-2.png";
import Icon3 from "../../../../../public/Products/Elements/Icon-3.png";
import Icon4 from "../../../../../public/Products/Elements/Icon-4.png";
import Icon5 from "../../../../../public/Products/Elements/Icon-5.png";
import Icon6 from "../../../../../public/Products/Elements/Icon-6.png";
import Icon7 from "../../../../../public/Products/Elements/Icon-7.png";
import ProductDetailsTab from '../ProductDetailsTab';
import { FaCartShopping } from "react-icons/fa6";

const ProductDetails = ({params}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
    
    const products = [
  {
    id:1,
    image: product1Image,
    title: "Cluster Antivirus",
    description: "Advanced Security for small and medium companies.",
    price: "490",
    features: [
      "Guard (File Monitor)",
      "Inspector Security (Behavioral Analyzer)",
      "Mail-filter",
      "USB-protection",
      "Heuristic analyzer",
    ],
  },
  {
    id:2,
    image: product2Image,
    title: "Cluster! Internet Security",
    description: "Solution which is ideal for active internet users",
    price: "1099",
    features: [
      "Guard (File Monitor)",
      "Inspector Security (Behavioral Analyzer)",
      "Mail-filter",
      "USB-protection",
      "Heuristic analyzer",
      "Firewall",
      "Anti-fishing",
      "Anti-spam",
      "Virtual keyboard",
      "Optimizer PC",
      "File-shredder",
    ],
  },
  { 
    id:3,
    image: product3Image,
    title: "Cluster! Total Security",
    description:
      "Product which will provide you the highest level of protection",
    price: "1450",
    features: [
      "Guard (File Monitor)",
      "Inspector Security (Behavioral Analyzer)",
      "Mail-filter",
      "USB-protection",
      "Heuristic analyzer",
      "Firewall",
      "Anti-fishing",
      "Anti-spam",
      "Virtual keyboard",
      "Optimizer PC",
      "File-shredder",
      "Parental Control",
      "Process Manager",
      "Startup Manager",
      "Privacy Protection"
    ],
  },
];

const images = [
  { src: Icon1, alt: 'Icon 1', title: 'Process Manager' },
  { src: Icon2, alt: 'Icon 2', title: 'Parental Control' },
  { src: Icon3, alt: 'Icon 3', title: 'Privacy Protection' },
  { src: Icon4, alt: 'Icon 4', title: 'Startup Manager' },
  { src: Icon5, alt: 'Icon 5', title: 'Anti-virus Scanner' },
  { src: Icon6, alt: 'Icon 6', title: 'Farewell' },
  { src: Icon7, alt: 'Icon 7', title: 'Pc Optimizer' },
];

const {title ,image , price} = products.find((product)=> product?.id == params.id );

  return (
    <>
    <section className='bg-primary mb-10 bg-no-repeat bg-cover 
       h-[750px] lg:h-[500px] bg-center'>
    <div
      className=" py-10 max-w-7xl mx-auto"
          >
            <div className="lg:px-[50px] grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
        
            <div className=''>
            <h1 className="font-zcool text-white text-center lg:text-start text-[20px] lg:text-[35px]">
                 {title}
                </h1>
                <h1 className=" text-white text-sm text-center lg:text-start lg:text-[20px]  font-semibold mb-5 mt-3 lg:mt-5">
                  Maximum protection against cyber threats!
                </h1>
                <p className='text-white mb-5 text-center lg:text-start text-sm lg:text-base'>Proactive technology of protection will defend your PC from malicious software and scams.
                </p>
               <p className='text-white  text-center lg:text-start text-sm lg:text-base'>  If you are looking for reliable and simple antivirus, this product will be ideal for you.</p>
                <p className='text-white mt-5  text-center lg:text-start text-sm lg:text-base'>15 days trial period available </p>
             
             <div className='flex justify-center lg:justify-start'>
             <button className="border text-primary bg-white px-5 py-1 mt-4 hover:bg-green-500   rounded-md font-semibold hover:text-white transition-all duration-300">
             <div className='flex items-center gap-x-2'>
             <FaCartShopping className=''/>
             <p className=''>ONLY {price} USD</p>
             </div>
             </button>
             </div>
             <div className='flex justify-center lg:justify-start'>
             <button className="border  px-12 text-white py-1 mt-4 hover:bg-green-500   rounded-md font-semibold  transition-all duration-300">
    
             <p className='uppercase'>Try Trial</p>

             </button>
             </div>
                

            </div>

            <div>
      <div className={`grid grid-cols-4 mb-8 gap-5 mt-4 lg:mt-0 ${hoveredImage ? '' : ''}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            // onMouseEnter={() => setHoveredImage(image)}
            // onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
              />
            </div>
            <p className="mt-2 text-white text-[7px] text-center lg:text-[12px]">{image.title}</p>
          </div>
        ))}
      </div>
      
      {/* {hoveredImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="relative">
            <Image
              src={hoveredImage.src}
              alt={hoveredImage.alt}
              className="w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] object-cover"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black bg-opacity-75 px-4 py-2 rounded">
              {hoveredImage.title}
            </p>
          </div>
        </div>
      )} */}
    </div>

              <div>
                <Image
                  src={image}
                  alt=""
                  className={`w-[500px] lg:w-[600px] object-cover lg:h-[400px]`}
                />
              </div>

        </div>
    </div>
</section>

<ProductDetailsTab/>
    </>

  )
}


export default ProductDetails;