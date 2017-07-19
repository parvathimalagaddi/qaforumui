import React from 'react';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';

class QuestionPage extends React.Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.addFlashMessage({
        type: 'error',
        text: 'You need to login to access this page'
      });
    this.props.changeTab();
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isAuthenticated) {
      this.props.changeTab();
    }
  }
  render() {
    return (
      <div>
        <QuestionForm  changeTab={this.props.changeTab}/>
      </div>
    );
  }
}

QuestionPage.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

QuestionPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps, { addFlashMessage })(QuestionPage);
