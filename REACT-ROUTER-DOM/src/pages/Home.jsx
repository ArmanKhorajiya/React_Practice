import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  function handleClick(){
    console.log("Button Clicked");
    alert("Hello User");
    navigate('./about',{state : {
      message : 'Chacha',
    }});
  }

  return (
    <div>
      Home
      <Link to='/about'>About</Link>
      <button onClick={handleClick}>Navigate to About Page</button>
    </div>
  )
}

export default Home;