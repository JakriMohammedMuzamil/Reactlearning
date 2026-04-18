import React from 'react'
import Navbar from './Navbar'
import PageContent from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full p-8'>
        <Navbar />
        <PageContent users={props.users}/>
    </div>
  )
}

export default Section1