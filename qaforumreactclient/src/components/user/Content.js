import React from 'react';
import QuestionListContainer from '../qacomponents/QuestionListContainer';
import QuestionAnswerComponent from '../qacomponents/QuestionAnswerComponent';
import SignupPage from '../signup/SignupPage';
import ProfilePage from '../profile/ProfilePage';
import LoginPage from '../login/LoginPage';
import QuestionPage from '../events/QuestionPage';
import UserListContainer from './UserListContainer';
import ChatWindow from '../chat/ChatWindow';
class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: this.props.searchCriteria,
      isQuestionClick: false,
      questionId:""
    };
    this.onClick = this.onClick.bind(this);
    this.questionClickHandle = this.questionClickHandle.bind(this);
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.searchCriteria !== this.props.searchCriteria) {
        this.setState({searchCriteria: nextProps.searchCriteria});
    }

  }

  componentWillUpdate(nextProps) {
    console.log("componentWillUpdate: Gree");

    if (nextProps.searchCriteria !== this.props.searchCriteria) {
        this.setState({searchCriteria: nextProps.searchCriteria});
    }
  }

  onClick() {

    this.props.changeTab( { name: 'New Question', isActive: true });
  }

  questionClickHandle(isQuestionClick, questionId) {
    this.setState({ isQuestionClick: isQuestionClick, questionId:questionId});
    this.props.changeTab( { name: 'Home', isActive: true });
  }

  render() {
    let homeContent = null;
    if(this.state.isQuestionClick) {
      homeContent = <div> <QuestionAnswerComponent tabName = {this.props.activeTab.name} questionClickHandle = {this.questionClickHandle}  questionId={this.state.questionId} changeTab={this.props.changeTab.bind(this,  { name: 'Home', isActive: true })}/></div>
    }else {
      homeContent = <div>
      <div className='page-header'>
        <div className='btn-toolbar pull-right'>
          <div className='btn-group'>
            <button type='button'  onClick={this.onClick} className='btn btn-success'>Ask Question</button>
          </div>
        </div>
        <h2>Top Questions</h2>
      </div>
      <QuestionListContainer isAllQuestion = {false} tabName = {this.props.activeTab.name} questionClickHandle = {this.questionClickHandle} searchCriteria={this.state.searchCriteria}></QuestionListContainer></div>
    }
    return (
      <div id="tabContent">
        {this.props.activeTab.name === 'Home' ?
        homeContent
        :null}

        {this.props.activeTab.name === 'Questions' ?
        <div>
        <div className='page-header'>
          <div className='btn-toolbar pull-right'>
            <div className='btn-group'>
              <button type='button'  onClick={this.onClick} className='btn btn-success'>Ask Question</button>
            </div>
          </div>
          <h2>All Questions</h2>
        </div>
        <QuestionListContainer isAllQuestion = {true} tabName = {this.props.activeTab.name} questionClickHandle = {this.questionClickHandle} searchCriteria={this.state.searchCriteria}></QuestionListContainer></div>
        :null}
        {this.props.activeTab.name === 'New Question' ?
        <div> <QuestionPage tabName = {this.props.activeTab.name}  changeTab={this.props.changeTab.bind(this,  { name: 'Home', isActive: true })}/></div>
        :null}
        {this.props.activeTab.name === 'Users' ?
        <div>
        <div className='page-header'>
          <h2>All Users</h2>
        </div>
        <UserListContainer></UserListContainer></div>
        :null}
        {this.props.activeTab.name === 'Sign Up' ?
        <div>
        <SignupPage changeTab={this.props.changeTab.bind(this,  { name: 'Home', isActive: true })}/></div>
        :null}
        {this.props.activeTab.name === 'Log in' ?
        <div>
        <LoginPage changeTab={this.props.changeTab.bind(this,  { name: 'Home', isActive: true })}/></div>
        :null}
        {this.props.activeTab.name === 'Live Help' ?
        <div>
        <br></br>
        <ChatWindow changeTab={this.props.changeTab.bind(this,  { name: 'Home', isActive: true })}/></div>
        :null}
        {this.props.activeTab.name === 'My Profile' ?
        <div>
        <br></br>
        <ProfilePage changeTab={this.props.changeTab.bind(this,  { name: 'Home', isActive: true })}/></div>
        :null}
      </div>
    );
  }
}

Content.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Content;
