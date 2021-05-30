const initialState = {
    "id":null,
    "token":"c84075889cb5ecc765f317b4415178b58da6249e",
    "email":"you@email.com",

}
function userReducer(state = initialState, action){
    switch(action.type){
        case "SET":
            return state = action.newObject

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