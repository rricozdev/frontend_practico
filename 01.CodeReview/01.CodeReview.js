// 📘 Ejercicio:
// Crea una función expresada llamada `obtenerEdadUsuario` que reciba un objeto `usuario`
// con las propiedades `nombre` y `edad`. La función debe devolver un string con el formato:
// "La edad de [nombre] es [edad] años."
// Usa notación de punto para acceder a las propiedades.

const obtenerEdadUsuario = function(usuario) {
    // Tu código aquí
    
  };
  
  // 🧪 Prueba
  const usuario = { nombre: "Camila", edad: 25 };
  console.log(obtenerEdadUsuario(usuario)); // "La edad de Camila es 25 años."

  

  // 📘 Ejercicio:
// Declara una función llamada `mostrarCiudad` que reciba un objeto `persona`
// que contiene una propiedad anidada `direccion.ciudad`.
// La función debe retornar un mensaje: "La ciudad de residencia es [ciudad]"
// Usa acceso a propiedades anidadas con notación de punto.

function mostrarCiudad(persona) {
    // tu código aquí

  }
  
  // 🧪 Prueba
  const persona = {
    nombre: "Luis",
    direccion: {
      ciudad: "Cartagena",
      pais: "Colombia"
    }
  };
  
  console.log(mostrarCiudad(persona)); // "La ciudad de residencia es Cartagena"
  