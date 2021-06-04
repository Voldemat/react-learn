const initialState = {
    "domain"            :   "http://localhost:8000",
    "base"              :   "http://localhost:8000/api/v1",
    "chats"             :   "http://localhost:8000/api/v1/chats",
    "personal-chats"    :   "http://localhost:8000/api/v1/personal-chats",
    "users"             :   "http://localhost:8000/api/v1/users"

}

function apiUrlReducer(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}
export default apiUrlReducer