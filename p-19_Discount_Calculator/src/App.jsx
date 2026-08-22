import React from "react";
import Cards from "./components/Cards";

function App(){
  return(
    <div>
      <Cards price={1000} discount={10}/>
    </div>
  )
}

export default App;