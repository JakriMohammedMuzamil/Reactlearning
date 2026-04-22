import React from 'react'

const Card = ({elem}) => {
  return (
    <div>
       <a href={elem.url} target='_blank'>
          <div className="h-60 w-60 overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
              src={elem.download_url}
              alt=""
            />
          </div>
          <h1 className="text-center">{elem.author}</h1>
        </a>
    </div>
  )
}
export default Card
