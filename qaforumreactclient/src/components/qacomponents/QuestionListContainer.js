import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/QuestionActions';
import QuestionList from './QuestionList';

class QuestionListContainer extends React.Component{

  componentDidMount(){
       this.loadQuestions();
   }

   loadQuestions(){
        this.props.fetchQuestions();
    }

			render(){
				let questions = this.props.questions;
				return(

					<div>
						<QuestionList questions={questions} toggle={this.props.toggle}></QuestionList>
					</div>
				)
			}
		}

		function mapStateToProps(state){
			return {
				questions : state.question
			}
		};
    QuestionListContainer.propTypes = {
      questions: React.PropTypes.array.isRequired,
      fetchQuestions: React.PropTypes.func.isRequired
    }

export default connect(mapStateToProps, { fetchQuestions})(QuestionListContainer);
