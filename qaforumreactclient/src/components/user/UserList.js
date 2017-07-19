import React from 'react';
import UserEntity  from './UserEntity';

class UserList extends React.Component{
			render(){
				let userList = this.props.users;
				let userItems =[];
        let columnCount=8;
        let rowEnded=false;
        let size = 8;
        let smallarray=[];
        let i=0;
        if(userList) {

           userItems = userList.map(function(result,index){
                      return <UserEntity key={index} user={ result } ></UserEntity>
                      });
}
				return (
          <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                    <thead>
                            <tr>
                                <th className="col-md-4">User Name</th>
                                <th >Email ID</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userItems}
                        </tbody>
                    </table>
                </div>
            </div>
				)
			}
		}
export default UserList;
