import React, { useContext, useEffect, useState } from "react";
import globalContext from "./Context/Createcontext";
function Cart() {
  const {state, dispatch}= useContext(globalContext)
  const [total, setTotal]= useState(0)

  const calculateTotal = () => {
    const total = state.cart.reduce((acc, item) => {
      return acc + item.qty * item.price;
    },0)
    setTotal(total)
  }

  useEffect(() => {
    calculateTotal();
  })

  const changeQty = (id, qty) => {
    dispatch({ type: "CHANGE_QTY", payload: { id, qty } });
  }
  return <div className="cart_container">
    <h1>Cart</h1>
    <h3>Total : ${total}</h3>

    <div className="cart-items">
      {state.cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="info">
          <p>{item.title}</p>
          <p>${item.price}</p>
          </div>
          
          <div className="qty">
            <button onClick={()=> changeQty(item.id, item.qty - 1)}>-</button>
            <p>{item.qty}</p>
            <button onClick={()=> changeQty(item.id, item.qty + 1)}>+</button>
          </div>
          </div>
      ))}
    </div>
  </div>;
}

export default Cart;
