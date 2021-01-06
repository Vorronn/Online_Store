import React from "react";
import styles from "./SearchPanel.module.css";
import search from "../../../../assets/images/search.png";

const SearchPanel = (props) => {
    return(
        <div className={styles.headerSearch}>
            <div className={styles.inputForm}>
                <input className={styles.inputSearch} type={"search"} placeholder={"Search"} />
                <button className={styles.inputButton} onClick={()=>(alert("hello"))}><img src={search} alt={"searchButton"}/></button>
            </div>
        </div>
    )
}

export default SearchPanel;