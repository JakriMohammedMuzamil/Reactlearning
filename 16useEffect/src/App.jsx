import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(() => {
    console.log("useEffect is running");
    
  }, [num])
  

  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button onMouseEnter={()=>{
        console.log("enter");
        setNum(num+1);
      }}
      onMouseLeave={()=>{
        console.log("leave");
        setNum2(num2+100);
      }}
      >Click</button>
    </div>
  )
}

export default App
