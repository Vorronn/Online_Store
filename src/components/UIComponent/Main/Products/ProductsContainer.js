import React from "react";
import Products from "./Products";
import {connect} from "react-redux";

const ProductsContainer = (props) => {

    return(
        <>
            <Products {...props}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products : state.products.products
    }
}

export default connect(mapStateToProps, {})(ProductsContainer);