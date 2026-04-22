import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  //calling API through fetch tht returns JSON response object 
  // and later convert  it to use original data
  // const GetData= async ()=>{
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  //   const data = await response.json()
  //   console.log(data);  
  // }

  //Use AXIOS where u no need to worry about jSON 
  // conversion it directly provides the already processed already parsed JSON response obj and can use it .data
  const GetData= async ()=>{
    const response= await axios.get('https://jsonplaceholder.typicode.com/todos')
    
    setData(response.data);
  }

  // fetch → raw response → need .json()
  // Axios → parsed response → direct .data

  return (
    <div>
      <button onClick={GetData}>Get Data</button>
      {data.map((elem, idx)=>{
        return <h3 key={elem.id}>hello {elem.title} ,{idx} , userid is {elem.userId}</h3>
      })}
    </div>
  )
}

export default App
