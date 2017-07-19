import React from 'react';

class ChatItem extends React.Component{

	render(){
		let chat = this.props.data;		
		return (
			<div className="well well-sm row">
				<div className="col-sm-2">
					<span>{chat.user} </span> 
				</div>
				<div className="col-sm-10">
				<span>{chat.name}</span><br></br>
				<p className="text-right">{chat.createdAt.toString()}</p>
				</div>				
			</div>
		)
	}
}

export default ChatItem;