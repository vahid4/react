import React from "react";
import Product from "./Product";

// const  MainCart=(props)=> {
// const{products}=props;

//     return(
//         <main className="block col-2">
//             <h2>Products</h2>
//             <div className="row">
//                 {products.map((products)=>(
//                     <Product key={products.id} products={products}></Product>
//                 ))}
//             </div>
//         </main>
//     )
// }


export default function MainCart(props) {
    const{products}=props;
    console.log(products)
    return (
        <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
            {products.map((product)=>(
                <Product key={product.id} product={product}></Product>
            ))}
        </div>
    </main>
  )
}


