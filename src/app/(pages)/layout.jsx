"use client";

import React from "react";
import "../globals.css";
import Header from "@/components/Common/Header/Header";
import Footer from "@/components/Common/Footer/Footer";
import { PartnerProvider } from "@/components/PartnerProvider";

const HomeLayout = ({ children }) => {
  return (
    <>
     <PartnerProvider>
     <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
     </PartnerProvider>
    </>
  );
};

export default HomeLayout;
