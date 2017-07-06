import React from 'react';

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

      <div className="row spaced-row">
              <div className="col-sm-6"><h4>Top Questions</h4></div>
              <div className="col-sm-6">
                <button type="button" onClick={this.onClick} className="btn btn-success pull-right">Ask Question</button>
              </div>
      </div>


      </div>
    );
  }
}

Greetings.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Greetings;
