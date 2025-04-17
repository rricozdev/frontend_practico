// Elegimos los elementos getElementById()

const titulo = document.getElementById("title");
const boton = document.getElementById("boton");

const cambiarTitulo = () => {
    // función para cambiar texto del título
    if(titulo) {
        titulo.textContent = "DOM cambiado"
    }
};

// Evento de click --> para cambiar el título (escuchamos el evento)

boton.addEventListener("click",cambiarTitulo );

// ES5 --> commonjs
// ES6 --> modules