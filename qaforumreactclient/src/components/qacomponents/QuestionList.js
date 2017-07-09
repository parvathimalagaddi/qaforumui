import React from 'react';
import QuestionItem  from './QuestionItem';

class QuestionList extends React.Component{
			render(){
				let questionList = this.props.questions;
				let questionsItems = questionList.map((question, index) => (
					<QuestionItem question={question} key={index} toggle={this.props.toggle}></QuestionItem>
				));
				return (
					<section className="questionminilist">
						<ol>
							{questionsItems}
						</ol>
					</section>
				)
			}
		}
export default QuestionList;
