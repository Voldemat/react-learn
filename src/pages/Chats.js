import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import Chat from '../components/Chat.js';
import '../styles/chats.css';



function ChatsPage(props){
    const chatsUrl = "http://localhost:8000/api/v1/chats/";
    const history = useHistory()
    const user = useSelector(state => state.user)
    const chat = useSelector(state => state.chat)
    const dispatch = useDispatch()

    const [chats, setChats] = useState([])

    const form = useRef()

    useEffect(() => {
        if (user.token === null){
            history.push('/login')
        }
        
        // console.log(axios.defaults.headers.common['Authorization'])
        axios.get(chatsUrl,{
          headers: {
            'Authorization': `Token ${user.token}`
          }
        })
            .then(response => {
                setChats(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [user])

    return (
            <>
                <section className="chats-grid">

                    <section className="navbar">
                        <div className="search">
                            Search
                        </div>
                        {chats == null ? '' : chats.map(chat => {
                            return <Link className="chatlink" to={`chats/${chat.id}/`} key={chat.id}>{chat.name === ''?chat.id : chat.name}</Link>
                        })}
                    </section>
                    <Route path="/chats/:chatId" component={Chat} />
                    
                </section>


            </>
    )
    


}


export default ChatsPage