// Ejercicios de acceso a objetos en JavaScript

// 1. Accede a la propiedad "nombre" del objeto y muéstrala en consola.
const persona1 = { nombre: "Carlos", edad: 25 };
console.log(persona1.nombre); // "Carlos"

// 2. Usa la notación de corchetes para acceder a la propiedad "apellido".
const persona2 = { "apellido": "Gomez", ciudad: "Medellín" };
console.log(persona2["apellido"]); // "Gomez"

// 3. Accede a una propiedad usando una variable.
const clave = "edad";
console.log(persona1[clave]); // 25

// 4. Accede a una propiedad anidada dentro de un objeto.
const usuario1 = { datos: { nombre: "Luisa", pais: "Colombia" } };
console.log(usuario1.datos.nombre); // "Luisa"

// 5. Usa `Object.keys()` para obtener las claves del objeto.
const producto = { id: 1, nombre: "Laptop", precio: 1200 };
console.log(Object.keys(producto)); // ["id", "nombre", "precio"]


// 6. Usa `Object.values()` para obtener los valores del objeto.
console.log(Object.values(producto)); // [1, "Laptop", 1200]

// 7. Usa `Object.entries()` para obtener las claves y valores en pares.
console.log(Object.entries(producto)); // [["id", 1], ["nombre", "Laptop"], ["precio", 1200]]

// 8. Verifica si la propiedad "precio" existe en el objeto producto.
console.log("precio" in producto); // true
console.log(producto.hasOwnProperty("precio")); // true


// 9. Accede dinámicamente a las propiedades de un objeto dentro de un array.
const estudiantes = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
console.log(estudiantes[1].nombre); // "Luis"

// 10. Crea una función que reciba un objeto y devuelva el valor de una clave dada.
function obtenerValor(objeto, clave) {
  return objeto[clave];
}
console.log(obtenerValor(producto, "nombre")); // "Laptop"



// No modificar nada debajo de esta línea
module.exports = {
  obtenerValor
}