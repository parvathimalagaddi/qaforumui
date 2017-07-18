import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import { addFlashMessage } from '../../actions/flashMessages';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      description:'',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick() {
    this.context.router.push('/');
  }

  onSubmit(e) {
    e.preventDefault();
    let questionObj={};
    questionObj.username=this.props.user.sub;
    questionObj.question = this.state.question;
    questionObj.description = this.state.description;
    console.log("QUESTION");
    console.log(questionObj);
    this.props.createEvent(questionObj).then(
      (res) => {
        console.log("Question submit");
        console.log(res);
        this.props.addFlashMessage({
          type: 'success',
          text: 'Question posted successfully'
        });
        this.setState({ errors: { } , isLoading: false });
        this.context.router.push('/')
      },
      (err) => {
        console.log("Question submit Error");
        console.log(err);
        //res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        this.setState({ errors: { question: err.response.data } , isLoading: false });
      }
    );
  }

  render() {
    const { question,description, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Enter question here</h1>

        <TextFieldGroup
          error={errors != undefined ? errors.question: ""}
          label="Title"
          onChange={this.onChange}
          value={this.state.question}
          field="question"
        />
        <TextAreaFieldGroup
          field="description"
          label="Description"
          name="description"
          value={description}
          onChange={this.onChange}
          error={errors.description}
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
