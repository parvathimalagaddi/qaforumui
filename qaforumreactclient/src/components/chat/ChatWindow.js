import React from 'react';
import {addNew} from '../../actions/chatActions'
import { connect } from 'react-redux';
import ChatEdit from './ChatEdit';
import ChatList from './ChatList';

class ChatWindow extends React.Component{
	
	render(){
		let chatList = this.props.chats;
		

		return(			
			<div className="panel panel-default">
			<div className="panel-heading text-center">404 Chat Window</div>
			<div className="panel-body">
				<ChatEdit addNew={this.props.addNew}></ChatEdit>
				<ChatList chats={chatList}></ChatList>
			</div>
			</div>
		)
	}
}

		function mapStateToProps(state){
			return {
				chats : state.chatReducer
			}
		};

		export default connect((mapStateToProps), {addNew})(ChatWindow);