import React from "react";
import product1Image from "../../../../../public/Homepage/Elements/Product-1.png";
import product2Image from "../../../../../public/Homepage/Elements/Product-2.png";
import Image from "next/image";
import Icon1 from "../../../../../public/Homepage/Elements/Icon-windows.png";
import Icon2 from "../../../../../public/Homepage/Elements/Icon-Android.png";

const HomeProduct = () => {
  const products = [
    {
      icon: Icon1,
      category: "Corporate Security",
      title: "Cluster Antivirus for Business",
      description: "Advanced Security for small and medium companies.",
      price: "Flexible Price",
      detailsText: "DETAILS",
      image: product1Image,
      features: [
        "Comprehensive protection",
        "Advanced threat detection",
        "User-friendly interface",
      ],
    },
    {
      icon: Icon2,
      category: "Endpoint Security",
      title: "Cluster! Total Security",
      description:
        "The product with the highest level of protection! Additionally, it has instruments of computer's control.",
      price: "only 1450 BDT",
      detailsText: "DETAILS",
      image: product2Image,
      features: [
        "Real-time protection",
        "Multi-device support",
        "Customizable security settings",
      ],
    },
    {
      icon: Icon1,
      category: "Mobile Security",
      title: "Cluster! Internet Security for Android",
      description:
        "A complete antivirus that provides the daily protection for active users of Android devices.",
      price: "Flexible Price",
      detailsText: "Google Play",
      image: product1Image,
      features: [
        "Mobile-specific protection",
        "Battery optimization",
        "Data privacy controls",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl lg:px-10 mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
        <div
        key={index}
        className="relative border shadow-md p-6 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-green-500"
      >
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Image
            src={product?.icon}
            alt=""
            className="w-[20px] h-[20px]"
          />
          <h4 className="text-gray-600 text-sm font-medium">
            {product.category}
          </h4>
        </div>
        <Image
          src={product.image}
          alt={product.title}
          className="mx-auto mb-6 w-[250px] h-[200px] transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-base font-semibold mt-2 mb-4">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-4 text-sm">
          {product.description}
        </p>
        {product.price && (
          <p className="text-green-600 font-bold text-xl mb-4">
            {product.price}
          </p>
        )}
        <button
          className="text-white px-7 py-2 font-semibold mt-4 bg-green-500 hover:bg-green-600 transition-colors duration-300 text-sm uppercase"
        >
          {product.detailsText} &gt;
        </button>
        
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-100 p-6 text-sm text-gray-800 transition-opacity duration-300">
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Image
            src={product?.icon}
            alt=""
            className="w-[20px] h-[20px]"
          />
          <h4 className="text-gray-600 text-sm font-medium">
            {product.category}
          </h4>
        </div>
        <h2 className="text-base font-bold mt-8 text-start  mb-4">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-4 mt-16 text-sm text-start">
          {product.description}
        </p>
        <ul className="list-disc text-left px-5">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
          {product.price && (
          <p className="text-green-600 font-bold text-xl mt-[80px] mb-4">
            {product.price}
          </p>
        )}
        <button
          className="text-white px-7 py-2 font-semibold mt-4 bg-green-500 hover:bg-green-600 transition-colors duration-300 text-sm uppercase"
        >
          {product.detailsText} &gt;
        </button>
        </div>
      </div>
      
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
