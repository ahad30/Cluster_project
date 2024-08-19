"use client"
import React from 'react'
import Banner from './Banner'
import SelectCountry from './SelectCountry'
import AboutProduct from './AboutProduct'
import AboutPartnerProgram from './AboutPartnerProgram'

const About = () => {
  return (
    <div>
      <Banner/>
      <AboutPartnerProgram/>
      <AboutProduct/>
      <SelectCountry/>
    </div>
  )
}

export default About