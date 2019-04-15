import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    status: ''
  }

  //Alert if you submitted values OR Alert asking for typing in some
  handleSubmit = event => {
    event.preventDefault()
    // if(this.state.email && this.state.password){
    //   alert('You submited: ' + this.state.email)
    // } else {
    //   alert('Please provide values!')
    // }  

    axios.post('https://insta.nextacademy.com/api/v1/login',
    { 
      
      email: this.state.email,
      password: this.state.password
    })
  
    .then(response => {
      console.log(response)
      localStorage.setItem("jwt", response.data.auth_token)
      localStorage.setItem("myUsername", response.data.user.username)
      localStorage.setItem("myProfileImage", response.data.user.profile_picture)
      localStorage.setItem("userData", JSON.stringify(response.data.user))

      this.props.setUser();
      if (response.status === 201) {
        alert(response.data.message) //You're logged in
      } else alert ("There was an error with your log in")


    })
   .catch(error => {
     console.log(error)
   })
   this.props.toggle();
  }
  
  handleInput = event => {
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input onChange={this.handleInput} value={this.state.password} type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        
       <input disabled={!this.state.email || !this.state.password }  class="btn btn-primary" type="submit" value="Login"></input>
      </Form>
    );
  }
}

