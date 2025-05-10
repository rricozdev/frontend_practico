// src/App.jsx
import ProductsCards from "./components/ProductsCards";
import Cart from "./components/Cart";
import products from "./data/products";
import "./App.css";


function App() {
  const cart = [];

  return(
    <div>
      <h1>Tienda de electrónicos</h1>
      <ProductsCards products={products}/>
      <Cart items={cart}/>
    </div>
  ) 
}

export default App;
