import React, { useState, useEffect, useRef } from 'react';
// Import components
import Message from './Message.js';
import { useSelector } from 'react-redux';


function Chat(props){
    const chatId = props.match.params.chatId;
    const [messages, setMessages] = useState([])    
    const user = useSelector(state => state.user)

    const input = useRef()

    function startWebsocket(){
        const socket = new WebSocket(`ws://localhost:8000/ws/chats/${chatId}/`);
        socket.onmessage = (response) => {
            let data = JSON.parse(response.data);

            if (Array.isArray(data)){
                setMessages(data)
            }
            else{
                setMessages(messages.push(data))
            }
        }
        socket.onerror = (response) => {
            console.error(JSON.parse(response))
        }
        return socket
    }
    
    function sendMessage(event){
        socket.send(JSON.stringify({
            "message":input.current.value,
            "token":user.token
        }))
        input.current.value = '';
    }
    useEffect(() => {
        const socket = startWebsocket();
        
        return () => {
            socket.close()
        }


    }, [])
    return (
            <>
                <article>
                    {messages == null ? '': messages.map(msg => {
                        return <Message message={msg} key={msg.id}/>
                    })}
                </article>
                <form id="messageForm" onSubmit={(e) => e.preventDefault()}>
                    <input ref={input} type="text" placeholder="message..." />
                    <input type="submit" onClick={sendMessage} value="send"/>
                    
                </form>
            </>
        )
    
}
export default Chat;