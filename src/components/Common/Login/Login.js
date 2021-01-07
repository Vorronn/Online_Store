import React from "react";
import styles from "./Login.module.css";
import close from "../../../assets/images/closeModalWindow.png";
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.nameForm}>
                    <h3>Login</h3>
                    <button onClick={props.closeWindow}><img src={close} alt={"close"} /></button>
                </div>
                <LoginReduxForm {...props}/>
            </div>
        </div>
    )
}

export default Login;