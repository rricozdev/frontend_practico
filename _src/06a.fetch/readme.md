# 🌐 Clase: Introducción a `fetch()` en JavaScript

## 📌 Objetivo
Aprender a usar `fetch()` para obtener datos de servidores externos (APIs), entender su sintaxis, cómo manejar promesas con `.then()` y `.catch()`, y aplicar todo en ejemplos prácticos.

---

## 🧠 ¿Qué es `fetch()`?

`fetch()` es una función nativa del navegador que permite hacer **peticiones HTTP** a un servidor.

Es muy útil cuando necesitamos **obtener datos externos** (por ejemplo, desde una API pública) o **enviar información** desde nuestro frontend.

---

## 📦 ¿Cómo se usa?

### 🔸 Sintaxis básica

```js
fetch(url, opciones)
  .then(respuesta => respuesta.json())
  .then(datos => {
    // Usamos los datos aquí
  })
  .catch(error => {
    // Manejamos errores aquí
  });
```

---

## 🧱 Desglose paso a paso

### 1. `fetch(url, opciones)`

* **`url`**: (requerido) es la dirección de la API o servidor.
* **`opciones`**: (opcional) objeto donde configuramos el método (`GET`, `POST`, etc.), headers, cuerpo (`body`), etc.

🔹 Ejemplo simple:

```js
fetch('https://jsonplaceholder.typicode.com/users');
```

🔹 Ejemplo con opciones:

```js
fetch('https://api.ejemplo.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nombre: 'Rick' })
});
```

---

### 2. `.then(respuesta => respuesta.json())`

`fetch` devuelve una promesa que resuelve un objeto de tipo `Response`. Este objeto **no contiene los datos directamente**.

Debemos usar `.json()` (o `.text()`, `.blob()`, etc.) para **extraer el contenido real de la respuesta**.

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(respuesta => respuesta.json()); // Aquí convertimos a JSON
```

---

### 3. `.then(datos => ...)`

Una vez que tenemos los datos reales, los podemos usar.

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log('Usuarios:', datos);
  });
```

---

### 4. `.catch(error => ...)`

Si ocurre un error de red (por ejemplo, no hay conexión), lo capturamos con `.catch()`.

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error de red:', err));
```

💡 Nota: `fetch` **no lanza error automáticamente con códigos HTTP como 404 o 500**. Debemos comprobarlo manualmente:

```js
fetch('https://jsonplaceholder.typicode.com/404')
  .then(res => {
    if (!res.ok) throw new Error('Error HTTP: ' + res.status);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 🧪 Actividad en clase: ¡Trae tus primeros datos!

1. Abre tu navegador y abre la consola (`F12 > Consola`).
2. Escribe este código:

```js
fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
  .then(res => res.json())
  .then(data => {
    console.log('Pokémon:', data.results);
  })
  .catch(err => {
    console.error('Error al obtener pokémon:', err);
  });
```

3. Observa cómo se imprimen los nombres de los primeros 5 Pokémon.

---

## 💻 Ejemplo práctico en HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Usuarios desde API</title>
</head>
<body>
  <h1>Lista de Usuarios</h1>
  <ul id="usuarios"></ul>

  <script>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const lista = document.getElementById('usuarios');
        data.forEach(usuario => {
          const li = document.createElement('li');
          li.textContent = usuario.name;
          lista.appendChild(li);
        });
      })
      .catch(err => console.error('Error:', err));
  </script>
</body>
</html>
```

---

## 🧠 Resumen general

| Parte      | ¿Qué hace?                             |
| ---------- | -------------------------------------- |
| `fetch()`  | Llama a una URL y devuelve una promesa |
| `.then()`  | Procesa la respuesta del servidor      |
| `.json()`  | Convierte la respuesta a JSON          |
| `.catch()` | Captura errores de red                 |

---

## ⚠️ Errores comunes

❌ No convertir a JSON:

```js
.then(data => console.log(data)) // data será un objeto Response sin .json()
```

❌ No manejar errores HTTP:

```js
// res.ok === false si hay error 404 o 500
if (!res.ok) throw new Error('Error HTTP')
```

---

## 📚 Recursos recomendados

* [Documentación MDN sobre `fetch`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
* [API de prueba JSONPlaceholder](https://jsonplaceholder.typicode.com/)
* [PokeAPI para practicar](https://pokeapi.co/)

---

## 💬 Preguntas para el cierre

* ¿Qué diferencias ves entre traer datos mockeados localmente y usar `fetch()`?
* ¿Qué es una promesa? ¿Qué significa que `fetch()` devuelva una?
* ¿Qué podrías hacer si el servidor devuelve un error 404 o 500?

