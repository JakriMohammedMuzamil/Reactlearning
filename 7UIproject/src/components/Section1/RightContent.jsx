import React from 'react'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-3/4  p-6 flex flex-nowrap gap-5 rounded-b-4xl  overflow-x-auto no-scrollbar'>
        {props.users.map((user,index)=>
        <RightCard 
        key={index} 
        id={index} 
        img={user.img} 
        tag={user.tag}
        color={user.color}
       />
      )}
    </div>
  )
}

export default RightContent