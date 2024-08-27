"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Common/Header/Header";
import Footer from "@/components/Common/Footer/Footer";
import { PartnerProvider } from "@/components/PartnerProvider";
import "./globals.css";
import Image from "next/image";
import Image1 from "../../public/logo.png"
import Image2 from "../../public/Objects.png"
import { Spin } from "antd";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [country, setCountry] = useState("");
  // const router = useRouter();

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    // if (selectedCountry) {
    //   router.push("/");
    // }
    
  };


  return (
    <html lang="en">
      <body>
        <PartnerProvider>
          {!country ? (
           <>
           <div>
            <div className="flex flex-col items-center justify-center bg-cover bg-center min-h-screen"
           style={{ backgroundImage: `url(${Image2.src})` }}
            >
            <Image
          src={Image1}
          alt={""}
          className="mb-10 object-cover"
        />
              <span className="mb-6 uppercase text-base lg:text-2xl font-semibold">Select a country/region</span>
             <div className="">

             <select
                value={country}
                onChange={handleCountryChange}
                className="px-4 py-2 border-2 border-primary outline-none lg:w-[330px]"
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="Bangladesh">Bangladesh</option>
  <option value="Canada">Canada</option>
  <option value="Hongkong">Hongkong</option>
  <option value="India">India</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Malaysia">Nepal</option>
  <option value="Singapore">Singapore</option>
  <option value="Turkey">Turkey</option>
  <option value="United Arab Emirates">United Arab Emirates</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="United States">United States</option>
              </select>
             </div>
            </div>
           </div>
           </>
          ) : (
            <>
              <Header />
              <div className="min-h-screen">{children}</div>
              <Footer />
            </>
          )}
        </PartnerProvider>
      </body>
    </html>
  );
}
