import React from "react"
import styles from "./SignUp.module.css";
import close from "../../../assets/images/closeModalWindow.png";
import SignUpReduxForm from "./SignUpForm/SignUpForm";

const SignUp = (props) => {
    return (
        <div className={styles.containerSignUp}>
            <div className={styles.formContainerSignUp}>
                <div className={styles.nameForm}>
                    <h3>Registration</h3>
                    <button onClick={props.closeWindow}><img src={close} alt={"close"} /></button>
                </div>
                <SignUpReduxForm {...props} />
            </div>
        </div>
    )
}

export default SignUp;