/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './login'
import SignUpForm from './signup'

export default class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
        <Button onClick={this.toggle}> Sign Up </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{isSignup ? 'Log In' : 'Sign Up'}</ModalHeader>
          
          <ModalBody>
            {this.state.isSignup
              ? <LoginForm/>
              : <SignUpForm/>
            }

          </ModalBody> 

          <ModalFooter>
            
            <p> {
                  isSignup ? 'Not a member? Sign Up!' : 'Already a member? Log In!'
                }
                <Button color="info" onClick={this.toggleSignup}>
                  {this.props.buttonLabel}{isSignup ? 'Sign Up' : 'Log In'}
                </Button>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
            </p>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}





// <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Log In </Button>

// <Button  color="primary" onClick={this.toggle}>{isSignup ? 'Sign Up' : 'Log In'}</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>