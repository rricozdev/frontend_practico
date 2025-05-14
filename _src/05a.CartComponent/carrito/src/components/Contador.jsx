// // Esto va en contra del flujo de React, mala practica, se hace para uso académico ...
 
//  let contador = 0;

// function ContadorSinEstado() {
//     const incrementar = () => {
//         contador++;
//         console.log("contador:", contador);
//         alert("contador: " + contador)
//     }

//     return(
//         <div>
//             <h1>Contador: </h1>
//             <button onClick={incrementar}>Sumar</button>
//         </div>
//     )
// };


// export default ContadorSinEstado;



/*Forma correcta de trabajar el estado en react ⬇ */

// useState()
import React, { useState } from "react";

function Contador ( ){
    const [contador, setContador] = useState(0);
    
    const incrementar = () => {
        if(contador <= 5){
            setContador(contador + 1)
        } else if (contador === 6) {
             alert("No está permitido tocar el botón mas de 6 veces");
        }       
    }

    return(
        <div>
            <h3>Haz hecho click :{contador} veces </h3>
            <button onClick={incrementar}>Sumar</button>
        </div>
    )
};

export default Contador;