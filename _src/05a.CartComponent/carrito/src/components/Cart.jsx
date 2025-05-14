function Cart({ items }) {
  return (
    <div>
      <h2>🛒 Carrito</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li 
              key={idx}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

// ul --> unorder list
//
