"use client"
import React from 'react'
import Banner from './Banner'
import SelectCountry from './SelectCountry'
import AboutProduct from './AboutProduct'
import AboutPartnerProgram from './AboutPartnerProgram'
import DashboardTitle from '@/components/DashboardTitle'

const About = () => {
  return (
    <div>
         <DashboardTitle windowTitle={'About'}/>
      <Banner/>
      <AboutPartnerProgram/>
      <AboutProduct/>
      <SelectCountry/>
    </div>
  )
}

export default About