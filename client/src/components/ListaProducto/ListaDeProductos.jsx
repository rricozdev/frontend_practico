

function ListaDeProductos(){
    const array = [{id:1, nombre:"Laptop Lenovo", precio:1200},{id:2, nombre: "Mac", precio:3200},{id:3, nombre:"HP", precio: 1300}]

    return(
        <>
        <ul>
            {array.map(producto => (<li key={producto.id}>
                {producto.nombre} - ${producto.precio}
            </li>) )}
        </ul>
        </>
    )
};


export default ListaDeProductos;