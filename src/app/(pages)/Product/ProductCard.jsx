import Image from 'next/image'
import React from 'react'

const ProductCard = ({products}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {products.map((product, index) => (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col h-full">
      <div className="flex justify-center items-center h-[200px] mb-6">
        <Image
          src={product.image}
          alt={product.title}
          className={`${index === 1 ? "w-[200px] h-[50px]" : "w-[250px] h-[200px]"}`}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4 text-sm flex-grow">{product.description}</p>
      <p className="text-green-600 text-lg font-semibold mb-4">Only {product.price} BDT</p>
      <button className="text-primary border border-primary px-8 py-1 mt-auto">DETAILS</button>
    </div>
  ))}
</div>

  
  )
}

export default ProductCard