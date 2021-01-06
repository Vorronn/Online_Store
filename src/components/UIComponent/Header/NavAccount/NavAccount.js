import React from "react";
import styles from "./NavAccoount.module.css";
import {NavLink} from "react-router-dom";
import user from "../../../../assets/images/user.png";
import favorite from "../../../../assets/images/favorite.png";
import basket from "../../../../assets/images/basket.png";

const NavAccount = (props) => {
    return (
        <nav className={styles.headerNavAccount}>
            <NavLink to={"user"} activeClassName={styles.activeNavAccount}><img src={user} alt={"userAccount"}/></NavLink>
            <NavLink to={"favorite"} activeClassName={styles.activeNavAccount}><img src={favorite} alt={"favorite"}/></NavLink>
            <NavLink to={"basket"} activeClassName={styles.activeNavAccount}><img src={basket} alt={"basket"}/></NavLink>
        </nav>
    )
}

export default NavAccount;