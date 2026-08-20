import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='p-6 flex items-center justify-center flex-col has-[70vh]:'>
      <h1 className='text-[7vw] tracking-tighter font-bold'>Coding Gita</h1>
      <p className='text-xl tracking-tight'>Black Magic of React JS</p>
      <Button text="Follow Me"/>
    </div>
  )
}

export default Hero