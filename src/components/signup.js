import React from 'react';
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import axios from 'axios';

export default class SignUpForm extends React.Component {
  
  state = {
    username: '',
    email: '',
    password: '',
    passwordConf: ''
  }
  
    
  handleSubmit = event => {
    event.preventDefault()
    const { password, passwordConf } = this.state;

    // if (this.state.email && (this.state.username && this.state.password)) {
    //   alert('Success!')

    // } else {
    //   alert('Please provide values!')
    // }  

    if  (password !== passwordConf) {
      alert("Passwords don't match!")
    } else {
      
      //make an API call
      axios.post('https://insta.nextacademy.com/api/v1/users/',
        { 
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        })
      .then(response => {
          console.log(response)
        })
       .catch(error => {
         console.log(error)
       })
      }
  }
 
  handleInput = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  fieldValidation = () => {
    if (this.state.email && this.state.password && this.state.username && this.state.passwordConf) {
         return false }
    return true
   
  }
  
  render() {
    return (

      <div>
        
        <Form onSubmit={this.handleSubmit}>
          
        <FormGroup>
            <Label for="username">Username</Label>
            <Input onChange={this.handleInput} value={this.state.username} type="text" name="username"  placeholder="Username" />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this.handleInput} value={this.state.email} type="email" name="email"  placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input onChange={this.handleInput} value={this.state.password} type="password" name="password"  placeholder="Password" />
          </FormGroup>

          <FormGroup>
            <Label for="password-validation">Confirm Password</Label>
            <Input onChange={this.handleInput} value={this.state.passwordConf} type="password" name="passwordConf"  placeholder="Confirm password" />
          </FormGroup>
          
          <input disabled={ this.fieldValidation() }  class="btn btn-primary" type="submit" value="Sign Up"></input>

        </Form>
      </div>
    );
  }
}



// BACKUP
  // handleUsernameInput = event => {
  //   this.setState({ username: event.target.value})
  // }
 
  // handleEmailInput = event => {
  //   this.setState({ email: event.target.value})
  // }

  // handlePasswordInput = event => {
  //   this.setState({ password: event.target.value})
  // }

  // handlePasswordInput = event => {
  //   this.setState({ passwordConf: event.target.value})
  // }