# 📚 Métodos de Arrays en JavaScript (Nivel Intermedio)

JavaScript proporciona varios métodos potentes para trabajar con arrays. Aquí exploramos tres muy útiles: `filter()`, `map()` y `reduce()`.

---

Para entender mejor los métodos, veamos como se recorre un array con un ciclo `for`   

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

console.log(evenNumbers); // [2, 4]
```
Ahora veamos como lo hace el método `.filter()`   

## 1. `filter()`

### 🔍 ¿Qué hace?
Crea un nuevo array con todos los elementos que **cumplen una condición** especificada en una función.

### 🧠 Sintaxis:
```js
array.filter((elemento, índice, arrayOriginal) => condición)
```

- `elemento`: el valor actual del array.
- `índice` *(opcional)*: posición del elemento.
- `arrayOriginal` *(opcional)*: el array sobre el que se llamó `filter()`.

### 🧪 Ejemplo:
```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```
✔️ En este caso, el filtro solo devuelve los números pares.

---

## 2. `map()`

### 🔄 ¿Qué hace?
Crea un nuevo array aplicando una **transformación** a cada elemento del array original.

### 🧠 Sintaxis:
```js
array.map((elemento, índice, arrayOriginal) => transformación)
```

### 🧪 Ejemplo:
```js
const names = ["Ana", "Juan"];
const nameLengths = names.map(name => name.length);
console.log(nameLengths); // [3, 4]
```
✔️ Se obtiene un nuevo array con la longitud de cada nombre.

---

## 3. `reduce()`

### ➕ ¿Qué hace?
Reduce el array a **un único valor**, aplicando una función acumuladora a cada elemento.

### 🧠 Sintaxis:
```js
array.reduce((acumulador, elemento, índice, arrayOriginal) => nuevoAcumulador, valorInicial)
```

- `acumulador`: el valor que se va acumulando.
- `elemento`: el valor actual del array.
- `valorInicial`: el valor inicial del acumulador.

### 🧪 Ejemplo:
```js
const sales = [100, 200, 300];
const total = sales.reduce((sum, sale) => sum + sale, 0);
console.log(total); // 600
```
✔️ Se suman todos los valores del array.

---

### 📌 Tip Extra

Puedes **encadenar estos métodos** para tareas más complejas. Ejemplo:
```js
const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)   // [2, 4]
  .map(n => n * 10)           // [20, 40]
  .reduce((a, b) => a + b);   // 60

console.log(result);
```

---