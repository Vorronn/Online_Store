import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../assets/images/logo_2.png";
import {NavLink} from "react-router-dom";


const Footer = (props) => {
    return (
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
    )
}

export default Footer;
