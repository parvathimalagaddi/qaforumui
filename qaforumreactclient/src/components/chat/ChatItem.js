import React from 'react';

import { connect } from 'react-redux';

class ChatItem extends React.Component{

	render(){
		let chat = this.props.data;	
		let currUser = this.props.user.sub;	
		return (	
			<div>
			{chat.user.includes(currUser) ?
				<div className="row">
					<div className="col-sm-6">
						<div className="card chatborderme">
							<h6 className="card-title">{this.props.user.userProfile.firstname}</h6>	
							<hr></hr>				 
							<p className="cart-text"><h5>{chat.name}</h5></p>
							<p className="card-link"><h6> {chat.createdAt.toString()}</h6></p>
						</div>				
					</div>
					<div className="col-sm-6"> </div>
				</div>
			:
				<div className="row">
					<div className="col-sm-6"> </div>
					<div className="col-sm-6">
						<div className="card chatborderyou">	
							<h6 className="card-title">{chat.user}</h6>	
							<hr></hr>									 
							<p className="cart-text"><h5>{chat.name}</h5></p>
							<p className="card-link"><h6> {chat.createdAt.toString()}</h6></p>	
						</div>				
					</div>					
				</div>
			}
			</div>					
		)
	}
}

function mapStateToProps(state){
    return {
        user: state.auth.user
    }
};

export default connect((mapStateToProps), {})(ChatItem); 
