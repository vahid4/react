import "./App.css";
import Card from "./components/Card";
import { useState } from "react";



const App =()=>{
    const [isCardShown, setisCardShown] = useState(false)
    return(
      <div className="container">
        <button 
        onClick={()=>{
            console.log("btn is clicked");
            setisCardShown(!isCardShown)
            console.log(isCardShown);
        }}
        >Show/Hide</button>
        {isCardShown &&<Card value={"nesto"}></Card>}
        </div>
    )    
};
export default App
