import "./App.scss";
import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cart from "./components/Cart";
import axios from "axios";
import globalContext from "./components/Context/Createcontext";

function App() {
  const { dispatch } = useContext(globalContext);
  const getProducts = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch({
        type: "SET_PRODUCTS",
        payload: res.data,
      });
    });
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
