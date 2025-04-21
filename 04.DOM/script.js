// Elegimos los elementos getElementById()

const titulo = document.getElementById("title");
const boton = document.getElementById("boton");

const cambiarTitulo = () => {
  // función para cambiar texto del título
  if (titulo) {
    titulo.textContent = "DOM cambiado";
  }
};

// Evento de click --> para cambiar el título (escuchamos el evento)

boton.addEventListener("click", cambiarTitulo);

// ES5 --> commonjs
// ES6 --> modules

// usando el método getElementByClassName()

const parrafos = document.getElementsByClassName("parrafo");
const botonParrafos = document.getElementById("cambiar-parrafo");

const cambiarParrafos = () => {
  for (let parrafo of parrafos) {
    parrafo.textContent = "Este texto ha sido cambiado con javascript";
    parrafo.style.color = "green";
    parrafo.style.fontWeight = "bold";
  }
};

botonParrafos.addEventListener("click", cambiarParrafos);

// getElementsByTagName()
const elementos = document.getElementsByTagName("li");
const botonElementos = document.getElementById("cambiar-items");

const cambiarElementos = () => {
  for (let elemento of elementos) {
    elemento.textContent = "Elemento con cambio";
    elemento.style.color = "#ff5555";
  }
};

botonElementos.addEventListener("click", cambiarElementos);

// Selectores CSS
const botonDestacados = document.getElementById("cambiar-destacado");
const primerElemento = document.querySelector(".destacado");
const todosDestacados = document.querySelectorAll(".destacado");

const cambiarDestacados = () => {
  // Selecciona solo el primer elemento con la clase "destacado";
  if (primerElemento) {
    primerElemento.textContent = "Modificado con `querySelector()`";
    primerElemento.style.color = "indigo";
  }

  todosDestacados.forEach((elemento, index) => {
    if (index != 0) {
      elemento.textContent = "Modificado con `querySelectorAll()`";
      elemento.style.color = "red";
    }
  });
};

botonDestacados.addEventListener("click", cambiarDestacados);


//  getElementByName() 
// const elements = document.getElementsByName(name); 
const up_forms = document.getElementsByName("up");
console.log(up_forms[0].tagName); // returns "FORM"
