import { useState } from "react";

function Toggle(){
  const [show,setShow]=useState(true);
  const Showtoggle=()=>{setShow(!show)};
  return(
      <div>
        <button onClick={Showtoggle}>Hide/Show</button>
        {show && <p>Hello World</p>}
      </div>
  )
}

export default Toggle;