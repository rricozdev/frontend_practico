# 📘 Clase Completa: React-Redux para Dummies

## 🔥 1. ¿Qué es Redux? (Explicación clara y sin vueltas)

Redux es una **librería de JavaScript para manejar el estado global de tu aplicación**.

### 🧠 ¿Y qué significa eso?

En una app de React, los componentes suelen usar `useState` para guardar información. Por ejemplo:

```jsx
const [contador, setContador] = useState(0);
```

Está bien... pero a medida que la app crece:

* Tienes muchos componentes que dependen de un mismo estado.
* Ese estado debe viajar entre componentes padres, hijos, nietos.
* Llega un punto en el que **todo se desorganiza** y es difícil mantener el control.

💡 **Redux resuelve ese problema** creando un único lugar donde vive todo el estado compartido: el **store**.

---

## 🏢 Imaginemos Redux como un banco central

🔸 En lugar de que cada componente guarde su dinero debajo del colchón (con `useState`), ahora todos tienen una cuenta en **el mismo banco** (el store).
🔸 Cuando alguien quiere **sacar o meter dinero**, no lo hace directamente: envía una **solicitud firmada** (action).
🔸 El banco tiene **reglas claras y estrictas** (reducers) sobre cómo manejar esa solicitud.
🔸 Y **nadie más puede cambiar el dinero** sin pasar por esas reglas.

### Palabras claves  
- Store
- actions   
- reducers
---

## 📦 2. ¿Qué problema resuelve Redux?

### ❌ El famoso problema del **"prop drilling"**

**Prop drilling** significa pasar datos de un componente a otro **a través de varios niveles**, incluso cuando algunos de esos componentes **no los necesitan**.

#### 🕁 Ejemplo:

Supongamos que tienes este árbol de componentes:

```
<App>
 └── <Layout>
      └── <Sidebar>
           └── <Perfil>
                └── <Avatar nombre="Cami" />
```

Si `nombre="Cami"` viene de `<App>`, y tú quieres mostrarlo en `<Avatar>`, **tienes que pasarlo por todos los niveles**:

```jsx
function App() {
  const nombre = 'Cami';
  return <Layout nombre={nombre} />;
}

function Layout({ nombre }) {
  return <Sidebar nombre={nombre} />;
}

function Sidebar({ nombre }) {
  return <Perfil nombre={nombre} />;
}

function Perfil({ nombre }) {
  return <Avatar nombre={nombre} />;
}
```

🤯 Aunque solo `<Avatar>` necesita `nombre`, **todos los componentes intermedios tienen que recibirlo y pasarlo**. Esto se llama **prop drilling** y se vuelve un caos en apps grandes.

### 💡 Redux lo soluciona

Con Redux, en lugar de ir pasando props, **todos los componentes acceden directamente al estado desde el store**, sin importar cuán anidados estén:

```jsx
const nombre = useSelector(state => state.usuario.nombre);
```

---

## 🔑 3. Conceptos clave de Redux (con analogía)

| Concepto | ¿Qué es?                   | Analogía                         |
| -------- | -------------------------- | -------------------------------- |
| Store    | Almacén global del estado  | El banco central                 |
| Action   | Qué se quiere hacer        | Solicitud firmada                |
| Reducer  | Cómo se modifica el estado | Las reglas del banco             |
| Dispatch | Cómo envío la solicitud    | Ir a ventanilla                  |
| State    | El estado actual           | La plata que tienes en la cuenta |

---

## 💻 4. ¿Cómo se conecta Redux con React?

Primero, necesitas dos librerías:

```bash
npm install redux react-redux
```

Luego haces 3 cosas básicas:

1. Crear un `store` con tus `reducers`.
2. Envolver tu app en `<Provider>` para que tenga acceso al store.
3. Usar `useSelector` y `useDispatch` dentro de tus componentes para interactuar con Redux.

---

## ⚙️ 5. Ejemplo práctico: Contador con Redux (Paso a paso)

### 1. Crear el reducer

```js
// redux/contadorReducer.js
const initialState = 0;

function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'DECREMENTAR':
      return state - 1;
    default:
      return state;
  }
}

export default contadorReducer;
```

### 2. Crear el store

```js
// redux/store.js
import { createStore } from 'redux';
import contadorReducer from './contadorReducer';

const store = createStore(contadorReducer);

export default store;
```

### 3. Conectar Redux a React

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 4. Crear el componente contador

```jsx
// components/Contador.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Contador() {
  const valor = useSelector(state => state); // accede al estado global
  const dispatch = useDispatch(); // para enviar acciones

  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
    </div>
  );
}

export default Contador;
```

---

## 🧠 6. Explicación sencilla de `useSelector` y `useDispatch`

* **`useSelector()`** te permite *leer* lo que hay en el store global.
* **`useDispatch()`** te permite *enviar acciones* para cambiar ese store.

---

## 📁 7. Organización de archivos en un proyecto real

```bash
/src
  /redux
    /features
      contadorReducer.js
    store.js
```

Con Redux Toolkit:

```bash
/src
  /redux
    /features
      contadorSlice.js
    store.js
```

---

## 🧼 8. Buenas prácticas + errores comunes

✅ Usa **Redux Toolkit** (es más moderno y fácil).
✅ Evita usar Redux para cosas locales (como un modal).
✅ Separa la lógica de Redux en su carpeta.

❌ No modifiques el estado directamente dentro del reducer.
❌ No crees muchos `useSelector` en un mismo componente si puedes combinarlos.
❌ No mezcles `useState` y Redux para manejar el mismo dato.

---

## 🛠️ 9. BONUS: Redux Toolkit (RTK) – El Redux moderno y simple

```bash
npm install @reduxjs/toolkit
```

### 1. Crear el slice del contador

```js
// redux/contadorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contadorSlice = createSlice({
  name: 'contador',
  initialState: 0,
  reducers: {
    incrementar: (state) => state + 1,
    decrementar: (state) => state - 1,
  }
});

export const { incrementar, decrementar } = contadorSlice.actions;
export default contadorSlice.reducer;
```

### 2. Crear el store

```js
// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from './contadorSlice';

export default configureStore({
  reducer: contadorReducer,
});
```

### 3. Usar en el componente

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar } from '../redux/contadorSlice';

function Contador() {
  const valor = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(decrementar())}>-</button>
    </div>
  );
}
```

---

## 📌 Conclusión

Redux es como **una caja fuerte central** para manejar el estado de tu app.
Todo pasa por un flujo claro:
➡️ **dispatch** una **action** → lo procesa un **reducer** → se actualiza el **store**.

Con **Redux Toolkit**, todo eso se simplifica mucho, manteniendo la idea base.
