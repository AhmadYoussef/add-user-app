import React from 'react';
import './App.css';
import DisplayUser from './components/DisplayUser';
import AddUser from './components/AddUser';

class App extends React.Component {
    state = {
        users:[]
    }
    updateUser = (newUser)=>{
        const allUser = this.state.users;
        this.setState({users : [...allUser, newUser]});
    }
    
    render(){
    return (
        <>
            <div className='header'>USER APP</div>
            <div className='main'>
                <AddUser click={this.updateUser} />
                <div className="allUser">
                    {this.state.users.map((item, index)=> (<DisplayUser {...item} key={index} />))}
                </div>
            </div>
        </>
    );
    }
}

export default App;
