import { useReducer, useState } from "react"

//...

const Card=()=>{
    
    const[bledo, setbledo]=useState(false)
   
   //const[change, dispatch]=useReducer(reducer, false)

 return(   <div className="card" style={{opacity:bledo?"0.5":"", marginLeft:bledo?"50px":""}}>
<input type="text" onChange={()=>{
    console.log("U changed input-task")
}}/>
<button className="submit"   onClick={()=>{{}
    console.log("Element submited")
    setbledo(!bledo)
    console.log(bledo);

}}>Submit</button>
<button className="delete" onClick={()=>{
    console.log("Deleted")
    setbledo(!bledo)
    console.log(bledo)
}}>Delete</button>
</div>)
}
export default Card