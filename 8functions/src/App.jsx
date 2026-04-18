import React from 'react'

const App = () => {

const changing = (e, text) => {
  console.log(text, e.target.value);
};
  return (
    <div>
      <button onClick={changing}>Clicked</button>
      <input type="text" onInput={(e) => changing(e, 'hello')}/>   
     </div>
  )
}

export default App
