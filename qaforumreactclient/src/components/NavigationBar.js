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
  }


  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
  e.preventDefault();
  this.props.deleteAllFlashMessage();
  this.context.router.push({
              pathname: '/',
              state: {"searchCriteria": this.state.searchCriteria}
            });
}
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout.bind(this)}>
        <span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;
          <span>{this.props.auth.user.sub}</span>
            </a>
        </li>
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;Sign up</Link></li>
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Login</Link></li>
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
