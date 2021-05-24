import React from 'react';
import axios from 'axios';

class Chats extends React.Component{
    constructor(props){
        super(props);
        this.baseUrl = props.baseUrl;
        this.userId = props.userId;
    }
    componentDidMount(){
        const apiUrl = "http://localhost:8000/" + this.baseUrl + "users/" + this.userId + "/";
        axios.get(apiUrl)
            .then(response => {
                console.log(response.data)
                
            })
    }
    render(){
        return(
            <>
                <h1>Chats</h1>
            </>
        )
    }
}
export default Chats