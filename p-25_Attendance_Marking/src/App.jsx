import React from "react";
import Cards from './components/Cards';

function App(){
  return(
    <div>
      <h1>Attendance Marking </h1>
      <div>
        <Cards name="Studnet1" roll_no="101"/>
        <Cards name="Studnet2" roll_no="102"/>
        <Cards name="Studnet3" roll_no="103"/>
        <Cards name="Studnet4" roll_no="104"/>
        <Cards name="Studnet5" roll_no="105"/>
      </div>
    </div>
  )
}

export default App;