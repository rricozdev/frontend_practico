`ProductCard` sigue siendo un **componente tonto**, solo recibe props y dispara un `onAdd()`. Toda la lógica de agregar al carrito (y manejar cantidades, precios, etc.) debe estar en el **componente que tiene el estado**, que en este caso es `App.jsx`.

Entonces, lo que haremos es:

1. **Modificar el estado `cart`** en `App.jsx` para que en vez de solo acumular productos, guarde un array de objetos tipo `{ product, quantity }`.
2. **Actualizar el handler `handleAddToCart`** para que aumente la cantidad si ya existe.
3. **Mostrar el precio total de cada item (`product.price * quantity`)** en `Cart.jsx`.

---

### ✅ Paso 1: Estado y lógica en `App.jsx`

```jsx
// App.jsx
import { useState } from "react";
import ProductsCards from "./components/ProductsCards";
import Cart from "./components/Cart";
import products from "./data/products";
import styles from "./styles/App.module.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.product.id === product.id);

      if (found) {
        // Si ya está en el carrito, incrementa cantidad
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no está, agrégalo con cantidad 1
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🛍️ Tienda de Electrónicos</h1>
      <div className={styles.content}>
        <div className={styles.productsSection}>
          <ProductsCards
            products={products}
            onAddToProduct={handleAddToCart}
          />
        </div>
        <div className={styles.cartSection}>
          <Cart items={cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
```

---

### ✅ Paso 2: `Cart.jsx` actualizado

```jsx
import styles from "../styles/Cart.module.css";

function Cart({ items }) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>🛒 Carrito</h2>
      {items.length === 0 ? (
        <p className={styles.empty}>No hay productos en el carrito</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {items.map((item, idx) => (
              <li key={idx} className={styles.cartItem}>
                <span className={styles.itemName}>
                  {item.product.name}{" "}
                  <span style={{ color: "#4a5568" }}>x{item.quantity}</span>
                </span>
                <span className={styles.itemPrice}>
                  ${item.product.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <span>Total:</span>
            <strong>${total}</strong>
          </div>
          <button className={styles.buyButton}>Comprar</button>
        </>
      )}
    </div>
  );
}

export default Cart;
```

---

### 🧠 Comentarios

* Este patrón lo puedes escalar luego con reducers o context API si el carrito se vuelve global.
* Si te animas, más adelante podríamos agregar funcionalidad para **eliminar productos**, **reducir cantidades**, o **persistir el carrito en localStorage**.


