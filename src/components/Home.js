import React, { useContext } from "react";
import globalContext from "./Context/Createcontext";
function Home() {
  const {state, dispatch} = useContext(globalContext);
  console.log(state)
  const products = state.products;
  return <div className="home_container">
    <div className="product_container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="info">
            <p className="name">{product.title}</p>
            <p className="price">${product.price}</p>
            </div>
            {state.cart.some((p)=> p.id === product.id) ? (
              <button className="cart_remove_btn" onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: product.id})}>Remove from Cart</button>
            ):(<button className="cart_btn" onClick={() => dispatch({type: "ADD_TO_CART", payload: {id:product.id, price:product.price, qty:1, image:product.image, title:product.title}})}>Add to Cart</button>)}
            
          </div>
        ))}
    </div>
  </div>;
}

export default Home;
