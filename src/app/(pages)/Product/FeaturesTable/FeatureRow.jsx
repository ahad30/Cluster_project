import React from 'react'

const FeatureRow = ({ feature, products }) => {
  return (
    <tr className='overflow-x-scroll'>
      <td className="p-4 w-[320px] border border-gray-200 bg-gray-100 ">
        <p className='font-bold text-[12px] lg:text-base'>
        {feature.name}
          </p>
      <p className='text-sm hidden lg:block'>{feature.description}</p>

      </td>
      {products.map((product, index) => (
        <td
          key={index}
          className={`p-4 border border-gray-200 text-center ${
            product.features.includes(feature.name) ? 'bg-gray-200' : 'bg-gray-100'
          }`}
        >
          {product.features.includes(feature.name) &&
          (
            <span className="text-white bg-primary rounded-circle py-1 px-2 rounded-full font-semibold">✔</span>
          )}
        </td>
      ))}
    </tr>
  );
}

export default FeatureRow
