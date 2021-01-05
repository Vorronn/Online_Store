import React from "react";
import styles from "./Header.module.css";
import logo from "../../../assets/images/logo_2.png";
import {NavLink} from "react-router-dom";
import search from "../../../assets/images/search.png";
import user from "../../../assets/images/user.png";
import favorite from "../../../assets/images/favorite.png";
import basket from "../../../assets/images/basket.png";

const Header = (props) => {
    return(
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
    )
}

export default Header;