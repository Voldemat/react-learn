import React from 'react';

// Import components
import Message from './Message.js';

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chatId:this.props.chatId,
            messages:null,
        }
        this.url = `ws://localhost:8000/ws/chats/${this.props.chatId}/`
    }
    componentDidMount(){
        this.startWebsocket();
    }
    componentWillUnmount(){
        this.socket.close();
        this.socket = null;
    }
    startWebsocket(){
        this.socket = new WebSocket(this.url);

        this.socket.onmessage = (response) => {
            let data = JSON.parse(response.data);
            console.log(data);
            
            if (Array.isArray(data)){
                this.setState({
                    messages:data
                })
            }
            else{
                let newState = this.state.messages;
                newState.push(data)

                this.setState({
                    messages: newState
                })
            }
        }
        this.socket.onerror = (response) => {
            alert(response);
        }
    }
    
    render(){
        return (
                <>
                    {this.state.messages == null ? '': this.state.messages.map(msg => {
                        return <Message message={msg} key={msg.id}/>
                    })}
                </>
        )
    }
}
export default Chat;