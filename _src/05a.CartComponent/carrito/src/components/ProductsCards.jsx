import ProductCard from "./ProductCard";
import styles from "../styles/ProductCards.module.css";



const tempCart = [];
console.log("Esto es tempCart", tempCart);


function ProductsCards({products}){
    const handleAdd = (product) => {
        tempCart.push(product);
        console.log("Carrito actual:", tempCart)
    }

    return(
        <div className={styles.container}>
            {products.map((product) => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    onAdd={handleAdd}
                />
            ) )}
        </div>
    )
}


export default ProductsCards;