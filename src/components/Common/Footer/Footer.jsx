import React from "react";
import Image from "next/image";
import Logo from "../../../../public/logo-2.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <div>
      <footer className="bg-[#0b1219] mt-8">
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-10">
          <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-3">
            <div className="mb-5 lg:mb-0">
              <div className="text-teal-600 flex lg:justify-start justify-center">
                <Image src={Logo} alt="Cluster" className="w-[120px] h-[30px]" />
              </div>
              <div>
                <p className="mt-4 max-w-2xl lg:max-w-xs text-white text-xs">
                  Copyright © 2020-2021
                  <br />
                  Cluster Technologies
                  <br />
                  License agreement
                  <br />
                  Privacy policy
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:col-span-2">
              <div>
                <p className="font-medium text-green-500">Our Partner Program</p>

                <ul className="mt-6 space-y-2 text-xs">
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Distributor
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Reseller
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Affiliate
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-green-500">Products</p>

                <ul className="mt-6 space-y-2 text-xs">
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Cluster! Antivirus
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Cluster! Internet Security
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Cluster! Total Security
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Antivirus for Business
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-green-500  w-full">Contact Information</p>

                <ul className="mt-6 space-y-2 text-xs">
      <li className="flex items-center text-white">
        <FaPhoneAlt className="text-green-500 mr-2" />
        <span className="">+380 63 233 0522</span>
      </li>

      <li className="flex items-center text-white">
        <FaEnvelope className="text-green-500 mr-2" />
        <span className="">help@clusterantivirus.com</span>
      </li>

      <li className="flex items-center text-white">
        <FaMapMarkerAlt className="text-green-500 mr-2" />
        <span className="">
          WQ Tower, Road#2, Plot 306, Agrabad CDA,
          <br />
          Chittagong - 4000, Bangladesh
        </span>
      </li>
    </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
