import { useState } from 'react';
import Image1 from '../../../../public/Products/Elements/Icon metro-windows.png';
import Image2 from '../../../../public/Products/Elements/Icon simple-android.png';
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
          className={`flex items-center px-4 py-2 font-semibold ${
            selectedTab === tab.name ? 'border border-black' : 'text-gray-700'
          }`}
          onClick={() => setSelectedTab(tab.name)}
        >
          <Image
            src={tab.image}
            alt={tab.name}
            className="w-8 h-8 mr-4" 
          />
          <div>
            <div className="text-sm lg:text-lg">{tab.name}</div>
            <div className={`text-sm text-start ${selectedTab === tab.name ? 'text-green-500' : 'text-gray-500'}`}>
              {tab.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
