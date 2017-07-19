import React from 'react';
import { connect } from 'react-redux';

class ChatEdit extends React.Component {

    constructor() {
        super();
        this.socketSend = new WebSocket("ws://35.197.31.151/");
        let me = this;
        this.socketSend.onmessage = function(event) {
            let actData = JSON.parse(event.data);
            me.props.addNew({'message' : actData.message, 'user' : actData.user})
        }
    }

    onAddNewClick() {
        let messageContent = {'message' : this.refs.txtChatMessage.value, 'user' : this.props.user.sub};
        this.props.addNew(messageContent);
        this.socketSend.send(JSON.stringify(messageContent));
    }
    render() {
        return ( 
            <section className = "edit">
                <label htmlFor = "" > Message: </label> 
                <input type = "text" ref = "txtChatMessage" />
                <input type = "button" value = "Add New"
                onClick = { this.onAddNewClick.bind(this) } /> 
            </section >)
    }

    componentWillUnmount(){
        this.socketSend.close();
    }
}

        function mapStateToProps(state){
            let socketSend = new WebSocket("ws://35.197.31.151/");
            return {
                user: state.auth.user
            }
        };

export default connect((mapStateToProps), {})(ChatEdit); 