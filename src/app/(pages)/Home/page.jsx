"use client"
import React from 'react'
import HomePage from '../HomePage/pages'
import DashboardTitle from '@/components/DashboardTitle'

const Home = () => {
  return (
    <div>
      <DashboardTitle windowTitle={'Home'}/>
      <HomePage/>
    </div>
  )
}

export default Home
