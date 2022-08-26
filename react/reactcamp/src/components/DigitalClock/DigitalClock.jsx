import React, { useState } from "react";
import DigitalC from "../DigitalClock/DigitalC.css";

function DigitalClock() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="container">
      <h1>{ctime}</h1>
    </div>
  );
}

export default DigitalClock;
