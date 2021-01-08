const initialState = {
    isAuth: true,
    firstName: "Sergey",
    lastName: "Sapelko",
    Email: "begin@yandex.ru",
    userId: 1
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default authReducer;