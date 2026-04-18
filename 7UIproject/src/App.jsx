import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
       
  const users=[
        {img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        color:'royalblue',
        tag:'Satisfied'},
        {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',  
        color:'lightgreen',
        tag:'Underserved'},
        {img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDF8MHx8fDA%3D',
        intro:'',
        color:'black',
        tag:'Underbanked'},
        {img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        color:'pink',
        tag:'Satisfied'},
        {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        color:'red',
        tag:'Underserved'}
      ]

  return (

    <div>
      <Section1 users={users}/>
      <Section2 />

    </div>

  )
}

export default App