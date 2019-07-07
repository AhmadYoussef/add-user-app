import React from 'react';
import './AddUser.scss';

class AddUser extends React.Component{
    fullName = React.createRef();
    userName = React.createRef();
    email = React.createRef();
    addNewUser = (e)=>{
        e.preventDefault();
        const newUser= {
            name: this.fullName.current.value,
            user: this.userName.current.value,
            mail: this.email.current.value
        }
        this.props.click(newUser);
        this.fullName.current.value = '';
        this.userName.current.value = '';
        this.email.current.value = '';
    }
    render(){
        return (
            <div className="addUser">
                <h1>display User</h1>
                <form onSubmit={this.addNewUser}>
                    <input type="text" placeholder="Enter your full name" ref={this.fullName}/>
                    <input type="text" placeholder="Enter your User Name" ref={this.userName}/>
                    <input type="text" placeholder="Enter your Email address" ref={this.email}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AddUser;