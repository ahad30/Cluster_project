import React from "react";
import Image from "next/image";
import Logo from "../../../../public/logo-2.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = (props) => {
  return (
    <div>
      <footer className="bg-[#0b1219] mt-8">
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-10">
          <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-3">
            <div className="mb-5 lg:mb-0">
              <div className="text-teal-600 flex lg:justify-start justify-center">
                <Image
                  src={Logo}
                  alt="Cluster"
                  className="w-[120px] h-[30px]"
                />
              </div>
              <div>
                <p className="mt-4  lg:max-w-xs text-white text-sm">
                  Copyright © 2020-2024
                  <br />
                  Cluster Technologies Ltd.
                  <br />
                  Privacy policy
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-7 lg:gap-16 lg:col-span-2">
              <div>
                <p className="font-medium text-green-500">
                  Our Partner Program
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  <li>
                    <Link href="/PartnerProgram">
                      <div className="text-white transition hover:opacity-75">
                        Distributor
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href="/PartnerProgram">
                      <div className="text-white transition hover:opacity-75">
                        Reseller
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href="/PartnerProgram">
                      <div className="text-white transition hover:opacity-75">
                        Affiliate
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-green-500">Products</p>

                <ul className="mt-6 space-y-2 text-sm">
                  <li>
                    <Link href="/Product" passHref>
                      <div className="text-white transition hover:opacity-75 cursor-pointer">
                        Cluster Antivirus
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Product" passHref>
                      <div className="text-white transition hover:opacity-75 cursor-pointer">
                        Cluster Internet Security
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Product" passHref>
                      <div className="text-white transition hover:opacity-75 cursor-pointer">
                        Cluster Total Security
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Product/clusterBusiness" passHref>
                      <div className="text-white transition hover:opacity-75 cursor-pointer">
                        Antivirus for Business
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-green-500  w-full">
                  Contact Information
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center text-white justify-center lg:justify-start">
                    <FaPhoneAlt className="text-green-500 mr-2" />
                    <span className=""> +8809614502010</span>
                  </li>

                  <li className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center text-white justify-center lg:justify-start">
                    <FaEnvelope className="text-green-500 mr-2" />
                    <span className="">info@clusterantivirus.com</span>
                  </li>

                  <li className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center text-white justify-center lg:justify-start">
                    <FaMapMarkerAlt className="text-green-500 mr-2" />
                    <span className="text-[12px]">
                    C/O Merger Group, Road: 2, Plot: 308, Agrabad CDA,
                      <br />
                      Chittagong - 4100, Bangladesh
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
