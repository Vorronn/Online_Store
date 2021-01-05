import android from "../assets/images/android.png";

const initialState = {
    productName: "Mobile Phone",
    products: [
        {id: 1 , name: "Samsung", photo: {android}, description: "This great model mobile phone", price: "499$", count: 10 }
    ]
}

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default productsReducer;