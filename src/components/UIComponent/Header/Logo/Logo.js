import React from "react";
import styles from "./Logo.module.css";
import logo from "../../../../assets/images/logo_2.png";

const Logo = (props) => {
    return (
        <div className={styles.headerLogo}>
            <img src={logo} alt={"logo"}/>
        </div>
    )
}

export default Logo;