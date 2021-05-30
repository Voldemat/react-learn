import React, { useRef } from 'react';
import axios from 'axios';

import { useHistory, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import setToken from '../store/actions/setToken.js'
import setObject from '../store/actions/setObject.js'




export default function LoggingPage(){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()

    function logIn(event){
        event.preventDefault()
        const data = {
            "username":emailRef.current.value,
            "password":passwordRef.current.value
        }
        axios.post("http://localhost:8000/api/v1/token-auth/", data)
            .then(response => {
                dispatch(setObject(response.data))
                history.push("/")
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <>
            <section>
                <h1>Logging Page</h1>
                <form id="loginform" onSubmit={logIn}>
                    <input type="email" ref={emailRef}/>
                    <input type="password" ref={passwordRef}/>
                    <input type="submit" value="Login" />
                </form>
            </section>
            
        </>
    )
}