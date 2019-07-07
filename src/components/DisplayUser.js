import React from 'react';
import './DisplayUser.scss'

const DisplayUser =(props)=>{
        return (
            <div className='displayUser'>
                <h1>display User</h1>
                <p>Name: {props.name}</p>
                <p>User: {props.user}</p>
                <p>Email: {props.mail}</p>
            </div>
        );
}

export default DisplayUser;