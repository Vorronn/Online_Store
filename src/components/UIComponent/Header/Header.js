import React from "react";
import styles from "./Header.module.css";
import HeaderPanel from "./HeaderPanel/HeaderPanel";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import SearchPanel from "./SearcPanel/SearchPanel";
import NavAccount from "./NavAccount/NavAccount";
import NavProducts from "./NavProducts/NavProducts";

const Header = (props) => {
    return(
        <header className={styles.header}>
            <HeaderPanel {...props} />
            <Logo />
            <NavMenu />
            <SearchPanel />
            <NavAccount {...props}/>
            <NavProducts />
        </header>
    )
}

export default Header;