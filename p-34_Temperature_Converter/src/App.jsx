import React from "react";
import { useState } from "react";

function App(){
  const [c,setC]=useState("");
  const [f,setF]=useState("");
  function convert(){
    const r=(c*9)/5+32;
    setF(r);
  }

  return(
    <div>
      <h1>Temperature Converter</h1>
      <input type="number" placeholder="Enter Celsius" onChange={(e)=>setC(e.target.value)} />
      <button onClick={convert}>Convert to  Fahrenheit</button>
      <h2>{f}°F</h2>
    </div>
  )
}

export default App;