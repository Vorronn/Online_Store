import React from "react";
import styles from "./UIComponent.module.css";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import HeaderContainer from "./Header/HeaderContainer";

const UIComponent = (props) => {
    return (
        <div className={styles.wrapper}>
            <HeaderContainer />
            <Main />
            <Footer />
        </div>

    )
}

export default UIComponent;