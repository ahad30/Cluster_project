/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import ProductTab from "./ProductTab";
import ProductCard from "./ProductCard";
import FeaturesTable from "./FeaturesTable/FeaturesTable";
import product1Image from "../../../../public/Products/Elements/Product-1.png"
import product2Image from "../../../../public/Products/Elements/Product-2.png"
import product3Image from "../../../../public/Products/Elements/Product-3.png"
import BecomePartner from "../HomePage/BecomePartner";
import DashboardTitle from "@/components/DashboardTitle";

const products = [
  {
    id:1,
    image: product1Image,
    title: "Cluster Antivirus",
    description: "Advanced Security for small and medium companies.",
    price: "790",
    features: [
      "Guard (File Monitor)",
      "Inspector Security (Behavioral Analyzer)",
      "Mail-filter",
      "USB-protection",
      "Heuristic analyzer",
    ],
    
  },
  {
    id:2,
    image: product2Image,
    title: "Cluster Internet Security",
    description: "Solution which is ideal for active internet users",
    price: "1099",
    features: [
      "Guard (File Monitor)",
      "Inspector Security (Behavioral Analyzer)",
      "Mail-filter",
      "USB-protection",
      "Heuristic analyzer",
      "Firewall",
      "Anti-fishing",
      "Anti-spam",
      "Virtual keyboard",
      "Optimizer PC",
      "File-shredder",
    ],
  },
  { 
    id:3,
    image: product3Image,
    title: "Cluster Total Security",
    description:
      "Product which will provide you the highest level of protection",
    price: "1450",
    features: [
      "Guard (File Monitor)",
      "Inspector Security (Behavioral Analyzer)",
      "Mail-filter",
      "USB-protection",
      "Heuristic analyzer",
      "Firewall",
      "Anti-fishing",
      "Anti-spam",
      "Virtual keyboard",
      "Optimizer PC",
      "File-shredder",
      "Parental Control",
      "Process Manager",
      "Startup Manager",
      "Privacy Protection"
    ],
  },
];


const features = [
  {
    name: "Guard (File Monitor)",
    description: "Continuously monitors the system for threats."
  },
  {
    name: "Inspector Security (Behavioral Analyzer)",
    description: "Monitors the programs installed on your computer to identify malicious activity."
  },
  {
    name: "Mail-filter",
    description: "Scans email for threats."
  },
  {
    name: "USB-protection",
    description: "Makes penetration of virus threats via removable drives impossible."
  },
  {
    name: "Heuristic analyzer",
    description: "Analyzes the software code for its match against viruses."
  },
  {
    name: "Firewall",
    description: "Sets the rules of incoming and outgoing connections for programs installed on your PC."
  },
  {
    name: "Anti-fishing",
    description: "Blocks websites designed to steal personal user data."
  },
  {
    name: "Anti-spam",
    description: "Blocks penetration of spam messages on the user's PC."
  },
  {
    name: "Virtual keyboard",
    description: "Saves the password from being stolen by hackers."
  },
  {
    name: "Optimizer PC",
    description: "Allows identifying junk system files and freeing more disk space."
  },
  {
    name: "File-shredder",
    description: "Provides the removal of information without the possibility of restoration."
  },
  {
    name: "Parental Control",
    description: "Provides parents an effective tool for monitoring a child's activity on the PC."
  },
  {
    name: "Process Manager",
    description: "Acts as a built-in controller of applications and processes, allowing you to control and manage running applications and processes."
  },
  {
    name: "Startup Manager",
    description: "A program that allows you to analyze the applications that are loaded at startup and optimize boot time by disabling applications and some system functions that are not used."
  },
  {
    name: "Privacy Protection",
    description: "A program that allows removing traces of the user's work on the PC."
  }
]

  

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedTab, setSelectedTab] = useState("Endpoint Security");

  return (
    <div className="lg:max-w-7xl lg:px-10 mx-auto p-6">
         <DashboardTitle windowTitle={'Products'}/>
       <h1 className="font-bold">Select the antivirus protection that's right for you!</h1> 
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        <ProductTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="col-span-3">
          <ProductCard products={products} />
        </div>
      </div>
      <div className="">
      <FeaturesTable features={features} products={products} />
      </div>
      <div>
        <BecomePartner/>
      </div>
    </div>
  );
};

export default page;
