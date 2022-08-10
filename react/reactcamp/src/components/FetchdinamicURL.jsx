import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Fetchprimer() {
 const [post, setPost]= useState({})
 const [id, setId]=useState(1)
 const [idfrombtn, setIDfrombtn]=useState(1)

 const handleClick=()=>{
    setIDfrombtn(id)
 }
 
 useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombtn}`)
    .then(res=>{
        console.log(res)
        setPost(res.data)
    }
    ).catch(err=>{
        console.log(err)
    })
 }, [idfrombtn])
    return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Post</button>    
    <div>{post.title}</div>
    {/* {<ul>
    {
    posts.map(post=>(
        <li key={post.id} >{post.title} </li>
    ))}
    </ul> } */}
    </div>
  )
}

export default Fetchprimer