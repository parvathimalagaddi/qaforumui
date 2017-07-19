import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userAction';
import UserList from './UserList';

class UserListContainer extends React.Component{

  constructor(props) {
    super(props);
  }
  componentDidMount(){
       this.loadUsers();
   }
   componentWillMount(){

         console.log("componentWillMount : QuestionListCon");
    }

   loadUsers(searchCriteria){
        this.props.fetchUsers();
    }

			render(){
				let users = this.props.users;
				return(

					<div>
						<UserList users={users}></UserList>
					</div>
				)
			}
		}

		function mapStateToProps(state){
			return {
				users : state.user
			}
		};
    UserListContainer.propTypes = {
      users: React.PropTypes.array.isRequired,
      fetchUsers: React.PropTypes.func.isRequired
    }

export default connect(mapStateToProps, { fetchUsers})(UserListContainer);
