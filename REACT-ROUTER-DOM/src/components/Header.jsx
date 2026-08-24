import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{padding: 20}}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
    
  )
}

export default Header

