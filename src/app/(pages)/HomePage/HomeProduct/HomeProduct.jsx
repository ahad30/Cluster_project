import React from 'react';
import product1Image from '../../../../../public/Homepage/Elements/Product-1.png';
import product2Image from '../../../../../public/Homepage/Elements/Product-2.png';
import Image from 'next/image';
import Icon1 from '../../../../../public/Homepage/Elements/Icon-windows.png';
import Icon2 from '../../../../../public/Homepage/Elements/Icon-Android.png';


const HomeProduct = () => {
  const products = [
    {
      icon : Icon1,
      category: "Corporate Security",
      title: "Cluster Antivirus for Business",
      description: "Advanced Security for small and medium companies.",
      price: "Flexible Price",
      detailsText: "DETAILS",
      image: product1Image,
    },
    {
      icon : Icon2,
      category: "Endpoint Security",
      title: "Cluster! Total Security",
      description:
        "The product with the highest level of protection! Additionally, it has instruments of computer's control.",
      price: "only 1450 BDT",
      detailsText: "DETAILS",
      image: product2Image,
    },
    {
      icon : Icon1,
      category: "Mobile Security",
      title: "Cluster! Internet Security for Android",
      description:
        "A complete antivirus that provides the daily protection for active users of Android devices.",
      price: "Flexible Price",
      detailsText: "DETAILS",
      image: product1Image,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl lg:px-10 mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg shadow-md p-6 text-center">
              <div className='flex  gap-4'>
               <div><Image src={product?.icon} alt='' className='w-[20px] h-[20px]'/></div>
               <h4 className="text-gray-600 text-sm font-medium mb-3">
                {product.category}
                </h4>
              </div>
              <Image src={product.image} alt={product.title} className="mx-auto mb-6 w-[250px] h-[200px]" />
              <h2 className="text-base font-semibold mt-2 mb-4">{product.title}</h2>
              <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
              {product.price && (
                <p className="text-green-600 font-bold text-xl mb-4">{product.price}</p>
              )}
              <button className="text-green-500 hover:text-green-600 font-semibold mt-4">
                {product.detailsText} &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
