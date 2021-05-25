import React from 'react';

// Import components
import Message from './Message.js';

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chatId:this.props.match.params.chatId,
            messages:null,
        }
        this.userId = "2e234bee-e83c-4081-ad0d-207ef6a8c10a";
        this.url = `ws://localhost:8000/ws/chats/${this.props.match.params.chatId}/`
    
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentDidMount(){
        this.startWebsocket();
        this.input = document.querySelector('article input[type="text"]')
    }
    componentWillUnmount(){
        this.socket.close();
        this.socket = null;
        this.input = null;
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
    sendMessage(event){
        event.preventDefault();
        this.socket.send(JSON.stringify({
            "message":this.input.value,
            "token":"c84075889cb5ecc765f317b4415178b58da6249e"}))
    }
    render(){
        return (
                <>
                    <article>
                        {this.state.messages == null ? '': this.state.messages.map(msg => {
                            return <Message message={msg} key={msg.id}/>
                        })}
                        <input type="text" placeholder="message..." />
                        <input type="submit" onClick={this.sendMessage} />
                    </article>
                </>
        )
    }
}
export default Chat;