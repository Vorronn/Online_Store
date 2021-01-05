import React from "react";
import styles from "./Main.module.css";
import android from "../../../assets/images/android.png";
import iphone from "../../../assets/images/iphone.png";

const Main = (props) => {
    return(
        <main className={styles.main}>
            <div className={styles.mainSection}>
                <h2 className={styles.productsTitle}>Mobile Phone</h2>
                <div className={styles.selectFilter}>
                    <div className={styles.navigation}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <div className={styles.countProducts}>
                        <span>the number on the page </span>
                        <select>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div className={styles.sortingProducts}>
                        <span>filter </span>
                        <select>
                            <option>by popularity</option>
                            <option>price in ascending order</option>
                            <option>price in descending order</option>
                        </select>
                    </div>
                </div>
                <section className={styles.products}>
                    <div className={styles.productItems}>
                        <div className={styles.productItem}>
                            <h3 className={styles.productName}>Samsung</h3>
                            <div className={styles.productImage}>
                                <img src={android} alt={"mobile Phone"} />
                            </div>
                            <div className={styles.productDescription}>This description product This description product This description product This description product</div>
                            <div className={styles.productButtonGroup}>
                                <button className={styles.productButtonBasket}>In basket</button>
                                <button className={styles.productButtonFavorite}>In favorite</button>
                            </div>
                        </div>
                        <div className={styles.productItem}>
                            <h3 className={styles.productName}>Samsung</h3>
                            <div className={styles.productImage}>
                                <img src={iphone} alt={"mobile Phone"} />
                            </div>
                            <div className={styles.productDescription}>This description product</div>
                            <div className={styles.productButtonGroup}>
                                <button className={styles.productButtonBasket}>In basket</button>
                                <button className={styles.productButtonFavorite}>In favorite</button>
                            </div>
                        </div>
                        <div className={styles.productItem}>
                            <h3 className={styles.productName}>Samsung</h3>
                            <div className={styles.productImage}>
                                <img src={android} alt={"mobile Phone"} />
                            </div>
                            <div className={styles.productDescription}>This description product</div>
                            <div className={styles.productButtonGroup}>
                                <button className={styles.productButtonBasket}>In basket</button>
                                <button className={styles.productButtonFavorite}>In favorite</button>
                            </div>
                        </div>
                        <div className={styles.productItem}>
                            <h3 className={styles.productName}>Samsung</h3>
                            <div className={styles.productImage}>
                                <img src={android} alt={"mobile Phone"} />
                            </div>
                            <div className={styles.productDescription}>This description product</div>
                            <div className={styles.productButtonGroup}>
                                <button className={styles.productButtonBasket}>In basket</button>
                                <button className={styles.productButtonFavorite}>In favorite</button>
                            </div>
                        </div>
                        <div className={styles.productItem}>
                            <h3 className={styles.productName}>Samsung</h3>
                            <div className={styles.productImage}>
                                <img src={android} alt={"mobile Phone"} />
                            </div>
                            <div className={styles.productDescription}>This description product</div>
                            <div className={styles.productButtonGroup}>
                                <button className={styles.productButtonBasket}>In basket</button>
                                <button className={styles.productButtonFavorite}>In favorite</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.filter}>
                    <div className={styles.filterPanel}>
                        <div className={styles.price}>
                            <h4 className={styles.priceName}>Price</h4>
                            <input type={"text"} placeholder={"min price"}/>
                            <input type={"text"} placeholder={"max price"}/>
                        </div>
                        <div className={styles.brand}>
                            <h4 className={styles.brandName}>Brand</h4>
                            <div className={styles.brandItem}>
                                <input type={"checkbox"} /> Samsung
                            </div>
                            <div className={styles.brandItem}>
                                <input type={"checkbox"} /> Iphone
                            </div>
                            <div className={styles.brandItem}>
                                <input type={"checkbox"} /> Honor
                            </div>
                            <div className={styles.brandItem}>
                                <input type={"checkbox"} /> ZTE
                            </div>
                            <div className={styles.brandItem}>
                                <input type={"checkbox"} /> Xiaomi
                            </div>
                        </div>
                        <button className={styles.filterSubmit}>Submit</button>
                    </div>
                </section>
                <div className={styles.selectFilterBottom}>
                    <div className={styles.navigation}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <div className={styles.countProducts}>
                        <span>the number on the page </span>
                        <select>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div className={styles.sortingProducts}>
                        <span>filter </span>
                        <select>
                            <option>by popularity</option>
                            <option>price in ascending order</option>
                            <option>price in descending order</option>
                        </select>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
