import React from "react";
import Icon1 from "../../../../public/Partner Program/Elements/Icon-1.png";
import Icon2 from "../../../../public/Partner Program/Elements/Icon-2.png";
import Icon3 from "../../../../public/Partner Program/Elements/Icon-3.png";
import Icon4 from "../../../../public/Partner Program/Elements/Icon-4.png";
import Icon5 from "../../../../public/Partner Program/Elements/Icon-5.png";
import Icon6 from "../../../../public/Partner Program/Elements/Icon-6.png";
import IconGreen from "../../../../public/Partner Program/Elements/Icon-green.png";
import IconBlack from "../../../../public/Partner Program/Elements/Icon-black.png";

import Image from "next/image";

const Stepper = () => {
  const programs = [
    {
      title: "Contact",
      description: "Get in touch ",
      image: Icon1, // First 
      icon: IconGreen
    },
    {
      title: "Receive",
      description: "details and information.",
      image: Icon2, // Second 
      icon: IconBlack
    },
    {
      title: "Choose",
      description: "Select the program.",
      image: Icon3, // Third 
      icon: IconBlack
    },
    {
      title: "Agree",
      description: "Agree on the terms",
      image: Icon4, // Fourth 
      icon: IconBlack
    },
    {
      title: "Sign",
      description: "Sign the agreement",
      image: Icon5, // Fifth 
      icon: IconBlack
    },
    {
      title: "Start",
      description: "Begin your journey",
      image: Icon6, // Sixth 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 mt-10">
      <div className="lg:flex lg:flex-row items-center lg:gap-x-5 space-y-3 lg:space-y-0">
        {programs.map((program, index) => (
            <>
          <div 
            key={index} 
            className={`text-center border-2 py-6 px-3
          ${index === 0 ? 'border-green-500 w-[180px] h-[215px]' : 'border-gray-400'}`}
          >
            <Image
              src={program.image}
              alt={program.title}
              className="w-[70px] h-[70px] mx-auto bg-green-500 p-5 mb-5 rounded-full"
            />
            <h3 className="text-base font-semibold mb-2">{program.title}</h3>
            <p className="text-gray-700 text-center text-[14px]">
              {program.description}
            </p>
          </div>
           <div>
              {program?.icon && (
                  <div>
                <Image
                  src={program.icon}
                  alt={program.title}
                  className="w-[20px] h-[20px] hidden md:block"
                  />
              </div>
            )}
           </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
