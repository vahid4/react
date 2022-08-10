import "./App.css";
import { useEffect,useState } from "react";
import Calculator from "./components/Calculator";
import Jokes from "./components/Jokes/Jokes";
import axios from "axios"
import HeaderCart from "./components/Cart2/HeaderCart";
import MainCart from "./components/Cart2/MainCart";
import BasketCart from "./components/Cart2/BasketCart";
import Fetchprimer from "./components/Fetchprimer";
//import data from './components/Cart2/Data'
import FetchdinamicURL from "./components/FetchdinamicURL"


//https://rapidapi.com/divad12/api/numbers-1/
const App =()=>{

  // const options = {
  //   method: 'GET',
  //   url: 'https://free-news.p.rapidapi.com/v1/search',
  //   params: {q: 'Elon Musk', lang: 'en'},
  //   headers: {
  //     'X-RapidAPI-Key': '4716e50c10msh7dc4b6698739090p12517ejsndb4695dbc617',
  //     'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
  //   }
  // };
  
  // const fetchnow=()=>{
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  // }
  // const[data,setData]=useState('')
  // const searchValue=""
  
  // return(
  //    <div className="App">
  //    <div className="inputdiv">
  //     <input type="text" onChange={(e)=>{searchValue= e.target.value}} />
  //     <button className="dugme" type="submit" onClick={()=>{
  //       fetchnow(searchValue)
  //     }}>Submit </button>
  //    </div>
  //    <div>
  //     <h1>Result:</h1>
  //    </div>
  //    </div>
     
  //   )
  
  return(
    <div>
      <FetchdinamicURL/>
    </div>
  )

    }

export default App

