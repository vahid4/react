import "./App.css";
import { useState } from "react";






const App =()=>{
    
  const[counter, setCounter]= useState(0)
  return(
      <div className="container">

         <button
         onClick={()=>{
          //console.log("Counter shoud -1");
          setCounter(counter-1);
          //console.log(counter);

         }} className="dugme">-1</button>
           <h1>{counter}</h1>
         <button
          onClick={()=>{
            //  console.log("Counter shoud -1");
              setCounter(counter+1);
             // console.log(counter);
  
             }}  className="dugme">+1</button>




      </div>
       
  );
};
export default App

