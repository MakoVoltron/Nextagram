import React from 'react';
import IgLogo from '../img/instagram.svg';
import '../App.css';
import LogInModal from './log-in-modal'
import SignUpModal from './sign-up-modal'
import SignUpForm from './signup'
import {Link} from 'react-router-dom';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      // currentUser: null
    };
  }

  // componentDidMount(){
  //   let currentUser = JSON.parse(localStorage.getItem('userData'));
  //   this.setState({
  //     currentUser: currentUser
  //   })
  // }

  logOut = () => {
    localStorage.removeItem("jwt")
    this.props.setUser()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="navbar-branding">
            <a href="/"> <img src={IgLogo}  width="25" height="25"  /></a>
            <div className="separator"></div>
            <NavbarBrand className="brand-font" href="/">Mategram</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                this.props.currentUser 
                  ? <div className="nav-container"><div>Hello&nbsp;</div><div className="bold">{this.props.currentUser.username}</div> 
                  
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          Account
                        </DropdownToggle>
                        <DropdownMenu right>
                    
                        <DropdownItem tag={Link} to={'/profile'}>
                          My Profile
                        </DropdownItem>
                    
                        <DropdownItem divider />
                        <DropdownItem onClick={()=>{this.logOut()}}>
                          Log Out 
                        </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                  
                  </div>
                  : <div className="nav-container">
                    <NavItem>
                      <LogInModal setUser={this.props.setUser} currentUser={this.props.currentUser}>
                        <NavLink className="login" >*This text doesn't matter*</NavLink>
                      </LogInModal>
                    </NavItem>
                  
                    <NavItem>
                      <SignUpModal>
                        <NavLink className="signup" >*This text doesn't matter*</NavLink>
                      </SignUpModal>
                    </NavItem>
                    </div>
              }

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



        
// {
//   <div>
//   {this.state.currentUser 
//     ? <p>"Hello " + this.state.currentUser.username</p> 
//     : <NavItem>
//         <LogInModal setUser={this.props.setUser} currentUser={this.props.currentUser}><NavLink className="login" >*This text doesn't matter*</NavLink></LogInModal>
//       </NavItem>
//       <NavItem>
//         <SignUpModal><NavLink className="signup" >*This text doesn't matter*</NavLink></SignUpModal>
//       </NavItem> 
//   }
 
//   <p>{this.state.currentUser ? "Hello " + this.state.currentUser.username : "Sign in"}</p>
//   </div>
// }




// <NavItem>
// <LogInModal setUser={this.props.setUser} currentUser={this.props.currentUser}><NavLink className="login" >*This text doesn't matter*</NavLink></LogInModal>
// </NavItem>