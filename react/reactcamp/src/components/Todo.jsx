import Card from "./Card"
const Todo =()=>{
    return(
        <div className="container">
        <h1>Vahids todo list</h1>
        <div className="form">
<input type="text" onChange={()=>{
    console.log("Changed")
}}/>
<button onClick={()=>{
    console.log("Clicked")
}}>Add</button>
        </div>

<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />

        </div>
        
         
    );
};
export default Todo
