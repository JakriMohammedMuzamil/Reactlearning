import React from 'react'

const App = () => {
  
  //setitem
  localStorage.setItem('name','zoo');
  localStorage.setItem('age','12');
  localStorage.setItem('city','goa');

  //getitem
  const cityy =localStorage.getItem('city');
  console.log(cityy)

  // removeitem
  localStorage.removeItem('name');

  //clear  
  localStorage.clear();

  const user={
    name:'muzamil',
    age:10,
    city:'mangalore'
  }

  localStorage.setItem('user',JSON.stringify(user))

  const data= JSON.parse(localStorage.getItem('user'))
  console.log(data)

  return (
    <div>
      <button>click</button>
    </div>
  )
}

export default App
