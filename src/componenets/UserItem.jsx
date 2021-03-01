import React from 'react';
import './UserItem.css'

function UserItem (props) {
    const { name, email, isGoldClient, wage, picture } = props;

    return (
        <div className="user-item">
            <h2>{ name }</h2>
            <p>E-mail: { email }</p>
            <p>Salariu: { wage } quid/day</p>
            <img src={picture} alt="not working" height="300px" width="300px"/>
            {
                isGoldClient
                    ? <h4>CLIENT GOLD</h4>
                    : null
            }
            

        </div>
    );
}

export default UserItem;