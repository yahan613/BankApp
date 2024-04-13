export const loginAction = () => {
    return{
        type: "LOGIN",
        payload: true,
    }
}

export const logoutAction = () => {
    return{
        type: "LOGOUT",
        payload: false,
    }
}


export const changeNameAction = (userName) => {
    return{
        type: "CHANGE_NAME",
        payload: userName,
    }
}