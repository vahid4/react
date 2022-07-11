const Card=()=>{
 return(   <div className="card">
<input type="text" onChange={()=>{
    console.log("U changed input-task")
}}/>
<button className="submit" onClick={()=>{
    console.log("Element submited")
}}>Submit</button>
<button className="delete" onClick={()=>{
    console.log("Deleted")
}}>Delete</button>
</div>)
}
export default Card