import React from 'react'
import FeatureRow from './FeatureRow';

const FeaturesTable = ({ features, products }) => {
    return (
      <div className="overflow-x-auto">
      <table className="w-full mt-8 border-collapse">
        {/* <thead>
          <tr>
            <th className="p-4 border border-gray-300 bg-gray-200 min-w-[200px]">Feature</th>
            {products.map((product, index) => (
              <th key={index} className="p-4 border border-gray-300 bg-gray-200 min-w-[200px]">
                {product.title}
              </th>
            ))}
          </tr>
        </thead> */}
        <tbody>
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} products={products} />
          ))}
        </tbody>
      </table>
    </div>
      );
}

export default FeaturesTable
