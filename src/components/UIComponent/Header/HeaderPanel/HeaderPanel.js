import React, {useState} from "react";
import styles from "./HeaderPanel.module.css";
import Login from "../../../Common/Login/Login";
import SignUp from "../../../Common/SignUp/SignUp";

const HeaderPanel = (props) => {

    const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);
    const [isOpenSingUpForm, setIsOpenSingUpForm] = useState(false);
    const closeWindow = () => {
        setIsOpenLoginForm(false);
        setIsOpenSingUpForm(false);
    }

    const onSubmit = (fromDate) => {
        console.log(fromDate);
        closeWindow();
    }


    return (
        <div className={styles.headerPanel}>
            <div className={styles.geolocation}>sity.Vitebsk</div>
            <div className={styles.communication}>
                <p>контакт-центр с 8:00 до 22:00</p>
                <span>+375297777777</span>
            </div>
            <div className={styles.loginButton}>
                {!props.isAuth
                    ? <>
                        <button onClick={()=>{setIsOpenLoginForm(true)}}>login</button>
                        <button onClick={()=>{setIsOpenSingUpForm(true)}}>sign up</button>
                    </>
                    : <>
                        <div className={styles.fullName}>{props.firstName + " " +props.lastName}</div>
                        <button>Logout</button>
                    </>
                }
            </div>
            {isOpenLoginForm && <Login closeWindow={closeWindow} onSubmit={onSubmit}/>}
            {isOpenSingUpForm && <SignUp closeWindow={closeWindow} onSubmit={onSubmit}/>}
        </div>
    )
}

export default HeaderPanel;