# 🧠 Clase: Introducción a `useEffect` en React

## 🎯 Objetivos de la clase
- Entender qué es el hook `useEffect` y cuándo usarlo
- Aprender a simular una petición a una API usando `fetch`
- Integrar `useEffect` en un proyecto React con `useState`
- Mostrar loading y manejar errores

---

## 🔍 ¿Qué es `useEffect`?

`useEffect` es un hook que te permite realizar **efectos secundarios** en tus componentes.

### Ejemplos de efectos secundarios:
- Llamadas a APIs
- Subscripciones
- Modificar el DOM manualmente
- Sincronización con `localStorage`, temporizadores, etc.

---

## 🧠 Sintaxis básica

```js
import { useEffect } from 'react';

useEffect(() => {
  // Código que quieres ejecutar como efecto
}, [/* dependencias */]);
```

---

## 🛠️ Caso práctico: Cargar productos desde una API falsa

Vamos a reemplazar los datos mockeados con un `fetch` simulado usando `useEffect`.

---

## 🧱 Paso 1: Crear componente `Products.js`

```jsx
import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos fetch desde una API falsa
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener los productos');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
```

---

## 🧱 Paso 2: Usar `Products` en `App.js`

```jsx
import Products from './Products';

function App() {
  return (
    <div>
      <h1>Mi Tienda</h1>
      <Products />
    </div>
  );
}

export default App;
```

---

## 📝 Explicación paso a paso

* `useEffect()` se ejecuta **después** de que el componente se renderiza por primera vez.
* En este caso, hacemos una petición `fetch` para obtener productos.
* `setLoading(true)` se usa para mostrar un mensaje mientras esperamos.
* Cuando llegan los datos, los guardamos con `setProducts(data)` y ocultamos el mensaje de carga.
* Si ocurre un error, lo capturamos y lo mostramos.

---

## 🚨 Buenas prácticas

* Siempre manejar estados de carga y error.
* No olvides el array de dependencias (`[]`) para que solo se ejecute una vez.
* Si el componente depende de alguna variable externa, inclúyela en las dependencias.

---

## 🧪 Actividad propuesta

1. Crea tu propio componente `ProductList` que haga `fetch` a otra API (por ejemplo, de Pokémon).
2. Muestra los nombres de los elementos en una lista.
3. Agrega mensajes de `loading` y `error`.

---

## ✅ Conclusión

`useEffect` es fundamental para trabajar con lógica externa o asincrónica en React. Es un hook que nos permite conectar el mundo exterior (APIs, localStorage, eventos) con nuestros componentes.

---

## 📚 Recursos adicionales

* [Documentación oficial `useEffect`](https://react.dev/reference/react/useEffect)
* [FakeStore API](https://fakestoreapi.com/)
* [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 💬 Preguntas para la clase

* ¿Qué pasaría si quitamos el array de dependencias?
* ¿Por qué es importante manejar los errores?
* ¿Dónde más usarías `useEffect`?


