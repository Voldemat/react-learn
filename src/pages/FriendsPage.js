import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';



export default function FriendsPage(){
    // defining state 
    const [friends, setFriends] = useState(null)
    const [error, setError]     = useState(null)

    // get state variables
    const user = useSelector(state => state.user)
    const apiUrls = useSelector(state => state.api)



    // requests to server
    useEffect(() => {
        axios.get(apiUrls.friends,{
            headers:{
                "Authorization":`Token ${user.token}`
            }
        })
        .then(response => {
            setFriends(response.data.friends)
            console.log(response.data)
        })
        .catch(error => {
            setError(error)
            console.error(error)
        })
    }, [friends, user])
    return (
        <>
        <h1>Friends Page</h1>

        {friends ? friends.map(friend => {
            <p>{friend}</p>
        }):<h1>You don`t have friends motherfucker!</h1>}
        </>
    )
}