# Accediendo a Objetos en JavaScript

En JavaScript, un objeto es una colección de pares clave-valor. Puedes acceder a las propiedades de un objeto de diferentes maneras.

## Métodos para acceder a objetos

### 1. Notación de punto (`.`)
Es la forma más común y sencilla de acceder a una propiedad de un objeto.

```javascript
const persona = {
  nombre: "Juan",
  edad: 30
};

console.log(persona.nombre); // "Juan"
console.log(persona.edad);  // 30
```

### 2. Notación de corchetes (`[]`)
Es útil cuando la clave está en una variable o tiene caracteres especiales.

```javascript
const persona = {
  "primer nombre": "Juan",
  edad: 30
};

console.log(persona["primer nombre"]); // "Juan"
console.log(persona["edad"]);  // 30
```

También se usa cuando accedemos a una propiedad de manera dinámica:

```javascript
const propiedad = "nombre";
console.log(persona[propiedad]); // "Juan"
```

### 3. Acceso a propiedades anidadas
Cuando un objeto tiene otro objeto dentro, accedemos en cadena:

```javascript
const usuario = {
  nombre: "Ana",
  direccion: {
    ciudad: "Bogotá",
    pais: "Colombia"
  }
};

console.log(usuario.direccion.ciudad); // "Bogotá"
console.log(usuario["direccion"]["pais"]); // "Colombia"
```

### 4. Uso de `Object.keys()`, `Object.values()`, y `Object.entries()`
Estas funciones permiten obtener claves, valores y pares clave-valor de un objeto:

```javascript
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022
};

console.log(Object.keys(auto));   // ["marca", "modelo", "año"]
console.log(Object.values(auto)); // ["Toyota", "Corolla", 2022]
console.log(Object.entries(auto)); // [["marca", "Toyota"], ["modelo", "Corolla"], ["año", 2022]]
```

### 5. Uso de `hasOwnProperty()` y `in`
Podemos verificar si un objeto tiene una propiedad específica:

```javascript
console.log(auto.hasOwnProperty("marca")); // true
console.log("modelo" in auto); // true
console.log("color" in auto); // false
```


