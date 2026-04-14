import React from 'react'
import Card from './components/card'

const App = () => {
  const users =[{name:"muzamil", skill:"React", city:"Mangalore",image: "https://randomuser.me/api/portraits/men/1.jpg"},
                   {name:"John", skill:"java", city:"Bangalore",image: "https://randomuser.me/api/portraits/men/2.jpg"},
                   {name:"Doe", skill:"css", city:"Mumbai",image: "https://randomuser.me/api/portraits/women/1.jpg"}
      ]
  
  return (
    <div className='parent'>
      { users.map((user, index)=>(
        <Card 
          key={index}
          name={user.name}
          skill={user.skill}
          city={user.city}
          image={user.image}
        />
      ))
      }
    </div>
  )
}

export default App
