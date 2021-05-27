function userReducer(state = {}, action){
    switch(action.type){
        case "SET":
            return {...action.newObject}

        case "CHANGETOKEN":
            Object.defineProperty(state, "token", {
                "value":action.token
            })
            return state

        default:
            return state
    }
}
export default userReducer;