import React from "react";
import styles from "./UIComponent.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const UIComponent = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Footer />
        </div>

    )
}

export default UIComponent;