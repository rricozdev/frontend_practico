import React from "react";

function Card({name, email, phone}){
    return(
        <div>
            <h2>Nombre:{name}</h2>
            <p>Correo: {email}</p>
            <p>Teléfono: {phone}</p>
        </div>
    )
}

export default Card;