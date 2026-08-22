import React from "react";
import { useState } from "react";

function App(){
  const [Name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [msg,setmsg]=useState("");
  function handleSubmit(e){
    e.preventDefault();

    if(Name==="" || Email==="" || Password===""){
      setmsg("Please Fill all fields!!!");
    }
    else{
      setmsg("Form Submitted Successfully!!!");
    }
  }

  return(
    <div>
      <h1>Form Validation:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name:"/>
          <br />
          <label>Email:</label>
          <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email:"/>
          <br />
          <label>Password:</label>
          <input type="text" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password:"/>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>{msg}</h3>
    </div>
  );
}

export default App;