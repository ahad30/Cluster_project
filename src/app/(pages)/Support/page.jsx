import React from 'react'
import SupportBanner from './SupportBanner'
import SupportForm from './SupportForm'

const page = () => {
  return (
    <div className='relative'>
     <SupportBanner/>
    <div className=''>
    <SupportForm/>
    </div>
    </div>
  )
}

export default page