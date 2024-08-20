import React from 'react'
import FeatureRow from './FeatureRow';

const FeaturesTable = ({ features, products }) => {
    return (
        <table className="w-full mt-8 border-collapse overflow-x-scroll">
          <thead>
            {/* <tr>
              <th className="p-4 border border-gray-300 bg-gray-200">Feature</th>
              {products.map((product, index) => (
                <th key={index} className="p-4 border border-gray-300 bg-gray-200">
                  {product.title}
                </th>
              ))}
            </tr> */}
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <FeatureRow key={index} feature={feature} products={products} />
            ))}
          </tbody>
        </table>
      );
}

export default FeaturesTable
