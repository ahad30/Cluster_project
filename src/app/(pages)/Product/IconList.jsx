"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Icon1 from "../../../../public/Products/Elements/Icon-1.png";
import Icon2 from "../../../../public/Products/Elements/Icon-2.png";
import Icon3 from "../../../../public/Products/Elements/Icon-3.png";
import Icon4 from "../../../../public/Products/Elements/Icon-4.png";
import Icon5 from "../../../../public/Products/Elements/Icon-5.png";
import Icon6 from "../../../../public/Products/Elements/Icon-6.png";
import Icon7 from "../../../../public/Products/Elements/Icon-7.png";

const IconWithDescription = ({ icon, alt, title, isHovered, hoveredIcon }) => {
  return (
    <div
      className={`transition-opacity duration-300 ${
        hoveredIcon ? 'opacity-10 z-40' : 'opacity-100'
      }`}
      onMouseOver={() => isHovered(title)}
      onMouseOut={() => isHovered(null)}
    >
      <Image src={icon} alt={alt} className="mx-auto" />
      <span className="block mt-2 text-center text-white text-[12px]">{title}</span>
    </div>
  );
};

const IconList = ({product}) => {
  // console.log(product)
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const getDescription = () => {
    const icon = product.find((icon) => icon.title === hoveredIcon);
    if (!icon) return null;

    return (
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 w-[80%]">
        <Image src={icon.descriptionIcon} alt='' className="mx-auto mb-2" />
        <p className="text-white text-lg mb-4">{icon.descriptionTitle}</p>
        <span className="text-white text-[12px]">{icon.descriptionText}</span>
      </div>
    );
  };

  return (
    <div className="relative grid grid-cols-3 gap-5">
      {product.map((item, index) => (
        <IconWithDescription key={index}
         {...item}  
         isHovered={setHoveredIcon} 
         hoveredIcon={hoveredIcon}/>
      ))}
      {getDescription()}
    </div>
  );
};

export default IconList;
