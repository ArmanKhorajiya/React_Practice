import React, { useState } from "react";
import {Routes,Route, useNavigate, useNavigate} from "react-router-dom";

function App(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLogin,setIsLogin]=useState(false);
  const useNavigate=useNavigate
  function handleSubmit(){
    setIsLogin(true);
    if(isLogin(true)){
      <Routes>
        <Route path="./home" element={Home}/>
      </Routes>
    }
  }

  return(
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label>Password:</label>
        <input type="text" value={password} placeholder="Enter Email" onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isLogin && <p>Login Successfully</p>}
    </div>
  )
}

export default App;