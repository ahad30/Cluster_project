import { useState } from 'react';
import Image1 from '../../../../public/Products/Elements/Icon metro-windows.png'; // Replace with actual path
import Image2 from '../../../../public/Products/Elements/Icon simple-android.png'; // Replace with actual path
import Image from 'next/image';

const TABS = [
  {
    name: 'Endpoint Security',
    image: Image1,
    title: 'OS WINDOWS'
  },
  {
    name: 'Corporate Security',
    image: Image1,
    title: 'OS WINDOWS'
  },
  {
    name: 'Mobile Security',
    image: Image2,
    title: 'OS ANDROID'
  }
];

export default function ProductTab({ selectedTab, setSelectedTab }) {
  return (
    <div className="lg:flex lg:flex-col  space-y-4 mb-8 mt-5">
      {TABS.map((tab) => (
        <button
          key={tab.name}
          className={`flex items-center p-4 font-semibold ${
            selectedTab === tab.name ? 'border border-black' : 'text-gray-700'
          }`}
          onClick={() => setSelectedTab(tab.name)}
        >
          <Image
            src={tab.image}
            alt={tab.name}
            className="w-8 h-8 mr-4" // Adjust size as needed
          />
          <div>
            <div className="text-lg">{tab.name}</div>
            <div className={`text-sm ${selectedTab === tab.name ? 'text-green-500' : 'text-gray-500'}`}>
              {tab.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
