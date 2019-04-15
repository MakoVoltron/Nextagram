import React from 'react';
import '../App.css';

import MDSpinner from 'react-md-spinner';
import UserImages from '../containers/UserImages';
import { Link } from 'react-router-dom';

 
class HomePage extends React.Component {



  render(){
    //Loading Spinner
    if (!this.props.allUsers.length) {
      return <div className="spinner"><MDSpinner size={75} /></div>
    }

    //Homepage
    return (
      <div>
        {/*<h1>Home Page</h1>*/}
       
        <div >
          <div className="profileContainer">
            {
              this.props.allUsers.map((user, index) =>
                <li className="li-box"  key={index}>
                  
                 
                  <div className="profileDetails">
                      
                      <Link to={`/users/${user.id}`}>
                      <img className="img" src={user.profileImage}></img>
                      </Link>
                      
                      <Link to={`/users/${user.id}`}>
                      <div><div className="profileName"><span className="bold">{user.id}:</span> {user.username}</div></div>
                      </Link>    
                  </div>
                  
                  
                  <div className="hrElement"> <hr /></div>
                  
                  <div><UserImages userId={user.id} /> </div>
                </li>
              )
            }
          </div>
          
        </div>
      </div>
    )
  }
}

export default HomePage;




