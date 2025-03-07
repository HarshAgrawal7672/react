import React from 'react'
import "./card.css"

import profile from "../assets/profile.jpeg"
const card = (props) => {
  return (
    <div>
      <div className='card'>
        <img id="profile" src={profile} alt="Card" />
        <h2 id='usertitle' className='text-xl'>{props.title}</h2>
        <p id='userdescription' className='text-4xl'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

export default card
