import React from 'react';
import classnames from 'classnames';
import map from 'lodash/map';
import timezones from '../../data/timezones';
import TextFieldGroup from '../common/TextFieldGroup';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      timezone: '',
      errors:{},
      isLoading: false,
      invalid: false
    }
     this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }


   componentWillReceiveProps(nextProps){
               if (nextProps.userProfile !== this.props.userProfile) {
                    this.setState({username: nextProps.userProfile.username, email:nextProps.userProfile.email, timeZone: nextProps.userProfile.timezone});
               }

       }

/*   componentWillReceiveProps(nextProps){

     if (nextProps.searchCriteria !== this.props.searchCriteria) {
         this.setState({searchCriteria: nextProps.searchCriteria});
     }

   }*/


 validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.username)) {
    errors.username = 'This field is required';
  }
  if (Validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isNull(data.timezone)) {
    errors.timezone = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
  onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = this.validateInput(this.state);

    if (!isValid) {
      this.setState({ errors: errors , invalid: !isValid});
    } else {
      this.setState({invalid: isValid});
    }

    return isValid;
}

  onSubmit(e) {

    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      /*this.props.profileEdit(this.state).then(
        (res) => {
          console.log("res" + res);
          this.props.addFlashMessage({
            type: 'success',
            text: 'Profile updated successfully'
          });
            this.props.changeTab();
        },
        (err) => {
          console.log("error" + err);
          console.log(err);
          this.setState({ errors: err.data, isLoading: false })
          this.props.addFlashMessage({
            type: 'success',
            text: 'Problem in profile update.'
          });
      }
    );*/
    }
  }


  render() {
     const { errors } = this.state;
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return(
      <form onSubmit={this.onSubmit}>
      <h1> My Profile </h1>
        <TextFieldGroup
          error={errors != undefined ? errors.username : ""}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
          isDisabled = {true}
        />
        <TextFieldGroup
          error={errors != undefined ? errors.email: ""}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />


        <div className={classnames('form-group', { 'has-error': errors != undefined ? errors.timezone : "" })}>
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
          >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
          {errors!= undefined && errors.timezone && <span className="help-block">{errors.timezone}</span>}
          </div>

        <div className="form-group">
          <button disabled={this.state.isLoading}  className="btn btn-primary btn-lg">
            Submit
          </button>
        </div>

      </form>
    );
  }

}


ProfileForm.propTypes = {
  profileEdit: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

ProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ProfileForm;
