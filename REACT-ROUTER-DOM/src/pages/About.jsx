import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const {state}=useLocation();
  

  return (
    <div>
      <h1>{state.message}</h1>
    </div>
  );
}

export default About;