import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/login">login</NavLink></li>
      </ul>
    </nav>
    
  )
}

export default navbar
