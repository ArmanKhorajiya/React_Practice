import React, { useState } from 'react'

function App() {
  const [selected,setSelected]=useState("");
  const msg=()=>{
    if(selected!=""){
      return `Selected Color: ${selected}`;
    }
  }

  return(
    <div>
      <h1>Quiz Option Selector</h1>
      <div>
        <h2><b>Ques:</b> Capital of India?</h2>
        <button onClick={()=> setSelected("Red")}>Red</button>
        <button onClick={()=> setSelected("Blue")}>Blue</button>
        <button onClick={()=> setSelected("Green")}>Green</button>
      </div>
    <h2>{msg()}</h2>
    </div>
  )
}

export default App