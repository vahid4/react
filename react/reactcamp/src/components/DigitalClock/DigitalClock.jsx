import React, { useState } from "react";
import DigitalC from "../DigitalClock/DigitalC.css";

function DigitalClock() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);
 const UpdateTime=()=>{
    
 }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={UpdateTime}>get time</button>
    </div>
  );
}

export default DigitalClock;
