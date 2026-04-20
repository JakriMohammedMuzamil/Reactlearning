import React from 'react'

const App = () => {
    const submitHandler = (e) => {
      e.preventDefault();
          console.log("submited");
          console.log(e.value);
          
      }
  return (
    <div>
      <form onSubmit={(e)=>(            //we can also pass only submitHandler react we automatically pass e
        submitHandler(e))
        }>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
