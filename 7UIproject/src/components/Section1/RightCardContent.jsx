import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h1 className='bg-white h-10 w-10 rounded-full flex justify-center items-center font-bold'>{props.id+1}</h1>
            <div>
                <p className='text-lg leading-relaxed mb-10 font-semibold text-white text-shadow-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus alias ratione totam enim necessitatibus reprehenderit.</p>
                <div className='flex justify-between'>
                 <button style={{backgroundColor:props.color}} className=' text-white rounded-3xl px-5 py-2 font-semibold '>{props.tag}</button>
                 <button style={{backgroundColor:props.color}} className=' text-white rounded-3xl px-3 py-2 font-semibold'><i class="ri-arrow-right-line"></i></button>
                 </div>
            </div>
        </div>
  )
}

export default RightCardContent
