import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(0)

  const increase=()=>{
    setnum(num+1);
  }
    const reset=()=>{
    setnum(0);
  }
    const decrease=()=>{
    if(num>0){
      setnum(num-1);
  }
}
  return (
    <div className='box'>
      <h1>{num}</h1>
     <div className='insidebox'>
     <button onClick={increase}>increase</button>
     <button onClick={decrease}>decrease</button> 
     <button onClick={reset}>Reset</button> 
     </div> 
    </div>
  )
}

export default App
