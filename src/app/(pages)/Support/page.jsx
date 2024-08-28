import React from 'react'
import SupportBanner from './SupportBanner'
import SupportForm from './SupportForm'
import DashboardTitle from '@/components/DashboardTitle'

const page = () => {
  return (
    <div className='relative'>
         <DashboardTitle windowTitle={'Support'}/>
     <SupportBanner/>
    <div className=''>
    <SupportForm/>
    </div>
    </div>
  )
}

export default page