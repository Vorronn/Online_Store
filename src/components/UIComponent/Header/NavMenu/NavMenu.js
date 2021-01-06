import React from "react";
import styles from "./NavMenu.module.css";
import {NavLink} from "react-router-dom";

const NavMenu = (props) => {
    return(
        <nav className={styles.headerLinkMenu}>
            <NavLink to={"main"} activeClassName={styles.activeLink}>Main</NavLink>
            <NavLink to={"payment"} activeClassName={styles.activeLink}>Payment</NavLink>
            <NavLink to={"delivery"} activeClassName={styles.activeLink}>Delivery</NavLink>
            <NavLink to={"bonuses"} activeClassName={styles.activeLink}>Bonuses</NavLink>
            <NavLink to={"contacts"} activeClassName={styles.activeLink}>Contacts</NavLink>
        </nav>
    )
}

export default NavMenu;