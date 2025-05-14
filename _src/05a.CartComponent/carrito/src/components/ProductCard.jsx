import styles from "../styles/ProductCard.module.css";

function ProductCard({product, onAdd}){
    return(
        <div className={styles.card}>
            <img src={product.image} alt={product.name}  className={styles.image} />
            <h3>Name: {product.name}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => onAdd(product)}>  Add to Cart </button>
        </div>
    )
}


export default ProductCard;


