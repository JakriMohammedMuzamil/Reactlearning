import React, { useState } from 'react'

const App = () => {

    const [num, setNum] = useState({user:"muzamil", age:20})

    const btnClicked = ()=> {
    //   const newNum={...num};
    //   console.log(newNum);
    //    newNum.user='Muzza';
    //    console.log(newNum);
    //    setNum(newNum)
    //     setNum({age:21})
    //     console.log(num);
    
    setNum(prev=>({
            ...prev,
            user:'john'
    }));

    }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
