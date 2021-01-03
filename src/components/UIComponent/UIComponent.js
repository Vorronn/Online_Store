import React from "react";
import styles from "./UIComponent.module.css";
import {NavLink} from "react-router-dom";
import basket from "../../assets/images/basket.png";
import favorite from "../../assets/images/favorite.png";
import user from "../../assets/images/user.png";
import search from "../../assets/images/search.png"

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
                    <img src={"https://static.rfstat.com/logo-presets/103/thumbnail_b3851c2e1943_1x.jpeg"} />
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
                        <button className={styles.inputButton} onClick={()=>(alert("hello"))}><img src={search}/></button>
                    </div>

                </div>
                <nav className={styles.headerNavAccount}>
                    <NavLink to={"user"} activeClassName={styles.activeNavAccount}><img src={user}/></NavLink>
                    <NavLink to={"favorite"} activeClassName={styles.activeNavAccount}><img src={favorite}/></NavLink>
                    <NavLink to={"basket"} activeClassName={styles.activeNavAccount}><img src={basket}/></NavLink>
                </nav>
                <nav className={styles.headerNavProducts}>
                    <NavLink className={styles.startLink +" "+ styles.navProduct} to={"mobile-phone"} activeClassName={styles.activeNavProducts}>Mobile phones</NavLink>
                    <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"headphones"} activeClassName={styles.activeNavProducts}>Headphones</NavLink>
                    <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"phone-cases"} activeClassName={styles.activeNavProducts}>Phone cases</NavLink>
                    <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"battery-charger"} activeClassName={styles.activeNavProducts}>Battery charger</NavLink>
                    <NavLink className={styles.endLink +" "+ styles.navProduct} to={"power-bank"} activeClassName={styles.activeNavProducts}>Power bank</NavLink>
                </nav>
            </header>
            <main className={styles.main}>Main</main>
            <footer className={styles.footer}>Footer</footer>
        </div>

    )
}

export default UIComponent;