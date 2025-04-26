# REACT

![react](image.png)

---   

🎯 Objetivo
Aprender los fundamentos de React:

- ¿Qué es React?

- ¿Qué es JSX?

- ¿Qué son los componentes?

- ¿Qué son y cómo funcionan las props?

- ¿Qué es el estado (state) y cómo se usa?

- Cómo manejar eventos y renderizar listas

React es una biblioteca (no un framework) de JavaScript diseñada para construir interfaces de usuario (UI) de manera declarativa, eficiente y flexible. Fue creada originalmente por equipos de Facebook e Instagram, y hoy es un proyecto open source mantenido por una comunidad global de desarrolladores.

## Programación declarativa vs. imperativa   

React se basa en un enfoque declarativo, donde le indicamos qué queremos lograr (y la biblioteca se encarga del cómo). Esto contrasta con el estilo imperativo, donde debemos especificar paso a paso cada instrucción.

## 🤔 ¿Qué significa eso?   

- Reactiva: Si cambian los datos, la vista se actualiza automáticamente.

- Declarativa: En vez de decirle paso a paso al navegador cómo dibujar algo, le decimos qué queremos que aparezca en cada momento, y React se encarga del resto.

Ejemplo en código:

```js
const numbers = [4, 2, 3, 6];

// Enfoque imperativo (¿CÓMO?):  
let total = 0;  
for (let i = 0; i < numbers.length; i++) {  
  total += numbers[i];  
}  

// Enfoque declarativo (¿QUÉ?):  
let initialValue = 0;
numbers.reduce((prev, current) => prev + current, initialValue); 
```

En React, este principio se aplica al definir qué componentes deben renderizarse (por ejemplo, "muestra un botón rojo") sin preocuparnos por los detalles imperativos del DOM.   
---   
## 🔥 ¿Qué es el boilerplate?   

El término boilerplate (o "plantilla inicial") se refiere al código base que genera una herramienta como Vite cuando creas un nuevo proyecto. Incluye:

Estructura de archivos mínima (como `main.jsx`, `App.jsx`).

Configuraciones preestablecidas (`vite.config.js`, dependencias en `package.json`).

Código reusable listo para editar (ej. el componente `App`).

En el caso de `npm init vite`, eliges `React` y `JavaScript`, y Vite te da un proyecto funcional con:   

```bash 
my-react-app/
├── node_modules/
├── src/
│   ├── main.jsx       # Punto de entrada
│   ├── App.jsx        # Componente principal
├── index.html         # HTML base
└── package.json
```

--- 


## 💎 ¿Qué es JSX?   

JSX es una extensión de JavaScript que permite escribir código parecido a HTML dentro de JS. Es más cómodo para escribir interfaces visuales, pero JSX no es HTML, es azúcar sintáctica para ``React.createElement()``.   

- `JSX` significa JavaScript XML. Es una extensión de sintaxis que combina JavaScript con una estructura similar a `XML/HTML`, permitiendo escribir componentes de UI de una manera más intuitiva y declarativa.   
   
- ¿Qué es "azúcar sintáctica"?   
El término azúcar sintáctica se refiere a una sintaxis más amigable y legible que "endulza" la escritura de código, pero que en realidad se traduce (o compila) a una forma más compleja o verbosa detrás de escenas. En el caso de JSX, este se convierte en llamadas a ``React.createElement()`` durante la compilación.   

- ¿De dónde sale `React.createElement()`?   
Origen: Es una función fundamental de la librería React, que crea elementos del Virtual DOM (la representación en memoria de la UI).

Función: Toma tres argumentos principales:

1. Tipo (string/componente): Ej. `"div"`, `MyComponent.`
2. Props (objeto/null): Atributos o propiedades del elemento.   
3. Children (opcional): Hijos del elemento (texto, otros elementos, etc.).   

🔹 Ejemplo de transformación:   

```js
// JSX:
const element = <h1 className="title">Hola Mundo</h1>;

// Se convierte en:
const element = React.createElement(
  "h1",
  { className: "title" },
  "Hola Mundo"
);
```   

Resultado: Ambas formas generan el mismo objeto JavaScript que describe la estructura de la UI para React.   

JSX es una abstracción que simplifica la creación de interfaces, pero siempre termina siendo código JavaScript puro. 🚀   


## 🔷 Ejemplo: HTML → JSX   

1. HTML tradicional:   

```HTML
<div class="container">
  <h1 id="title">¡Hola React!</h1>
  <p>Esto es un párrafo con <strong>énfasis</strong>.</p>
  <button onclick="alert('Click')">Presióname</button>
</div>
```   

El código anterior se debe ver como sigue:   

<div class="container">
  <h1 id="title">¡Hola React!</h1>
  <p>Esto es un párrafo con <strong>énfasis</strong>.</p>
  <button onclick="alert('Click')">Presióname</button>
</div>   

   
---   


2. Equivalente en JSX:   

```jsx
<div className="container">
  <h1 id="title">¡Hola React!</h1>
  <p>Esto es un párrafo con <strong>énfasis</strong>.</p>
  <button onClick={() => alert('Click')}>Presióname</button>
</div>
```   


## 🔑 Diferencias clave:   

1. Atributos:

`class` → `className` (porque class es palabra reservada en JS).

`onclick` → `onClick` (eventos en camelCase).   

2. Eventos:

En JSX, los eventos reciben `funciones` (no strings como en HTML):   

```js
<button onClick={() => alert('Click')}> ... </button>
```   

3. Valores dinámicos:

En `JSX`, usas `{}` para insertar expresiones JavaScript:   

```js
<p>Saludo: {nombreUsuario}</p>
```   

4. Etiquetas autocerradas:

En JSX, las etiquetas sin contenido deben cerrarse con />:

```jsx
<img src={rutaImagen} alt="Descripción" />
```

## ⚡ Cómo se compila JSX (bajo el capó):
El JSX del ejemplo se convierte en:   

```jsx
React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", { id: "title" }, "¡Hola React!"),
  React.createElement("p", null, "Esto es un párrafo con ", React.createElement("strong", null, "énfasis"), "."),
  React.createElement("button", { onClick: () => alert('Click') }, "Presióname")
);
```   

## 🕵️ ¿Dónde está `React.createElement()`?   

¡Está oculto pero presente! Lo que ocurre es que JSX se compila automáticamente a ``React.createElement()`` durante el proceso de construcción (build). Vite usa Babel (o su equivalente en ESBuild) para esta transformación.

🔍 Explicación detallada:
Tu código en main.jsx:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```   

Se compila a esto (simplificado):   

```jsx 
ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);
```   

## Claves:   

**JSX ≠ HTML**: Todo lo que parece HTML (<App />, <StrictMode>) es transformado a ``React.createElement()`.`

Herramientas como Vite/Babel hacen esta conversión automáticamente (no necesitas ver el código transformado).

¿Por qué no lo ves?: El código compilado se genera en memoria durante el desarrollo o en la carpeta dist al hacer `npm run build`.   

## 🛠️ Cómo ver la transformación:
Si quieres verlo en acción:

- Usa el [Babel Repl](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.27.0&externalPlugins=&assumptions=%7B%7D) y pega tu JSX.

- O ejecuta `npm run build` y revisa los archivos en `dist/assets/*.js` (busca createElement).      

![diagram](image-1.png)   


## 📌 Concluimos que:   
`JSX` parece `HTML`, pero es `JavaScript extendido` con reglas específicas para trabajar con `React`. La clave está en recordar que todo se transforma en ``React.createElement()`` al final. 🛠️

