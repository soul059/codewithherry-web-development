import React from 'react'
import reactLogo from '../assets/react.svg'
import './card.css'

const card = ({user}) => {

  return (
    

    <div className='card'>
      <img src={reactLogo} alt="IMAGE" />
      <span>{user.title}</span>
      <p>{user.body}</p>
    </div>
  )
}

export default card
