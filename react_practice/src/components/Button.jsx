import React from 'react'

function Button({text}) {
  return (
    <button className='bg-zinc-900 px-6 rounded-lg py-2 text-white'>{text}</button>
  )
}

export default Button;