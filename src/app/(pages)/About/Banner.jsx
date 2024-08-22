import React from 'react';
import BackImage from '../../../../public/About us/About us Elements/map.png'; 
import Flag1 from '../../../../public/About us/About us Elements/Flag-1.png';
import Flag2 from '../../../../public/About us/About us Elements/Flag-2.png';
import Flag3 from '../../../../public/About us/About us Elements/Flag-3.png';
import Flag4 from '../../../../public/About us/About us Elements/Flag-4.png';
import Flag5 from '../../../../public/About us/About us Elements/Flag-5.png';
import Flag6 from '../../../../public/About us/About us Elements/Flag-6.png';
import Flag7 from '../../../../public/About us/About us Elements/Flag-7.png';
import Flag8 from '../../../../public/About us/About us Elements/Flag-8.png';
import Flag9 from '../../../../public/About us/About us Elements/Flag-9.png';

import Image from 'next/image';

const Banner = () => {
    const flags = [Flag1, Flag2, Flag3, Flag4, Flag5, Flag6, Flag7, Flag8, Flag9];

  return (
    <section className="bg-primary text-white py-16 relative -z-40">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Cluster! Antivirus</h1>
        <h2 className="lg:text-5xl font-semibold mb-6">The only Antivirus Laboratory in<br/> Bangladesh</h2>
        <p className="text-[14px]  mb-6 lg:px-[190px]">
          We successfully develop cyber security and antivirus software since 2020. Our experience is in working with B2C and B2B markets. In 2020, we have created and set up (from idea to product) our own antivirus engine with our own virus laboratory.
        </p>
        <p className="text-[14px] mb-8">
          The products and technologies of cyber protection are presented in more than 15 countries such as:
        </p>
        <div className="flex flex-wrap justify-center">
          {flags.map((flag, index) => (
            <Image key={index} src={flag} alt="Country Flag" className="h-12 w-16 mx-2 mb-4" />
          ))}
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${BackImage.src})` }}
      ></div>
    </section>
  );
};

export default Banner;
