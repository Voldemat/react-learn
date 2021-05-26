import React from 'react';

class Message extends React.Component{
    constructor(props){
        super(props);
        this.msg = this.props.message;
    }
    render(){
        return (
            <>
                <div className={this.msg.writer === "you@email.com"? "message-my" : "message-other"}>
                    <p>{this.msg.text} - {this.msg.writer}</p>
                </div>
            </>
        )
    }
}
export default Message;