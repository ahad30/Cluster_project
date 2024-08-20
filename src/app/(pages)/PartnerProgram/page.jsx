import React from 'react'
import PartnerBanner from './PartnerBanner'
import Stepper from './Stepper'
import PartnerTabs from './PartnerTabs/PartnerTabs'
import QuickStartForm from './QuickStartForm'

const PartnerProgram = () => {
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
