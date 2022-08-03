import React from "react";
import "./Jokes.css"
import smileyFace from "./happy-emoji.png"
import { useState, useEffect } from "react";

const Jokes=()=>{
const url="http://api.icndb.com/jokes/random"
const[isLoading, setisLoading]=useState(true);
const[joke, setJoke]=useState({});

async function getJoke(){
    setisLoading(true)
const response=await fetch(url)
const data=await response.json()
console.log(data);
setJoke(data);
setisLoading(false)
}

useEffect(()=>{
setTimeout(()=>{
    getJoke()
}, 3000)
},[])

    return(
        <section className="jokes-sec">
            <div className="containerjoke">
                <h2>Random Joke Generator</h2>
                <img src={smileyFace} alt="smiley" />
                <hr />
                {isLoading ? (
                    <h3>loading...</h3>
                ) :(<p>{joke.value.joke}</p>)}
                
                <hr />
                <button onClick={getJoke}>Generate New Joke</button>
            </div>

        </section>
    )
}

export default Jokes