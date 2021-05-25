import React from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';


class Chats extends React.Component{
    constructor(props){
        super(props);
        this.baseUrl = props.baseUrl;
        this.userId = props.userId;
        this.state = {
            chatsIdList:null
        }
    }
    componentDidMount(){
        const apiUrl = "http://localhost:8000/api/v1/chats/"
        axios.defaults.headers.common['Authorization'] = 'Token c84075889cb5ecc765f317b4415178b58da6249e'
        axios.get(apiUrl)
            .then(response => {
                this.setState({
                    chatsIdList:response.data.map(obj => obj.id)
                })
            })
    }
    render(){
        return(
            <>
                <h1>Chats</h1>
                {this.state.chatsIdList == null ? '' : this.state.chatsIdList.map(chatId => {
                    return <Link to={`chats/${chatId}/`} key={chatId}>{chatId}</Link>
                })}
                
            </>
        )
    }
}
export default Chats