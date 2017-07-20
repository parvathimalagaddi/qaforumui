
import React from 'react';

import ChatItem from './ChatItem';
import { connect } from 'react-redux';


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
				<ul>
					{chatItems}
				</ul>
			</section>
		)
	}
}

        function mapStateToProps(state){
            return {
                user: state.auth.user
            }
        };

export default connect((mapStateToProps), {})(ChatList); 