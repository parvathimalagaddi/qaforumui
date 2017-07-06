import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import { addFlashMessage } from '../../actions/flashMessages';
import TextFieldGroup from '../common/TextFieldGroup';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let questionObj={};
    questionObj.username=this.props.user.sub;
    questionObj.question = this.state.question;
    console.log("QUESTION");
    console.log(questionObj);
    this.props.createEvent(questionObj).then(
      (res) => {
        console.log("Question submit");
        console.log(res);
        this.props.addFlashMessage({
          type: 'info',
          text: 'Question posted successfully'
        });
        this.context.router.push('/')
      },
      (err) => {
        console.log("Question submit Error");
        console.log(err);
        //res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        this.setState({ errors: { question: err.response.data } , isLoading: false })
      }
    );
  }

  render() {
    const { question, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Enter question here</h1>

        <TextFieldGroup
          field="question"
          label="Question"
          name="question"
          value={question}
          onChange={this.onChange}
          error={errors.question}
        />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

QuestionForm.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
}
QuestionForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, { createEvent, addFlashMessage })(QuestionForm);
