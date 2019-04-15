/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './login'
import SignUpForm from './signup'

class LogInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isSignup: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleSignup = () => {
    this.setState({
      isSignup: !this.state.isSignup
    })
  }


  //Getting Value from Login & Sign Up
  // handleSubmit = event => {
  //   event.preventDefault()
  //   alert('An email was submitted: ' + this.state.email)
  // }
  
  // handleInput = event => {
  //   this.setState({ email: event.target.value})
  // }


  render() {
    const { isSignup } = this.state;

    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.currentUser ? "Logged In" : "Log In"} </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{isSignup ? 'Sign Up' : 'Log In'}</ModalHeader>
          
          <ModalBody>
           
            {this.state.isSignup
              ? <SignUpForm setUser={this.props.setUser} toggle={this.toggle}/>
              : <LoginForm setUser={this.props.setUser} toggle={this.toggle}/>
            }

          </ModalBody> 

          <ModalFooter>
            
            <p> {
                  isSignup ? 'Already a member? Log In!' : 'Not a member? Sign Up!'
                }
                <Button color="info" onClick={this.toggleSignup}>
                  {this.props.buttonLabel}{isSignup ? 'Log In' : 'Sign Up'}
                </Button>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
            </p>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LogInModal;



// <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Log In </Button>

// <Button  color="primary" onClick={this.toggle}>{isSignup ? 'Sign Up' : 'Log In'}</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>