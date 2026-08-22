import React from "react";
import Cards from "./components/Cards";

function App(){
  return(
    <div>
      <h1>User Card List</h1>
      <Cards name='User 1' email='user1@gmail.com' role='Front-End'/>
      <Cards name='User 2' email='user2@gmail.com' role='Back-End'/>
      <Cards name='User 3' email='user3@gmail.com' role='Full-Stack'/>
      <Cards name='User 4' email='user4@gmail.com' role='Web-Designer'/>
    </div>
  )
}

export default App;