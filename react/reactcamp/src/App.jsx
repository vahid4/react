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
import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo"
import Cart2 from "./components/Cart2/Cart2";
import { useContext } from "react";
import CardContext from "./components/UseContext/CardContext";
import MyComponent from "./components/UseContext/MyComponent";

//https://rapidapi.com/divad12/api/numbers-1/

export const UserContext=React.createContext();
const App =()=>{
const [myState, setmyState] = useState("vahid")

  
  return(
    <UserContext.Provider/>
    <div>
     <CardContext/>
     <MyComponent/>
    </div>
    <UserContext.Provider/>
  )

    }

export default App

