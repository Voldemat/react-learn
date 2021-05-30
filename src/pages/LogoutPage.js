import React from 'react';
import { useDispatch } from 'react-redux';
import setObject from '../store/actions/setObject.js'

function LogOutPage(){
    const dispatch = useDispatch()
    dispatch(setObject({"token":null}))
    return (
        <h1>LogOut</h1>
    )
}
export default LogOutPage;