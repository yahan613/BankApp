const initialState = {
    isSignedIn: false,
    userName: "NoNo",
    profile: {
        ID: "",
        password: "",
    }
}

export default (state = initialState, { type, payload }) => {
    console.warn(state.isSignedIn);
    switch (type) {
        case "LOGIN":
            return { ...state, isSignedIn: payload };
        case "LOGOUT":
            return { ...state, isSignedIn: payload, userName: initialState.userName };
        default:
            return state;
    }
}
