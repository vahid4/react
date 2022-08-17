import BasketCart from "./BasketCart"
import HeaderCart from "./HeaderCart"
import MainCart from "./MainCart"
import Data from "./Data"
import { useState } from "react"


const Cart2 =(props)=>{
const [cartItems, setcartItems] = useState([])

const onAdd=(product)=>{
  const exist = cartItems.find((x)=>x.id===product.id);
  if (exist) {
    setcartItems(cartItems.map(x=>x.id===product.id ?{...exist, qty:exist.qty+1}:x))
    
  }
  else{
    setcartItems([...cartItems, {...product, qty:1}])
  }
}

    return(
       <div className="App">
      <HeaderCart/>
      <div className="row">
        <MainCart onAdd={onAdd} products={Data.products}/>
        <BasketCart onAdd={onAdd} cartItems={cartItems} ></BasketCart>
      </div>
       </div>
       
      )
    
  
      }
  
  export default Cart2
  
  