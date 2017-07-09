import React from 'react';
import QuestionListContainer from './qacomponents/QuestionListContainer';
class Greetings extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.context.router.push('/new-questions');
  }
  render() {

    return (
      <div className="jumbotron">


      <div className='page-header'>
        <div className='btn-toolbar pull-right'>
          <div className='btn-group'>
            <button type='button'  onClick={this.onClick} className='btn btn-primary'>Ask Question</button>
          </div>
        </div>
        <h2>Top Questions</h2>
      </div>

      <QuestionListContainer/>
      </div>
    );
  }
}

Greetings.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Greetings;
