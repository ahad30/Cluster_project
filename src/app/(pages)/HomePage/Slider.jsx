import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Image from "next/image";
import Image1 from "../../../../public/Homepage/Elements/Security-1.png";
import Image2 from "../../../../public/Homepage/Elements/Security-2.png";
import Icon1 from "../../../../public/Homepage/Elements/Icon-1.png";
import Icon2 from "../../../../public/Homepage/Elements/Icon-2.png";
import Icon3 from "../../../../public/Homepage/Elements/Icon-3.png";
import Icon4 from "../../../../public/Homepage/Elements/Icon-4.png";
import Icon5 from "../../../../public/Homepage/Elements/Icon-5.png";
import Icon6 from "../../../../public/Homepage/Elements/Icon-6.png";
import Icon7 from "../../../../public/Homepage/Elements/Icon-7.png";
import Icon10 from "../../../../public/Homepage/Elements/Icon-10.png";
import Icon11 from "../../../../public/Homepage/Elements/Icon-11.png";
import Icon12 from "../../../../public/Homepage/Elements/Icon-12.png";
import Icon13 from "../../../../public/Homepage/Elements/Icon-13.png";
import Icon14 from "../../../../public/Homepage/Elements/Icon-14.png";
import Icon15 from "../../../../public/Homepage/Elements/Icon-15.png";
import Icon16 from "../../../../public/Homepage/Elements/Icon-16.png";
import Icon17 from "../../../../public/Homepage/Elements/Icon-17.png";



const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <section
            className="bg-primary  mb-10  bg-no-repeat bg-cover 
    h-[700px] lg:h-[500px] bg-center"
          >
            <div className="w-[90%] lg:max-w-[1200px] mx-auto  px-4  lg:flex lg:items-center">
              <div>
                <Image
                  src={Image1}
                  alt=""
                  className="w-full h-[350px] lg:w-[600px] lg:h-[500px] object-cover"
                />
              </div>

              <div>
                <h1 className="font-zcool text-white text-center lg:text-start text-[20px] lg:text-[50px] mb-5">
                  Cluster Internet Security
                </h1>
                <div className="flex justify-center lg:justify-start items-center gap-7 mb-8">
                  <div className="">
                    <div className="flex justify-center">
                    <Image
                      src={Icon1}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[10px] lg:text-sm">Anti Fishing</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon2}
                      alt="Icon 1"
                      className="w-[30px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[10px] lg:text-sm">Virtual Keyboard</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon3}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[10px] lg:text-sm">Anti Spam</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon4}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[10px] lg:text-sm">Self Defense</p>
                  </div>
                </div>

                <h1 className=" text-white lg:text-[15px] text-center lg:text-end font-semibold mb-5 mt-5">
                  Improved internal functionality.
                </h1>
                <div className="flex items-center gap-7 justify-center lg:justify-end mb-5">
                  <div className="">
                    <div className="flex justify-center">
                    <Image
                      src={Icon5}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[10px] lg:text-sm">Anti-virus Scanner</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon6}
                      alt="Icon 1"
                      className="w-[30px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[10px] lg:text-sm">Firewall</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon7}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[10px] lg:text-sm">Pc Optimizer</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        
        <section
            className="bg-primary mb-10 bg-no-repeat bg-cover 
       h-[700px] lg:h-[500px] bg-center"
          >
            <div className="w-[90%] lg:max-w-[1200px] mx-auto pt-[50px] lg:pt-[80px] gap-[100px] lg:px-[100px] lg:flex">
         
              <div>
                <h1 className="font-zcool text-white text-center lg:text-start text-[20px] lg:text-[40px]">
                  Cluster Total Security
                </h1>
                <h1 className=" text-white text-sm text-center lg:text-start lg:text-[20px]  font-semibold mb-5 mt-3 lg:mt-0">
                  Maximum protection against cyber threats!
                </h1>
                <div className="flex items-center justify-center lg:justify-start  gap-5 mb-8 flex-wrap">
                  <div className="">
                    <div className="flex justify-center">
                    <Image
                      src={Icon10}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">
                    Process Manager
                      </p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon11}
                      alt="Icon 1"
                      className="w-[30px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">Parental Control</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon12}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">Privacy Protection</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon13}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">Startup Manager</p>
                  </div>
                </div>

                <h1 className=" text-white lg:text-[15px] text-center lg:text-start  font-semibold mb-5 mt-5">
                  Improved internal functionality.
                </h1>
                <div className="flex items-center gap-8 justify-center lg:justify-start  mb-5">
                  <div className="">
                    <div className="flex justify-center">
                    <Image
                      src={Icon14}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">
                      Anti-phishing</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon17}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">Firewall</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon3}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">
                      Anti Spam</p>
                  </div>
                  <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={Icon16}
                      alt="Icon 1"
                      className="w-[20px] h-[20px]"
                    />
                    </div>
                    <p className="mt-2 text-white text-[7px] lg:text-[12px]">
                      Complex Protection</p>
                  </div>
                 
                </div>
              </div>
              <div>
                <Image
                  src={Image2}
                  alt=""
                  className="w-full object-cover lg:h-[330px]"
                />
              </div>
            </div>
          </section>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
