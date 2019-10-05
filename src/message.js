import React, {Component} from 'react';

class Message extends Component {

    render(){
        if(this.props.message){
            return (
                <p>{this.props.message}</p>
            )
        }else{
            return (
                <p>No message given</p>
            )
        }
    }
}


export default Message;