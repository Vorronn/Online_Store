const LOGOUT = "authReducer/LOGOUT";

const initialState = {
    isAuth: true,
    firstName: "Sergey",
    lastName: "Sapelko",
    Email: "begin@yandex.ru",
    userId: 1
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}

export const logOut = () => {
    return(
        {type: LOGOUT}
    )
}

export default authReducer;