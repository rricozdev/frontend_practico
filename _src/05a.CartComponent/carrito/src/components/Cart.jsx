import { LuShoppingCart } from "react-icons/lu";
import styles from "../styles/Cart.module.css";

function Cart({ items }) {
  console.log("items:", items);
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}><LuShoppingCart /> Carrito</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <ul >
            {items.map((item, idx) => (
              <li key={idx} className={styles.cartItem}>
                <span>{item.product.name}</span>{" "}
                <span> ${item.product.price}</span>{" "}
                <span> cant: {item.quantity}</span>
                <span> Sub-total: $ {item.product.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div>
            <span>Total: $ {total}</span>
          </div>
          <button>Comprar</button>
        </>
      )}
    </div>
  );
}

export default Cart;
