import React from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import MyProfilePage from './pages/my-profile';
import MyNavbar from './components/navbar';

import './App.css';


class App extends React.Component {

  state = {
    users: [],
    currentUser: null,
    me: []
  }



  componentDidMount(){
    axios.get('https://insta.nextacademy.com/api/v1/users/')
    .then(result => {
      console.log(result)
      const users = result.data;
      this.setState( {users} );
    })
    .catch(error => {
      console.log('ERROR:', error)
    } )
  }


  setUser = () => {
    const jwt = localStorage.getItem("jwt");
    const username = localStorage.getItem('myUsername');

    if (jwt) {
      this.setState({
        currentUser: {
          jwt,
          username
        }
      })
    } else {
      this.setState({
        currentUser: null,
        
      })
    }
  }


  render() {
    return (
      <div>
          <div>
            <MyNavbar setUser={this.setUser} currentUser={this.state.currentUser}/>
          </div>
          
            <Route exact path="/" component={props => <HomePage {...props} allUsers={this.state.users} />} />
            <Route path="/users/:id" component={props => <UserProfilePage {...props} allUsers={this.state.users} />} />
            <Route exact path="/profile" component={props => <MyProfilePage {...props} me={this.state.me}  />} />
            

      </div>
      
    )
  }
}
    
export default App;