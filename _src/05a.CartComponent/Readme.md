## 🛒 Clase: Cómo funciona un Carrito de Compras (sin `state`)

### 🎯 Objetivo:

Explicar cómo estructurar una pequeña aplicación con componentes que representan productos y un carrito, pasando la información solo con **props**.

---

### 🧠 ¿Qué vamos a aprender?

1. Cómo representar productos y un carrito con datos mock.
2. Cómo pasar props desde un componente padre a varios hijos.
3. Cómo estructurar los componentes de forma clara.
4. Entender el flujo unidireccional de los datos.

---

### 🗂️ Estructura de componentes

```
App
├── ProductList
│   └── ProductCard
└── Cart
```

---

## 🧪 Paso 1: Datos mockeados

```js
// data/products.js
const products = [
  { id: 1, name: "Mouse inalámbrico", price: 100 },
  { id: 2, name: "Teclado mecánico", price: 250 },
  { id: 3, name: "Monitor 27\"", price: 800 },
];

export default products;
```

---

## 💡 Paso 2: Componente App (padre)

```jsx
import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";

function App() {
  const cart = [products[0], products[2]]; // simulamos un carrito con algunos productos

  return (
    <div>
      <h1>Tienda React (con props)</h1>
      <ProductList products={products} />
      <Cart items={cart} />
    </div>
  );
}

export default App;
```

---

## 🧱 Paso 3: ProductList y ProductCard

```jsx
// components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
```

```jsx
// components/ProductCard.jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ProductCard;
```

---

## 🛒 Paso 4: Componente Cart

```jsx
// components/Cart.jsx
import React from "react";

function Cart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>🛒 Carrito</h2>
      {items.map((item) => (
        <p key={item.id}>
          {item.name} - ${item.price}
        </p>
      ))}
      <hr />
      <strong>Total: ${total}</strong>
    </div>
  );
}

export default Cart;
```

---

## 🧭 Flujo de datos

* `App` contiene los datos del catálogo y del carrito.
* `App` le pasa los productos a `ProductList` y el carrito a `Cart`.
* `ProductList` le pasa cada producto a `ProductCard`.
* Todo fluye **de arriba hacia abajo**, **sin modificar nada**, solo props.

---

## 📌 Conceptos clave que repasamos

✅ Props: pasar datos entre componentes
✅ Composición de componentes
✅ Flujo de datos unidireccional
✅ Simulación de comportamiento sin lógica de estado

---


