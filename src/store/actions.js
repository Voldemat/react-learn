

function changeUserObject(userObject){
    return {
        "type":"SET",
        "newObject":userObject
    }
}
function changeToken(token){
    return {
        "type":"CHANGETOKEN",
        "token":token
    }
}

export {changeUserObject, changeToken};