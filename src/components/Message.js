import React from 'react';

class Message extends React.Component{
    constructor(props){
        super(props);
        this.msg = this.props.message;
    }
    render(){
        return (
            <>
                <p>{this.msg.text} - {this.msg.writer} - {this.msg.created_at}</p>
            </>
        )
    }
}
export default Message;