import React from "react";
import styles from "./LoginForm.module.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form className={styles.loginForm} onSubmit={props.handleSubmit}>
            <div className={styles.nameField}>Email:</div>
            <div className={styles.field}>
                <Field component={"input"} type={"email"} name={"email"}/>
            </div>
            <div className={styles.nameField}>Password:</div>
            <div className={styles.field}>
                <Field component={"input"} type={"password"} name={"password"}/>
            </div>
            <div className={styles.fieldCheckbox}>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>
                <div className={styles.nameField}>remember Me</div>
            </div>
            <div className={styles.buttonBlock}>
                <button type={"submit"} className={styles.submit}>Login</button>
                <button type={"button"} className={styles.close} onClick={props.closeWindow}>Close</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ( {form: "Login"} )(LoginForm);

export default LoginReduxForm;