/* eslint-disable react/no-unescaped-entities */
"use client";
import { PartnerContext } from '@/components/PartnerProvider';
import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PartnerTabs = () => {
  const { activeTab, setActiveTab } = useContext(PartnerContext);
  return (
    <div className='lg:max-w-7xl px-10 mx-auto mt-10'>
      <h2 className="lg:text-3xl font-semibold mb-14 text-center">PARTNER PROGRAMS</h2>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <div className='lg:flex gap-5'>
          <div className='lg:border-r-2 lg:border-r-blue-gray-600 lg:h-[550px] lg:me-5'>
            <TabList className='flex flex-col gap-y-2 lg:me-4 text-center lg:text-start list-none'>
              <Tab className='py-2 px-4 border-2 border-gray-300  cursor-pointer outline-none lg:w-[250px]' selectedClassName='bg-green-500 text-white '>Cluster Distributor</Tab>
              <Tab className='py-2 px-4 border-2 border-gray-300 cursor-pointer outline-none' selectedClassName='bg-green-500 text-white'>Cluster Reseller</Tab>
              <Tab className='py-2 px-4 border-2 border-gray-300 cursor-pointer outline-none' selectedClassName='bg-green-500 text-white'>Cluster affiliate</Tab>
            </TabList>
          </div>
          <div className='mt-5 lg:mt-0'>
          <TabPanel>
              <h2 className="font-semibold text-lg mb-4">Partner Status: Cluster! Distributor</h2>
              <p>Partner program "Distributor" is an ideal proposition for big IT, software, and hardware distributors who want to become our exclusive Partners in certain countries or regions.</p>
              <p>This program gives a partner the status of exclusive representative in a country/region confirmed by the Agreement; all further sales in this country/region will go through this partner.</p>
              <p>Our distributors receive access to a license key generator from the 3rd month of collaboration. This means that the partner can generate keys directly without any additional requests.</p>
              <p>In case of partner necessity, we will create a website in Cluster! style for online sales.</p>
              <p className="mt-4">As our official distributor, you will receive:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Unique design of BOX, CD labels - we can produce any unique design based on your specification;</li>
                <li>Service team support;</li>
                <li>Installation pack - we will provide you with an *.iso file with program installation and user manual for selling the product in your shops;</li>
                <li>Product manuals;</li>
                <li>Technical information needed to provide user support - we will make several trainings for you for better understanding of our products, which will help you provide the best user support.</li>
              </ul>
              <p className="mt-4">We will sign the agreement to establish all the details of our collaboration.</p>
              <p className="mt-4">Market price on Cluster! Internet Security is established by the Distributor. This means that our distributors are absolutely free in market price settings.</p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-semibold text-lg mb-4">Partner Status: Cluster! Reseller</h2>
              <p>Partner program "Reseller" is an ideal proposition for existing software resellers and distributors who want to extend their product line.</p>
              <p>The program does not require a lot of investments; you just make your first purchase and then sell software on the market.</p>
              <p>After the first purchase, you do not have any obligations to pay monthly fees; just order the amount of licenses that you need with a fixed price for 1 license.</p>
              <p>In case of partner necessity, we will create a website for online sales.</p>
              <p className="mt-4">As our official Reseller, you will receive:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Unique design of BOX, CD labels - we can produce any unique design based on your specification;</li>
                <li>Service team support;</li>
                <li>Installation pack - we will provide you with an *.iso file with program installation and user manual for selling the product in your shops;</li>
                <li>Product manuals;</li>
                <li>Technical information needed to provide user support - we will make several trainings for you for better understanding of our products, which will help you provide the best user support.</li>
              </ul>
              <p className="mt-4">We will sign the agreement to establish all the details of our collaboration.</p>
              <p className="mt-4">Market price on Cluster! Internet Security is established by the Reseller. However, we recommend it to be not less than the price for license key generation plus 50% of this price.</p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-semibold text-sm lg:text-lg mb-4">Partner Status:  Cluster affiliate</h2>
              <p>Partner program "Easy Start" is an ideal proposition for those who do not have a lot of experience in software selling.</p>
              <p>Program does not require a lot of investments; you just make your first purchase and then sell software on the market.</p>
              <p>After the first purchase, you do not have any obligations to pay monthly fees, just order the amount of licenses that you need with a fixed price for 1 license.</p>
              <p className="mt-4">As our official Reseller you will receive:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Unique design of BOX, CD labels - we can produce any unique design based on your specification;</li>
                <li>Service team support;</li>
                <li>Installation pack - we will provide you with an *.iso file with program installation and user manual for selling the product in your shops;</li>
                <li>Product manuals;</li>
                <li>Technical information needed to provide user support - we will make several trainings for you for better understanding of our products, which will help you provide the best user support.</li>
              </ul>
              <p className="mt-4">This program does not require any obligations or agreement assignment as a result. If something goes wrong, you can easily go out of business.</p>
              <p className="mt-4">Market price for Cluster! Internet Security Software is fixed by Affiliate! But we recommend it to be not less than the price for license key generation +50% of this price.</p>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default PartnerTabs;
