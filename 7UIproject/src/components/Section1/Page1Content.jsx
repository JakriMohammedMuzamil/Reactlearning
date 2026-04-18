import React from 'react'
import RightContent from './RightContent.jsx'
import LeftContent from './LeftContent.jsx'

const Page1Content = (props) => {
  return (
    <div className=' h-full flex items-center gap-8 p-6 '>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content