import React, { useState, useEffect, useRef } from 'react';
// Import components
import Message from './Message.js';
import { useSelector } from 'react-redux';


function Chat(props){
    const chatId = props.match.params.chatId;
    const [messages, setMessages] = useState([])    
    const user = useSelector(state => state.user)

    const inputRef = useRef()
    const submitRef = useRef()
    const scrollRef = useRef()

    function startWebsocket(){
        const socket = new WebSocket(`ws://localhost:8000/ws/chats/${chatId}/`);
        socket.onmessage = (response) => {
            let data = JSON.parse(response.data);

            if (Array.isArray(data)){
                setMessages(data)
            }
            else{
                setMessages(messages => {
                    return [...messages, data]
                })
            }
            scrollRef.current.scrollIntoView({'behavior':'smooth'});
        }
        socket.onerror = (response) => {
            console.error(JSON.parse(response))
        }
        return socket
    }
    
    
    useEffect(() => {
        const socket = startWebsocket();
        function sendMessage(event){
            if (inputRef.current.value === '') return
            socket.send(JSON.stringify({
                "message":inputRef.current.value,
                "token":user.token
            }))
            inputRef.current.value = '';
        }
        submitRef.current.addEventListener("click", sendMessage)
        return () => {
            socket.close()
        }


    }, [])
    return (
            <>
                <article>
                    {messages === null ? '': messages.map(msg => {
                        return <Message message={msg} key={msg.id}/>
                    })}
                    <div ref={scrollRef}></div>
                </article>
                <form id="messageForm" onSubmit={(e) => e.preventDefault()}>
                    <input ref={inputRef} type="text" placeholder="message..." />
                    <input type="submit" ref={submitRef} value="send"/>
                    
                </form>
            </>
        )
    
}
export default Chat;