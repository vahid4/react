import { useState } from "react";
//import "./App.css";
const Counter =()=>{
    const[counter, setCounter]= useState(0)
    return(
        <div className="container">
          <div className="counterime"><h1>Counter</h1></div>
  
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
export default Counter
