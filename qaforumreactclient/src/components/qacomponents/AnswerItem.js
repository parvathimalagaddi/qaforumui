import React from 'react';
import logo from './image/img_avatar1.png'

class AnswerItem extends React.Component {
			onBugClick(){
				this.props.toggle(this.props.data);
			}
			render(){
				let answer = this.props.answer;
				let index = this.props.index;
        let postTime = new Date(answer.postTime).toString();
				return(
					<div className="container">
							<p><h6 className="questionText">
								{answer.answer}
								</h6>
							</p>

							<br/>
							<img src={logo} className="media-object" width="30" height="30"/>
							<h6 className="media-heading">{answer.username}</h6>
							<h6>{postTime}</h6>
							<hr></hr>
						</div>


				);

			}
		}
export default AnswerItem;
