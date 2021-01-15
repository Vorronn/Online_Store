import React from "react";
import styles from "./Main.module.css";
import {Route} from "react-router-dom";
import Products from "./Products/Products";
import MainContent from "./MainContent/MainContent";
import Payment from "./Payment/Payment";
import Delivery from "./Delivery/Delivery";
import Bonuses from "./Bonuses/Bonuses";
import Contacts from "./Contacts/Contacts";
import MainContentContainer from "./MainContent/MainContentContainer";

const Main = (props) => {
    return(
        <main className={styles.main}>
            <div className={styles.mainContent}>
            <Route path={"/main"} render={() => <MainContentContainer />}/>
            <Route path={"/payment"} render={() => <Payment />}/>
            <Route path={"/delivery"} render={() => <Delivery />}/>
            <Route path={"/bonuses"} render={() => <Bonuses />}/>
            <Route path={"/contacts"} render={() => <Contacts />}/>
            <Route path={"/mobile-phone"} render={() => <Products />}/>
            </div>
        </main>
    )
}

export default Main;
