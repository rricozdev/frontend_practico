// src/App.jsx
import ProductsCards from "./components/ProductsCards";
import Cart from "./components/Cart";
import Contador from "./components/Contador";
import Saludo from "./components/Saludo";
import products from "./data/products";
import styles from ".//styles/App.module.css";


function App() {
  // const cart = [products[0], products[3]];

  return(
    <div className={styles.container}>
      <h1>Tienda de electrónicos</h1>
      <ProductsCards products={products}/>
      {/* <Cart items={cart}/> */}
      {/* <Saludo nombre="Camilo"/> 
      <Contador />  */}
    </div>
  ) 
}

export default App;
