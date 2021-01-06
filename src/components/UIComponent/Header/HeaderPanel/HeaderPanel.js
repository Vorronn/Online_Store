import React from "react";
import styles from "./HeaderPanel.module.css";

const HeaderPanel = (props) => {
    return (
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
    )
}

export default HeaderPanel;