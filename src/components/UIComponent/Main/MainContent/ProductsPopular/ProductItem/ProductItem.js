import React from "react";
import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
    console.log(props.products)
    return (
        <div className={styles.product}>
            <div className={styles.productPhoto} >
                <img src={props.photo} alt={""} />
            </div>
            <h3 className={styles.productName}>{props.name}</h3>
            <div className={styles.productDescription}>
                <p>{props.description}</p>
            </div>
            <div className={styles.productPrice}>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default ProductItem;