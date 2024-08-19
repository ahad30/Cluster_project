"use client"
import React from 'react'
import Banner from './Banner'
import PartnerProgram from './PartnerProgram'
import SelectCountry from './SelectCountry'
import AboutProduct from './AboutProduct'

const About = () => {
  return (
    <div>
      <Banner/>
      <PartnerProgram/>
      <AboutProduct/>
      <SelectCountry/>
    </div>
  )
}

export default About