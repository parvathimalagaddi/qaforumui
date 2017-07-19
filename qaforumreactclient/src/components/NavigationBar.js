import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { deleteAllFlashMessage } from '../actions/flashMessages';
import logo from './logoooo.png';

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: '',
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSignUPClick = this.onSignUPClick.bind(this);
    this.onLigInClick = this.onLigInClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
  }


  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSignUPClick(e) {
    this.props.changeTab({ name: 'Sign Up', isActive: true });
  }

  onProfileClick(e) {
    this.props.changeTab({ name: 'My Profile', isActive: true });
  }

  onLigInClick(e) {
    this.props.changeTab({ name: 'Log in', isActive: true });
  }

  onSubmit(e) {
  e.preventDefault();
  this.props.deleteAllFlashMessage();
  this.props.searchQuestionHandle(this.state.searchCriteria);


}
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.onProfileClick}>
        <span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;
          <span>{this.props.auth.user.sub}</span>
            </a>
        </li>
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link onClick={this.onSignUPClick}><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;Sign up</Link></li>
        <li><Link onClick={this.onLigInClick}><span className="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand"><img src={logo} width="80" height="50"></img></Link>

          </div>

          <form onSubmit={this.onSubmit} className="navbar-form navbar-left">
            <div className="input-group">
              <input type="text" onChange={this.onChange}  name="searchCriteria" className="form-control" placeholder="Search"></input>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
  deleteAllFlashMessage: React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout, deleteAllFlashMessage })(NavigationBar);
