import React from 'react'
import BackImage from '../../../../public/About us/About us Elements/map-2.png'; 

const SelectCountry = () => {
  return (
   
         <section className=" text-white mx-auto py-16 relative mb-10 h-[500px] w-[90%] lg:max-w-4xl lg:px-10">
      <div className="container  mx-auto text-center">
        {/* <h1 className="text-4xl font-bold mb-4 text-black">Cluster! Antivirus</h1> */}
      
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackImage.src})` }}
      ></div>
    </section>
  
  )
}

export default SelectCountry
