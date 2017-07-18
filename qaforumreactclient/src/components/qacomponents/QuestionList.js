import React from 'react';
import QuestionItem  from './QuestionItem';

class QuestionList extends React.Component{
			render(){
				let questionList = this.props.questions;
				let questionsItems =[];
				let searchHeader ="";
				if(this.props.searchCriteria != "") {
					searchHeader = <div><h5>Search Results for <strong>"{this.props.searchCriteria}"</strong></h5> <hr></hr></div>
				}
				if(this.props.questions === "") {
					questionsItems = <div className="alert alert-success"><strong>Sorry, no results were found</strong>.</div>
				} else {
				 questionsItems = questionList.map((question, index) => (
					<QuestionItem question={question} key={index} toggle={this.props.toggle}></QuestionItem>
				));
			}
				return (
					<section className="questionminilist">
						<ol>
							{searchHeader}
							{questionsItems}
						</ol>
					</section>
				)
			}
		}
export default QuestionList;
