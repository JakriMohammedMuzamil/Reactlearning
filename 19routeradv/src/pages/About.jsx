import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
const navigate= useNavigate()

const btnClicked =() =>{
    navigate('/')
}

  return (
    <div>
      <button onClick={btnClicked} className='bg-amber-200 rounded-2xl px-4 py-2 m-2 cursor-pointer active:scale-95'>return to home page</button>
      <h1>About Page</h1>
    </div>
  )
}

export default About
