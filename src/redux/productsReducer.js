import android from "../assets/images/android.png";
import iphone from "../assets/images/iphone.png";

const initialState = {
    productName: "Mobile Phone",
    products: [
        {
            id: 1 ,
            name: "Samsung",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 2 ,
            name: "Apple",
            photo: {iphone},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 3 ,
            name: "Apple",
            photo: {iphone},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 4 ,
            name: "Xiaomi",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 5 ,
            name: "Samsung",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 6 ,
            name: "Samsung",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 7 ,
            name: "Fly",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 8 ,
            name: "Honor",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 9 ,
            name: "Xiaomi",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        },
        {
            id: 10 ,
            name: "Honor",
            photo: {android},
            description: "This great model mobile phone",
            price: "499$",
            count: 10
        }

    ]
}

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default productsReducer;