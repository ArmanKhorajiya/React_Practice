import React, { useState } from "react";

function App(){
  const [n,setN]=useState();
  function Random(){
    setN(Math.floor(Math.random()*100)+1)
  }

  return(
    <div>
      <h1>Random Number Generator</h1>
      <button onClick={Random}>Generate Number</button>
      <h2>{n}</h2>
    </div>
  )
}

export default App;