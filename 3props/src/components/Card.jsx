import React from 'react'

const Card = ({name , skill, city, image}) => {
  return (
        <div className="card">
        <img src={image} alt="" />
         <h1>{name}</h1>
         <p>My skill is {skill},and i live in {city}</p>
         <button>View Profile</button>
        </div>
  )
}

export default Card;
