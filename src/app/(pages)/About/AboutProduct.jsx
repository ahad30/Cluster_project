import React from 'react';
import Product1 from '../../../../public/About us/About us Elements/Product-1.png';
import Product2 from '../../../../public/About us/About us Elements/Product-2.png';
import Product3 from '../../../../public/About us/About us Elements/Product-3.png';

const AboutProduct = () => {
    const products = [
        {
            image: Product1,
            title: 'Endpoint Security',
            description: 'Cluster! Internet Security and Cluster! Total Security',
        },
        {
            image: Product2,
            title: 'Corporate Security',
            description: 'Cluster! Antivirus for Business',
        },
        {
            image: Product3,
            title: 'Mobile Security',
            description: 'Cluster! Mobile Antivirus',
        },
    ];

    return (
        <section className=" text-white mb-24 relative">
            <div className="max-w-7xl px-5 lg:px-10 mx-auto text-center">
                <h1 className="text-xl lg:text-4xl font-bold mb-8 text-black">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className="rounded-lg py-28 px-5 shadow-lg relative text-white bg-green-500 h-[300px]"
                       
                        >
                            <div className="">
                                <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
                                <p className="text-sm">{product.description}</p>
                            </div>
                            <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${product?.image?.src})` }}
      ></div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutProduct;
