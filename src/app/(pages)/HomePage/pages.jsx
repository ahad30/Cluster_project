"use client"
import React from 'react'
import Slider from './Slider';
import HomeProduct from './HomeProduct/HomeProduct';
import BecomePartner from './BecomePartner';

const HomePage = () => {
  return (
    <div>
    <Slider/>
    <HomeProduct/>
    <BecomePartner/>
    </div>
  )
}

export default HomePage;