import React from 'react'
import Icon6 from "../../../../public/Homepage/Elements/Icon-6.png";
import Icon8 from "../../../../public/Homepage/Elements/Icon-8.png";
import Icon9 from "../../../../public/Homepage/Elements/Icon-9.png";
import Image from 'next/image';


const BecomePartner = () => {

   const partners = [
    {
      title: "Reseller",
      description: "Become our official reseller in your country",
      image: Icon6,
    },
    {
      title: "Distributorship",
      description: "Become our official distributor in your country",
      image: Icon8,
    },
    {
      title: "Affiliate",
      description: "Become our official affiliate in your country",
      image: Icon9,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">BECOME OUR PARTNER!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="border rounded-lg shadow-md p-6 text-center">
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <Image
                  src={partner.image}
                  alt={partner.title}
                  className="w-[50px] h-[50px] mb-4 bg-green-400 p-3 rounded-full"
                />
              <div>
              <h3 className="text-lg font-semibold mb-2 text-left">{partner.title}</h3>
              <p className="text-gray-700 mb-4 text-sm text-left">{partner.description}</p>
              </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BecomePartner