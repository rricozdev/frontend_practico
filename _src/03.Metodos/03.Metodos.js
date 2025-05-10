
// Archivo de ejercicios

// 1. Filtrar usuarios premium
// Descripción: Dado un array de usuarios, filtrar solo los que tienen suscripción premium.
const usuarios = [
  { id: 1, nombre: "Ana", premium: false },
  { id: 2, nombre: "Luis", premium: true },
  { id: 3, nombre: "Carlos", premium: true }
];

const usuariosPremium = usuarios.filter(usuario => {
    return usuario.premium;
})

console.log(usuariosPremium)


// 2. Calcular total de productos en carrito
// Descripción: Dado un array de productos, calcular el precio total usando `reduce`.
const carrito = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 50 },
  { nombre: "Zapatos", precio: 80 }
];


// 3. Transformar nombres a mayúsculas
// Descripción: Convertir todos los nombres de un array a mayúsculas usando `map`.
const nombres = ["sofía", "miguel", "valentina"];

