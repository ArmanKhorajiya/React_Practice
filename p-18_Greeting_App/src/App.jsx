import React from "react";
import { useState } from "react";

function App(){
  const [name,setname]=useState("");
  const [msg,setmsg]=useState("");
  function handleSubmit(e){
    e.preventDefault();

    if(name===""){
      setmsg("Please Fill Details!!!");
    }
    else{
      setmsg(`Hello ${name}`);
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter name"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>{msg}</h2>
    </div>
  )
}

export default App;