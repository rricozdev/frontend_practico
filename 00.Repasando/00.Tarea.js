// archivo: 00.Comenzando.js

// 1. Notación de punto
// Crea una función que reciba un objeto persona y retorne el valor de su propiedad "nombre" usando notación de punto.
const persona1 = { nombre: "Carlos", edad: 25 };
function obtenerNombre(obj) {
  // Tu código desde aquí
}

// 2. Notación de corchetes
// Crea una función expresada que reciba un objeto persona y retorne el valor de su propiedad "apellido" usando notación de corchetes.
const persona2 = { "apellido": "Gomez", edad: 30 };
const obtenerApellido = function(obj) {
  // Tu código desde aquí
};

// 3. Clave dinámica usando variable
// Crea una función que reciba un objeto y una clave, y retorne el valor asociado a esa clave.
const clave = "edad";
function obtenerConClave(obj, key) {
  // Tu código desde aquí
}

// 4. Propiedades anidadas
// Crea una función que acceda a la ciudad dentro del objeto anidado direccion.
const usuario1 = {
  datos: {
    nombre: "Luisa",
    direccion: {
      ciudad: "Bogotá",
      pais: "Colombia"
    }
  }
};
function obtenerCiudad(usuario) {
  // Tu código desde aquí
}

// 5. Object.keys()
// Crea una función que reciba un objeto y retorne un array con sus claves.
const producto = { id: 1, nombre: "Laptop", precio: 1200 };
function obtenerClaves(obj) {
  // Tu código desde aquí
}
const claves = obtenerClaves(producto);

// 6. Object.values()
// Crea una función que reciba un objeto y retorne un array con sus valores.
function obtenerValores(obj) {
  // Tu código desde aquí
}
const valores = obtenerValores(producto);

// 7. Object.entries()
// Crea una función que reciba un objeto y retorne un array con sus pares clave-valor.
function obtenerEntradas(obj) {
  // Tu código desde aquí
}
const entradas = obtenerEntradas(producto);

// 8. Verificación de propiedades
// Crea una función que reciba un objeto y una clave, y verifique si la clave existe en el objeto usando "in" y "hasOwnProperty".
function verificarPropiedad(obj, key) {
  // Tu código desde aquí
}
const tienePrecio = "precio" in producto;
const tienePrecio2 = producto.hasOwnProperty("precio");

// 9. Acceso a objeto dentro de un array
// Crea una función expresada que reciba un array de estudiantes y un índice, y retorne el nombre del estudiante en esa posición.
const estudiantes = [
  { nombre: "Ana" },
  { nombre: "Luis" },
  { nombre: "Sofía" }
];
const obtenerNombreDeEstudiante = function(lista, indice) {
  // Tu código desde aquí
};
const segundoNombre = obtenerNombreDeEstudiante(estudiantes, 1);

// 10. Función general para obtener el valor de una clave
// Crea una función que reciba un objeto y una clave, y devuelva el valor correspondiente.
function obtenerValor(obj, key) {
  // Tu código desde aquí
}



// No modificar nada debajo de esta linea
module.exports = {
  persona1,
  persona2,
  clave,
  edad: persona1.edad,
  usuario1,
  producto,
  claves,
  valores,
  entradas,
  tienePrecio,
  tienePrecio2,
  estudiantes,
  segundoNombre,
  obtenerNombre,
  obtenerApellido,
  obtenerConClave,
  obtenerCiudad,
  obtenerClaves,
  obtenerValores,
  obtenerEntradas,
  verificarPropiedad,
  obtenerNombreDeEstudiante,
  obtenerValor
};
