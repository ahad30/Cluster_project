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

export default function RootLayout({ children }) {
  const [country, setCountry] = useState("");
  // const [loading, setLoading] = useState(true); 

  // useEffect(() => {

  //   const storedCountry = localStorage.getItem("selectedCountry");
  //   if (storedCountry) {
  //     setCountry(storedCountry);
  //   }
  //   // setLoading(false);
  // }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    // localStorage.setItem("selectedCountry", selectedCountry);
    
  };

// if(loading) {
//   return <div>loading..........</div>
// }

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
