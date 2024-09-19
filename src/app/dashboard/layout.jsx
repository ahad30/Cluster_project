"use client"
import React  from 'react'
import "../globals.css"
import Navbar from '@/components/Common/Navbar/Navbar'
import Dashboard from './Dashboard'

const DashboardLayout = ({children}) => {

  return (
    <>
          <div className="overflow-y-hidden overflow-x-hidden">
            <div className="block md:flex md:flex-row justify-start h-screen relative">
            <div>
               <Dashboard/>
            </div>
    
          <div className="relative w-[100%]">
          <div className=" text-gray-900 h-screen overflow-y-scroll">
           <Navbar/>
           <div className='p-5  mx-auto'> {children}</div>
          </div>
        </div>
            </div>
          </div>
    </>
  )
}

export default DashboardLayout;