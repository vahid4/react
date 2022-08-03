import "./App.css";
import { useEffect,useState } from "react";
import Calculator from "./components/Calculator";
import Jokes from "./components/Jokes/Jokes";
import axios from "axios"


//https://rapidapi.com/divad12/api/numbers-1/
const Axiosvezba =()=>{
//  async function nesto(){
//   const response=await fetch("https://rapidapi.com/divad12/api/numbers-1/")
// const data=await response.json()
// console.log(data);
//  }

const options={
  method:"GET",
  url:"https://numbersapi.p.rapidapi.com/7/24/date",
  params:{fragment:"true", json:"true"},
  headers:{
    'X-RapidAPI-Key': '4716e50c10msh7dc4b6698739090p12517ejsndb4695dbc617',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    
  },
};

    const [data, setData]=useState([]);
   const fetchNumberData=async()=>{
    const res=await axios.request(options).catch((err)=>console.log(err))
  setData(res);
  console.log(res); 
  
  }
useEffect(()=>{
  fetchNumberData();
}, []);
 
const[inputedDate, setinputedDate]=useState("")

const search=()=>{
  options.url=`https://numbersapi.p.rapidapi.com/${inputedDate}/date`
  fetchNumberData()
}




  return(
     <div>
    <input type="text" onChange={(date)=>setinputedDate(date.target.value)} />
    <button onClick={search}>Search</button>
     </div>
    )
  

    }

    export default Axiosvezba