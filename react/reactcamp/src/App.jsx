import "./App.css";
import { useState } from "react";
import Card from "./components/Card";



const App =()=>{
   
  return(
    <div className="container">
    <h1>Vahid's todo list</h1>
    <div className="form">
<input type="text" onChange={()=>{
console.log("Changed")
}}/>
<button onClick={()=>{
console.log("Clicked")
}}>Add</button>
    </div>

<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
    </div>
    
     
);
  
};
export default App

