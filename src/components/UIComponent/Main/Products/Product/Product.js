import React from "react";
import styles from "./Product.module.css";

const Product = (props) => {
    return (
        <div className={styles.productItem}>
            <h3 className={styles.productName}>{props.name}</h3>
            <div className={styles.productImage}>
                <img src={props.photo} alt={"mobile Phone"} />
            </div>
            <div className={styles.productDescription}>{props.description}</div>
            <div className={styles.productButtonGroup}>
                <button className={styles.productButtonBasket}>In basket</button>
                <button className={styles.productButtonFavorite}>In favorite</button>
            </div>
        </div>
    )
}

export default Product;