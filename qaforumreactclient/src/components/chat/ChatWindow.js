import React from 'react';
import {addNew} from '../../actions/chatActions'
import { connect } from 'react-redux';
import ChatEdit from './ChatEdit';
import ChatList from './ChatList';

class ChatWindow extends React.Component{
	
	render(){
		let chatList = this.props.chats;
		

		return(
			<div>
				<ChatEdit addNew={this.props.addNew}></ChatEdit>
				<ChatList chats={chatList}></ChatList>
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