import React from 'react'
import { Routes,Route } from 'react-router-dom'

function Header() {
  return (
    <div style={{
      padding='20px'
    }}>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
    
  )
}

export default Header

