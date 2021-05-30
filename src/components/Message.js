import React from 'react';
import { useSelector } from 'react-redux';


function Message(props){
    const msg = props.message
    const user = useSelector(state => state.user)

    return (
            <>
                <div className={msg.writer.email === user.email ? "my-message" : "other-message"}>
                    <span>{msg.writer.first_name + " " + msg.writer.last_name}</span>
                    <img src="" alt="" />
                    <p>{msg.text}</p>
                    
                </div>
            </>
        )
}

export default Message;