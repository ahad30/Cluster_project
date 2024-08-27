import React from 'react'
import BackImage from '../../../../public/Partner Program/Elements/Banner-1.png';
import Link from 'next/link';

const PartnerBanner = () => {

   const handleClick = () => {
    console.log("clicked")
   }
  return (
    <>
    <section className="bg-primary text-white py-20 relative h-[350px]">
    <div className="container mx-auto text-center">
      <h2 className="lg:text-3xl font-semibold mb-6">Become our partner</h2>
     
      <p className="text-[14px] mb-8">
       Dont lose your chance to become our distributor and sell antivirus solutions under cluster! brand name.
      </p>

    </div>
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{ backgroundImage: `url(${BackImage.src})` }}
    ></div>
  </section>
  <div className='relative max-w-7xl mx-auto'>
  <div className=' ml-[80px]  md:ml-[580px] -mt-[145px] absolute'>
        <Link href="/Product" passHref>
          <button onClick={handleClick}
           className='bg-white text-green-500 px-3 py-2 cursor-pointer'>
            Sell Cluster Products
          </button>
        </Link>
        </div>
  </div>
    </> 
  )
}

export default PartnerBanner
