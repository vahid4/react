import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Link to={"/"}  />
    
    <Routes>
<Route path={"/"} element={<h1>nesto</h1>} />
<Route path='c' element={<h2>home</h2>}/>

    </Routes>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente eos excepturi explicabo at ab nobis perspiciatis optio, labore culpa necessitatibus sed. Suscipit iste fugit, ad iusto temporibus dolores laudantium.</p>

    </div>
  );
}

export default App;
