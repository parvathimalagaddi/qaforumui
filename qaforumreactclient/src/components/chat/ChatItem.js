import React from 'react';

class ChatItem extends React.Component{

	render(){
		let chat = this.props.data;		
		return (
			<li className="well well-sm">
				<span>{chat.user} : {chat.name}</span>
				<div className="datetime">[{chat.createdAt.toString()}]</div>
			</li>
		)
	}
}

export default ChatItem;