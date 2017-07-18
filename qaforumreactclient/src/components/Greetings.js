import React from 'react';
import QuestionListContainer from './qacomponents/QuestionListContainer';
class Greetings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: ''
    };

        this.onClick = this.onClick.bind(this);

  }

  componentWillReceiveProps(nextProps){

              const { id, location } = nextProps;
                  const { pathname, state } = location;
                  if(state && state.searchCriteria && state.searchCriteria != this.state.searchCriteria) {
                    this.setState({ searchCriteria: state.searchCriteria });
                  }

      }

  componentWillUpdate(nextProps) {
    console.log("componentWillUpdate: Gree");

    const { id, location } = nextProps;
        const { pathname, state } = location;
        if(state && state.searchCriteria && state.searchCriteria != this.state.searchCriteria) {
          this.setState({ searchCriteria: state.searchCriteria });
        }
  }

  onClick() {
    this.context.router.push('/new-questions');
  }
  render() {
    console.log("componentWillReceiveProps : Geeting");
        const { id, location } = this.props;
        const { pathname, state } = location;
        let searchCriteria="";
      if(state && state.searchCriteria) {
        searchCriteria =state.searchCriteria;
      }
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

      <QuestionListContainer searchCriteria={searchCriteria}/>
      </div>
    );
  }
}

Greetings.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Greetings;
