import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return (
        <>
            <Header {...props}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        firstName : state.auth.firstName,
        lastName : state.auth.lastName
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);