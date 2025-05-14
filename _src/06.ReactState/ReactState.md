## 📌 ¿Qué es el estado (`state`) en React?

> El **estado** es una forma de hacer que un componente "recuerde" información entre renderizados. Es como una caja donde React guarda datos que pueden cambiar con el tiempo.

Por ejemplo, si estás construyendo un contador, un carrito de compras o una app de tareas, necesitas que la interfaz se actualice cuando el usuario interactúa. Ahí entra el **estado**.

Recordando:      

>✅ Un componente funcional en React es simplemente una función de JavaScript que retorna JSX.

Hay dos formas válidas de escribirlo:   

```jsx
// función declarada
function ComponenteX(){
    // lógica
    return()
};

export default ComponenteX;
```   

```jsx
// función expresada
const ComponenteY = () => {
    // lógica
    return()
};

export default ComponenteY;
```
   
---

![alt text](image.png)

El control remoto es el `state(estado)` y la tv es el `componente`

### 💬 ¿Cómo se declara el estado?

En componentes funcionales (los usados actualmente), usamos el **hook `useState`** para declarar y manejar el estado.
*(Asegúrate de importar `useState` desde React)*

```jsx
import React, { useState } from 'react';
```

---

### 🛠 Ejemplo básico: contador

```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // valor inicial: 0

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Sumar</button>
    </div>
  );
}
```

🔍 **¿Qué pasa aquí?**

* `useState(0)` → define una variable `contador` con valor inicial `0`.
* `setContador` → es la función que actualiza ese estado.
* Cada vez que llamas `setContador`, el componente se vuelve a renderizar con el nuevo valor.

---

### 🎯 ¿Dónde se usa el estado?

El estado se usa cuando:

* Querés actualizar la interfaz en tiempo real.
* Necesitás manejar datos temporales que cambian (como formularios, clicks, datos de usuario, etc.).
* Tenés que controlar cosas como abrir/cerrar menús, mostrar mensajes condicionales, etc.

---

### 🤯 Diferencia entre `props` y `state`

| Propiedad (`props`)                              | Estado (`state`)                        |
| ------------------------------------------------ | --------------------------------------- |
| Se pasa desde el padre al hijo                   | Se maneja dentro del componente         |
| Es inmutable (no se puede cambiar desde el hijo) | Es mutable con `setState` o `setXxx`    |
| Ideal para configurar el componente              | Ideal para manejar interacción/dinámica |

---


