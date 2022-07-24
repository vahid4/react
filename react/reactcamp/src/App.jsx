import "./App.css";
import { useEffect,useState } from "react";
import DessertCard from "DessertCard.jsx"


//https://random-data-api.com/api/dessert/random_dessert?size=100



const App =()=>{
const[kolac, drugiKolac]=useState(0)
const dessert=async() =>{
  const response= await fetch("https://random-data-api.com/api/dessert/random_dessert?size=100")
 const data=await response.json()
    
    drugiKolac([ data])
    console.log(data);
    
  };

useEffect(()=>{
  dessert()
}, []);

  return(
    <div className="container">
      {kolac.map((e)=>{
        return <DessertCard des={e} key={e.uid} />
      })}
    </div>
    
    
  
);
    }
;
export default App

