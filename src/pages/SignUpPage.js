import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export default class SignUpPage extends React.Component {

  
    componentDidMount(){
    axios.get('https://insta.nextacademy.com/api/v1/users/new')
    
    .then(response => {
      console.log(response)
    })

    .catch(error => {
      console.log('ERROR:', error)
    } )
  }


  render() {
    return (
      <div>
        
      </div>
      
    )
  }
}
    
