import React from 'react'
import BackImage1 from '../../../../public/Support/Banner.png';

const SupportBanner = () => {
  return (
    <section className="bg-primary -z-40 text-white py-20 relative h-[400px] hidden lg:block mb-10">
    <div className="lg:max-w-7xl lg:px-10 mx-auto">
      <h2 className="lg:text-2xl font-normal mb-6">Welcome to Cluster Antivirus Support</h2>
     <div className='mt-10'>
      <p>Mail:</p>
      <p>help@clusterantivirus.com</p>
      <p className='mt-3'>Phone:</p>
      <p className=''>+8809614502010</p>
     </div> 
    </div>
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{ backgroundImage: `url(${BackImage1.src})` }}
    ></div>
    
  </section>
  )
}

export default SupportBanner;