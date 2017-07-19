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
        this.refs.txtChatMessage.value = "";
        this.props.addNew(messageContent);
        this.socketSend.send(JSON.stringify(messageContent));
    }
    render() {
        return ( 
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" ref = "txtChatMessage"></input>
                    <button className="form-control btn btn-success" onClick = { this.onAddNewClick.bind(this) } > Broadcast </button> 
                </div>             
            </form>)
    }

    componentWillUnmount(){
        this.socketSend.close();
    }
}

        function mapStateToProps(state){
            return {
                user: state.auth.user
            }
        };

export default connect((mapStateToProps), {})(ChatEdit); 