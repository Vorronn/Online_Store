import React from "react";
import styles from "./UIComponent.module.css";
import {NavLink} from "react-router-dom";
import basket from "../../assets/images/basket.png";
import favorite from "../../assets/images/favorite.png";
import user from "../../assets/images/user.png";
import search from "../../assets/images/search.png"
import logo from "../../assets/images/logo_2.png";
import android from "../../assets/images/android.png";
import iphone from "../../assets/images/iphone.png";

const UIComponent = (props) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.headerPanel}>
                    <div className={styles.geolocation}>sity.Vitebsk</div>
                    <div className={styles.communication}>
                        <p>контакт-центр с 8:00 до 22:00</p>
                        <span>+375297777777</span>
                    </div>
                    <div className={styles.loginButton}>
                        <button>log in</button>
                        <button>sing up</button>
                    </div>
                </div>
                <div className={styles.headerLogo}>
                    <img src={logo} alt={"logo"}/>
                </div>
                <nav className={styles.headerLinkMenu}>
                    <NavLink to={"main"} activeClassName={styles.activeLink}>Main</NavLink>
                    <NavLink to={"payment"} activeClassName={styles.activeLink}>Payment</NavLink>
                    <NavLink to={"delivery"} activeClassName={styles.activeLink}>Delivery</NavLink>
                    <NavLink to={"bonuses"} activeClassName={styles.activeLink}>Bonuses</NavLink>
                    <NavLink to={"contacts"} activeClassName={styles.activeLink}>Contacts</NavLink>
                </nav>
                <div className={styles.headerSearch}>
                    <div className={styles.inputForm}>
                        <input className={styles.inputSearch} type={"search"} placeholder={"Search"} />
                        <button className={styles.inputButton} onClick={()=>(alert("hello"))}><img src={search} alt={"searchButton"}/></button>
                    </div>

                </div>
                <nav className={styles.headerNavAccount}>
                    <NavLink to={"user"} activeClassName={styles.activeNavAccount}><img src={user} alt={"userAccount"}/></NavLink>
                    <NavLink to={"favorite"} activeClassName={styles.activeNavAccount}><img src={favorite} alt={"favorite"}/></NavLink>
                    <NavLink to={"basket"} activeClassName={styles.activeNavAccount}><img src={basket} alt={"basket"}/></NavLink>
                </nav>
                <nav className={styles.headerNavProducts}>
                    <NavLink className={styles.startLink +" "+ styles.navProduct} to={"mobile-phone"} activeClassName={styles.activeNavProducts}>Mobile phones</NavLink>
                    <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"headphones"} activeClassName={styles.activeNavProducts}>Headphones</NavLink>
                    <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"phone-cases"} activeClassName={styles.activeNavProducts}>Phone cases</NavLink>
                    <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"battery-charger"} activeClassName={styles.activeNavProducts}>Battery charger</NavLink>
                    <NavLink className={styles.endLink +" "+ styles.navProduct} to={"power-bank"} activeClassName={styles.activeNavProducts}>Power bank</NavLink>
                </nav>
            </header>
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
            <footer className={styles.footer}>
                <div className={styles.footerLogo}>
                    <img src={logo} alt={"logo"}/>
                </div>
                <div className={styles.footerBlock}>
                    <h3>Online store</h3>
                    <NavLink to={"main"} activeClassName={styles.activeLinkFooter}>Main</NavLink>
                    <NavLink to={"payment"} activeClassName={styles.activeLinkFooter}>Payment</NavLink>
                    <NavLink to={"delivery"} activeClassName={styles.activeLinkFooter}>Delivery</NavLink>
                    <NavLink to={"bonuses"} activeClassName={styles.activeLinkFooter}>Bonuses</NavLink>
                    <NavLink to={"contacts"} activeClassName={styles.activeLinkFooter}>Contacts</NavLink>
                </div>
                <div className={styles.footerBlock}>
                    <h3>Products</h3>
                    <NavLink to={"mobile-phone"} activeClassName={styles.activeLinkFooter}>Mobile phones</NavLink>
                    <NavLink to={"headphones"} activeClassName={styles.activeLinkFooter}>Headphones</NavLink>
                    <NavLink to={"phone-cases"} activeClassName={styles.activeLinkFooter}>Phone cases</NavLink>
                    <NavLink to={"battery-charger"} activeClassName={styles.activeLinkFooter}>Battery charger</NavLink>
                    <NavLink to={"power-bank"} activeClassName={styles.activeLinkFooter}>Power bank</NavLink>
                </div>
                <div className={styles.footerBlock}>
                    <h3>Account</h3>
                    <NavLink to={"user"} activeClassName={styles.activeLinkFooter}>User</NavLink>
                    <NavLink to={"favorite"} activeClassName={styles.activeLinkFooter}>Favorite</NavLink>
                    <NavLink to={"basket"} activeClassName={styles.activeLinkFooter}>Basket</NavLink>
                </div>
                <div className={styles.footerCopy}>
                    <h3>Copy, 2021</h3>
                </div>
            </footer>
        </div>

    )
}

export default UIComponent;