import React from 'react'
import { FaBookmark } from "react-icons/fa";

const Card = (props) => {
  return (
        <div className="card">
            <div className="top">
                <img src={props.brandLogo} alt="" />
                <button>Save<FaBookmark className='bookmark'/></button>
             </div>
             <div className="center">
                <h4>{props.companyName}<span>{props.datePosted}</span></h4>
                <h3>{props.post}</h3>
                 <div className="tags">
                     <span className="tag">{props.tag1}</span>
                     <span className="tag">{props.tag2}</span>
                 </div>
             </div>
            <div className="bottom">
                <div className='line'>
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
                </div>
            </div>
        </div>
  )
}

export default Card
