import React from 'react';
import UserItem from './UserItem';
import './UserList.css'


function UserList(props){
    const {users} = props;
    return(
        <div>
            <h2 className="list-title">Lista Utilizatori</h2>
            <div className="user-list">
                
            {
                users.map((user, index) => {
                    return <UserItem
                        name={user.name}
                        email={user.email}
                        wage={user.wage}
                        isGoldClient={user.isGoldClient}
                        picture={user.picture}
                        key={index}
                    />
                })
            }
            </div>
        </div>
    )
}

export default UserList;