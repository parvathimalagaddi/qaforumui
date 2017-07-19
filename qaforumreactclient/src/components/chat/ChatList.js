
import React from 'react';

import ChatItem from './ChatItem';

class ChatList extends React.Component{
	render(){
		let chatList = this.props.chats;
		let chatItems = [];
		if(chatList){
		 chatItems = chatList.map((chat, index) => (
			<ChatItem data={chat} key={index} ></ChatItem>
		));			
		}

		return (
			<section>
				<ol>
					{chatItems}
				</ol>
			</section>
		)
	}
}

export default ChatList;