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
import UseLoader from "@/components/UseLoader";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return () => clearTimeout(timer);
}, []);


  return (
    <html lang="en">
      <body>

            <>
            {  
              isLoading ? ( 
                <div>
                  <UseLoader/>
                </div>
          ): 
          (
              
              <div className="">{children}</div>
          )
        }
            </>
      </body>
    </html>
  );
}
