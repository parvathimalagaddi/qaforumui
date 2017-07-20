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
			<div className="panel-heading text-center"> <span className="glyphicon glyphicon-user"><h4>{this.props.user.sub}</h4></span> </div>
			<div className="panel-body chatscroll">
				<ChatEdit addNew={this.props.addNew}></ChatEdit>
				<ChatList chats={chatList}></ChatList>
			</div>
			</div>
		)
	}
}

		function mapStateToProps(state){
			return {
				chats : state.chatReducer,
				user : state.auth.user
			}
		};

		export default connect((mapStateToProps), {addNew})(ChatWindow);