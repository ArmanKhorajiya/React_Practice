import React from 'react'
import Button from './Button'

function Cards(props) {
  return (
    <div className='bg-zinc-200 rounded-xl w-64 flex-col overflow-hidden'>
        <img 
        className='w-full' 
        src={props.img} 
        alt="" /> 
        <div className='px-4 py-4 flex flex-col gap-2 '>
            <h2 className='text-xl font-semibold'>{props.title}</h2>
        <p>{props.desc}</p>
        </div>
        <Button text="Read More"/>
    </div>
  )
}

export default Cards
