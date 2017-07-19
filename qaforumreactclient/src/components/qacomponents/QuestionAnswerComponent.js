import React from 'react';
import { connect } from 'react-redux';
import { addAnswer, fetchQuestionDetail } from '../../actions/QuestionActions';
import { addFlashMessage , deleteAllFlashMessage} from '../../actions/flashMessages';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import AnswerItem  from './AnswerItem';
import { postAnswer } from '../../actions/eventActions';

class QuestionAnswerComponent extends React.Component{

  constructor(props) {
    super(props);



    this.state = {
      answer: '',
      questionId:this.props.questionId,
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }


  componentWillReceiveProps(nextProps){
              if (nextProps.questionId !== this.props.questionId) {
                  this.setState({questionId: nextProps.questionId});
              }

      }
  onSubmit(e) {
    e.preventDefault();
    this.props.deleteAllFlashMessage();
    if (this.props.isAuthenticated) {
      this.setState({ errors: {}, isLoading: true });
      let answerObj={};
      answerObj.username=this.props.user.sub;
      answerObj.answer = this.state.answer;
      this.props.postAnswer(this.state.questionId, answerObj).then(
        (res) => {
          console.log("Answer submit");
          console.log(res);
          let currentDate = new Date();
          currentDate = currentDate.getMilliseconds();
          let answerObj1={};
          answerObj1.username=this.props.user.sub;
          answerObj1.answer = this.state.answer;
          answerObj1.postTime = currentDate;
          this.props.addAnswer(answerObj1);
          this.props.addFlashMessage({
            type: 'success',
            text: 'Answer posted successfully'
          });
          this.setState({ errors: { } , isLoading: false });
        },
        (err) => {
          console.log("Answer submit Error");
          console.log(err);
          this.props.addFlashMessage({
            type: 'error',
            text: 'Answer post failed: ' + err.response.data
          });
          this.setState({ isLoading: false });
        }
      );
    } else {
      this.props.addFlashMessage({
        type: 'error',
        text: 'You need to login to post answer'
      });
      this.props.questionClickHandle(false, "");
      this.props.changeTab();
    }
  }

  onClick() {
    this.props.questionClickHandle(false, "");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount(){
       this.fetchQuestionDetail();
   }

   fetchQuestionDetail(){
        this.props.fetchQuestionDetail(this.state.questionId);
    }

    calculateDuration(postTime, currentTime) {
      var d = Math.abs(currentTime - postTime) / 1000;                           // delta
      var r = {};                                                                // result
      var s = {                                                                  // structure
        year: 31536000,
        month: 2592000,
        week: 604800, // uncomment row to ignore
        day: 86400,   // feel free to add your own row
        hour: 3600,
        minute: 60,
        second: 1
      };

      Object.keys(s).forEach(function(key){
          r[key] = Math.floor(d / s[key]);
          d -= r[key] * s[key];
      });
      console.log(r);
    }

			render(){
				let questionDetails = this.props.questionDetails;
        const { errors, isLoading, answer } = this.state;
        let answerItemItems=[];
        let ansCount = 0;
        if(questionDetails.answers) {
            ansCount = questionDetails.answers.length;
            answerItemItems = questionDetails.answers.map((answer, index) => (
  					<AnswerItem answer={answer} index={index+1} toggle={this.props.toggle}></AnswerItem>
  				));
        }
				return(
          <div >
          <p className="questionTitleText"><h3>{questionDetails.question}</h3></p>
          <hr></hr>
            <p className="questionText"><h4 className="questionText">{questionDetails.description}</h4></p>
<hr></hr>
            <p><h2 className="h2Style">{ansCount + " Answers"}</h2></p>
            <hr></hr>
            <div className="container">
              {answerItemItems}
            </div>
            <br/>
              <h2>Your Answer</h2>

              <form onSubmit={this.onSubmit}>
                <TextAreaFieldGroup
                  field="answer"
                  label="Answer"
                  name="answer"
                  value={answer}
                  onChange={this.onChange}
                  error={errors.answer}
                />
                <div className="form-group">
                        <div className="col-sm-1">
                          <button type="submit" disabled={isLoading} className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-sm-1">
                          <button type="button" className="btn btn-primary" onClick={this.onClick}>Cancel</button>
                        </div>
                </div>
              </form>
          </div>
				)
			}
		}

		function mapStateToProps(state){
			return {
				questionDetails : state.answers,
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
			}
		};
    QuestionAnswerComponent.contextTypes = {
      router: React.PropTypes.object.isRequired
    }
    QuestionAnswerComponent.propTypes = {
      questionDetails: React.PropTypes.array.isRequired,
      fetchQuestionDetail: React.PropTypes.func.isRequired,
      postAnswer: React.PropTypes.func.isRequired,
      deleteAllFlashMessage: React.PropTypes.func.isRequired,
      isAuthenticated: React.PropTypes.bool.isRequired,
      addFlashMessage: React.PropTypes.func.isRequired,
      user: React.PropTypes.object.isRequired,
      addAnswer:React.PropTypes.func.isRequired
    }

export default connect(mapStateToProps, { addAnswer, fetchQuestionDetail,deleteAllFlashMessage, postAnswer,addFlashMessage })(QuestionAnswerComponent);
