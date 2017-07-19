import React from 'react';
import Content from './user/Content';
import Tabs from './user/Tabs';
class Greetings extends React.Component {

  constructor(props) {
    super(props);
    let tabData = [
              { name: 'Home', isActive: true },
              { name: 'Questions', isActive: false },
              { name: 'Users', isActive: false }
            ]
    this.state = {
      searchCriteria: '',
      tabData : tabData,
              activeTab:tabData[0]
    };

this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.searchCriteria !== this.props.searchCriteria) {
        this.setState({searchCriteria: nextProps.searchCriteria});
    }

  }

  componentWillUpdate(nextProps) {
    if (nextProps.searchCriteria !== this.props.searchCriteria) {
        this.setState({searchCriteria: nextProps.searchCriteria});
    }
  }

  getInitialState() {
    return {
      activeTab: this.state.tabData[0]
    }
  }
  handleClick(tab) {
    this.setState({activeTab: tab});
  }
  render() {
    return (
      <div key="greeting">
        <Tabs activeTab={this.state.activeTab} tabData={this.state.tabData} changeTab={this.handleClick} />
        <Content activeTab={this.state.activeTab} searchCriteria={this.state.searchCriteria}/>
      </div>
    );
  }

}

Greetings.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Greetings;
