import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';
import logo from '../qacomponents/image/img_avatar1.png'
class UserEntity extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
let user = this.props.user;
    return (
        <tr >
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.timezone}</td>
            </tr>
    );
  }
}

UserEntity.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, { addFlashMessage })(UserEntity);
