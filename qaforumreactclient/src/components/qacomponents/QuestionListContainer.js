import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/QuestionActions';
import QuestionList from './QuestionList';

class QuestionListContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: ""
    };
  }
  componentDidMount(){


   }
   componentWillMount(){

     if(this.props.isAllQuestion) {
       this.loadQuestions();
     } else {
         this.loadQuestions(this.props.searchCriteria);
     }
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.searchCriteria != this.props.searchCriteria) {
          if(this.props.isAllQuestion) {
            this.loadQuestions();
          } else {
              this.loadQuestions(nextProps.searchCriteria);
          }
        }
    }
   loadQuestions(searchCriteria){
        this.props.fetchQuestions(searchCriteria);
    }

			render(){
				let questions = this.props.questions;
				return(

					<div>
						<QuestionList questionClickHandle={this.props.questionClickHandle} questions={questions} searchCriteria={this.state.searchCriteria} toggle={this.props.toggle}></QuestionList>
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
