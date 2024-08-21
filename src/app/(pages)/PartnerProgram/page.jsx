"use client"
import React, { useState } from 'react'
import PartnerBanner from './PartnerBanner'
import Stepper from './Stepper'
import PartnerTabs from './PartnerTabs/PartnerTabs'
import QuickStartForm from './QuickStartForm'

const PartnerProgram = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePartnerClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <PartnerBanner/>
      <Stepper/>
      <PartnerTabs/>
      <QuickStartForm/>
    </div>
  )
}

export default PartnerProgram
