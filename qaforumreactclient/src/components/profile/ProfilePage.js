import React from 'react';
import ProfileForm from './ProfileForm';
import { connect } from 'react-redux';
import { profileEdit } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import { fetchUserProfile } from '../../actions/profileActions';

class ProfilePage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      userProfile:{}
    }
  }
  componentWillMount(){

        this.props.fetchUserProfile(this.props.auth.user.sub);
   }
  
   componentWillReceiveProps(nextProps) {
     if (nextProps.userProfile !== this.props.userProfile) {
         this.setState({userProfile: nextProps.userProfile});
     }
   }
  render () {
    let { profileEdit, addFlashMessage, userProfile} = this.props;
    return (

      <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <ProfileForm userProfile={userProfile} changeTab={this.props.changeTab} profileEdit={profileEdit}  addFlashMessage={addFlashMessage}/>
          </div>
        </div>

    );
  }
}
function mapStateToProps(state){
  return {
    userProfile: state.profile,
    auth: state.auth
  }
};

ProfilePage.propTypes = {
  profileEdit: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  fetchUserProfile:React.PropTypes.func.isRequired
}
export default connect(mapStateToProps, { profileEdit, addFlashMessage, fetchUserProfile })(ProfilePage);
