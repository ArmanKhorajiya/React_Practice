import React from 'react'
import Button from './Button'

function Header() {
  return (
    <div className='p-6 flex items-center justify-between'>
      <h2 className='font-semibold tracking-tighter text-2x1'>Coding Gita</h2>
        <div className='flex items-center gap-4'>
            <a href="">Blogs</a>
            <a href="">Contact Us</a>
            <a href="">About Us</a>
        </div>
        <Button text='Login'/> 
    </div>
  )
}

export default Header
