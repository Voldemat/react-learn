import React from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import Chat from '../components/Chat.js';
import '../styles/chats.css';

class Chats extends React.Component{
    constructor(props){
        super(props);
        this.baseUrl = props.baseUrl;
        this.userId = props.userId;
        this.state = {
            chatsList:null
        }
    }
    componentDidMount(){
        const apiUrl = "http://localhost:8000/api/v1/chats/"
        axios.defaults.headers.common['Authorization'] = 'Token c84075889cb5ecc765f317b4415178b58da6249e'
        axios.get(apiUrl)
            .then(response => {
                this.setState({
                    chatsList:response.data
                })
            })
        this.form = document.querySelector("form#text_input")
    }
    render(){
        return(
            <>
                <section className="chats-grid">

                    <section className="navbar">
                        <div className="search">
                            Search
                        </div>
                        {this.state.chatsList == null ? '' : this.state.chatsList.map(chat => {
                            return <Link className="chatlink" to={`chats/${chat.id}/`} key={chat.id}>{chat.name === ''?chat.id : chat.name}</Link>
                        })}
                    </section>
                    <Route path="/chats/:chatId" component={Chat} />
                    
                </section>
            </>
        )
    }
}
export default Chats