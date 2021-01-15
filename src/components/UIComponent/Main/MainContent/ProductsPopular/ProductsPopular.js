import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./ProductsPopular.module.css";

const ProductsPopular = (props) => {
    const products = props.products.map(p => (
        (p.id <= 9) ?
            (
                (p.photo.android) ?
                    <ProductItem key={p.id} name={p.name} description={p.description} photo={p.photo.android}
                                 price={p.price}/>
                    :
                    <ProductItem key={p.id} name={p.name} description={p.description} photo={p.photo.iphone}
                                 price={p.price}/>
            ) : null
    ))

    return (
        <div className={styles.productsWrapper}>
            {products}
        </div>
    )
}

export default ProductsPopular;