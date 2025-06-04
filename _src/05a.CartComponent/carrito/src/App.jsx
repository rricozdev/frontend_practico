// 👇🏻 ⬇ vamos a construir la App con el hook useState(); ⬇ 👇🏻
// import { useState } from "react";
// import ProductsCards from "./components/ProductsCards";
// import Cart from "./components/Cart";
// import products from "./data/products";


// function App () {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddCart = (product) => {
//     setCartItems([...cartItems, product])
//   }


//   return(
//     <div>
//       <h1>Tienda de electrónicos</h1>
//       <ProductsCards products={products} onAddToProduct={handleAddCart}/>
//       <Cart items={cartItems}/>
//     </div>
//   )
// };

// export default App;

import { useState } from "react";
import ProductsCards from "./components/ProductsCards";
import Cart from "./components/Cart";
import products from "./data/products";
import styles from "./styles/App.module.css";


function App () {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product) => {
    console.log("product: ", product)
   setCartItems((prevCart) => {
    const found = prevCart.find((item) => item.product.id === product.id);

    if(found) {
      console.log("found :", found)
      // Sí está en el carrito, incrementa la cantidad.
      return prevCart.map((item) => item.product.id === product.id ? {...item, quantity : item.quantity + 1} : item)
    } else {
            console.log("found :", found)

      // Sino está, agregalo con cantidad 1
      return [...prevCart, {product, quantity:1}];
    };
   });
  };


  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Tienda de electrónicos</h1>
      <ProductsCards products={products} onAddToProduct={handleAddCart} className={styles.productsSection}/>
      <Cart items={cartItems} className={styles.cartSection}/>
    </div>
  )
};

export default App;




