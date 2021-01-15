import React from "react";
import MainContent from "./MainContent";
import {connect} from "react-redux";

const MainContentContainer = (props) => {
    console.log(props)
    return (
        <div>
            <MainContent {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps , {})(MainContentContainer);