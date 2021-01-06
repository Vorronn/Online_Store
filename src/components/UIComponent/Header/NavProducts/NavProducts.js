import React from "react"
import styles from "./NavProducts.module.css";
import {NavLink} from "react-router-dom";

const NavProducts = (props) => {
    return (
        <nav className={styles.headerNavProducts}>
            <NavLink className={styles.startLink +" "+ styles.navProduct} to={"mobile-phone"} activeClassName={styles.activeNavProducts}>Mobile phones</NavLink>
            <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"headphones"} activeClassName={styles.activeNavProducts}>Headphones</NavLink>
            <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"phone-cases"} activeClassName={styles.activeNavProducts}>Phone cases</NavLink>
            <NavLink className={styles.middleLink +" "+ styles.navProduct} to={"battery-charger"} activeClassName={styles.activeNavProducts}>Battery charger</NavLink>
            <NavLink className={styles.endLink +" "+ styles.navProduct} to={"power-bank"} activeClassName={styles.activeNavProducts}>Power bank</NavLink>
        </nav>
    )
}

export default NavProducts;