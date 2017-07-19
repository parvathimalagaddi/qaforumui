  import React from 'react';
  import NavigationBar from './NavigationBar';
  import Content from './user/Content';
  import Tabs from './user/Tabs';
  import { connect } from 'react-redux';
  import FlashMessagesList from './flash/FlashMessagesList';
  import { deleteAllFlashMessage} from '../actions/flashMessages';
  class App extends React.Component  {
    constructor(props) {
      super(props);
      let tabData = [
                { name: 'Home', isActive: true },
                { name: 'Questions', isActive: false },
                { name: 'Users', isActive: false }
              ]
              let guestTabsData = [
                        { name: 'Home', isActive: true },
                        { name: 'Questions', isActive: false },
                        { name: 'Users', isActive: false },
                        { name: 'Sign Up', isActive: false },
                        { name: 'Log in', isActive: false }
                      ]

                      let userTabsData = [
                                { name: 'Home', isActive: true },
                                { name: 'Questions', isActive: false },
                                { name: 'Users', isActive: false },
                                { name: 'New Question', isActive: false },
                                {name: 'Live Help' , isActive: false}
                              ]
          tabData =   this.props.isAuthenticated ?  userTabsData :    guestTabsData ;
      this.state = {
        searchCriteria: this.props.searchCriteria,
                activeTab:tabData[0],
                tabData:tabData
      };
      this.searchQuestionHandle = this.searchQuestionHandle.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    searchQuestionHandle(searchCriteria) {
      this.setState({ searchCriteria: searchCriteria});
    }
    componentWillReceiveProps(nextProps){

      if (nextProps.searchCriteria !== this.props.searchCriteria || nextProps.isAuthenticated !== this.props.isAuthenticated) {
        let guestTabsData = [
                  { name: 'Home', isActive: true },
                  { name: 'Questions', isActive: false },
                  { name: 'Users', isActive: false },
                  { name: 'Sign Up', isActive: false },
                  { name: 'Log in', isActive: false }
                ]

                let userTabsData = [
                          { name: 'Home', isActive: true },
                          { name: 'Questions', isActive: false },
                          { name: 'Users', isActive: false },
                          { name: 'New Question', isActive: false },
                          {name: 'Live Help' , isActive: false}
                        ]
    let tabData =   nextProps.isAuthenticated  ?  userTabsData :    guestTabsData;
          this.setState({searchCriteria: nextProps.searchCriteria, tabData:tabData});
      }

    }

    componentWillUpdate(nextProps) {
      if (nextProps.searchCriteria !== this.props.searchCriteria || nextProps.isAuthenticated !== this.props.isAuthenticated) {
        let guestTabsData = [
                  { name: 'Home', isActive: true },
                  { name: 'Questions', isActive: false },
                  { name: 'Users', isActive: false },
                  { name: 'Sign Up', isActive: false },
                  { name: 'Log in', isActive: false }
                ]

                let userTabsData = [
                          { name: 'Home', isActive: true },
                          { name: 'Questions', isActive: false },
                          { name: 'Users', isActive: false },
                          { name: 'New Question', isActive: false },
                          {name: 'Live Help' , isActive: false}
                        ]
    let tabData =   nextProps.isAuthenticated  ?  userTabsData :    guestTabsData;
          this.setState({searchCriteria: nextProps.searchCriteria, tabData:tabData});
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

    render () {

      return (
        <div className="container">
          <NavigationBar searchQuestionHandle={this.searchQuestionHandle} changeTab={this.handleClick} />
          <FlashMessagesList />
          <div key="greeting">
            <Tabs activeTab={this.state.activeTab} tabData={this.state.tabData} changeTab={this.handleClick} />
            <Content activeTab={this.state.activeTab} tabData={this.state.tabData} searchCriteria={this.state.searchCriteria} changeTab={this.handleClick}/>
          </div>

          {this.props.children}
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return {
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user
    }
  };
  App.propTypes = {
    deleteAllFlashMessage: React.PropTypes.func.isRequired,
    isAuthenticated: React.PropTypes.bool.isRequired,
    user: React.PropTypes.object.isRequired
  }
export default connect(mapStateToProps, {deleteAllFlashMessage })(App);
