import React from "react";
import styles from "./SignUpForm.module.css";
import {Field, reduxForm} from "redux-form";

const SignUpForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={styles.signUpForm}>
            <div className={styles.nameField}>First Name</div>
            <div className={styles.field}>
                <Field component={"input"} type={"text"} name={"firstName"}/>
            </div>
            <div className={styles.nameField}>Last Name</div>
            <div className={styles.field}>
                <Field component={"input"} type={"text"} name={"lastName"}/>
            </div>
            <div className={styles.nameField}>Email</div>
            <div className={styles.field}>
                <Field component={"input"} type={"email"} name={"email"}/>
            </div>
            <div className={styles.nameField}>Password</div>
            <div className={styles.field}>
                <Field component={"input"} type={"password"} name={"password"}/>
            </div>
            <div className={styles.nameField}>Confirm password</div>
            <div className={styles.field}>
                <Field component={"input"} type={"password"} name={"confirmPassword"}/>
            </div>
            <div className={styles.buttonBlock}>
                <button type={"submit"} className={styles.signUpButton}>sign up</button>
                <button type={"button"} className={styles.closeButton} onClick={props.closeWindow}>close</button>
            </div>
        </form>
    )
}

const SignUpReduxForm = reduxForm( {form: "signUp"} )(SignUpForm);

export default SignUpReduxForm;